/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from '../users/entities/user.entity';
import User from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly firebaseModule: FirebaseModule
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserWithEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...others } = user;

      return others;
    }

    return null;
  }

  async register(registerDto: RegisterDto) {
    const user = await this.userRepository.findOne({
      where: { email: registerDto.email },
    });

    if (user) {
      throw new ConflictException('Email already exist');
    }

    const newUser = this.userRepository.create(registerDto);

    await this.userRepository.save(newUser);

    return newUser;
  }

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const comparePassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!comparePassword) {
      throw new UnauthorizedException('Password has been wrong');
    }

    if (
      loginDto.role === UserRole.ADMIN ||
      loginDto.role === UserRole.CHILDREN ||
      loginDto.role === UserRole.PARENT
    ) {
      user.role = loginDto.role || user.role;
      await this.userRepository.save(user);
    } else {
      throw new NotFoundException('Role must be admin / parent / children');
    }

    const access_token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const refresh_token = this.jwtService.sign(
      { id: user.id, email: user.email, role: user.role },
      { expiresIn: '7d' },
    );

    delete user.password;

    return {
      ...user,
      access_token: access_token,
      refresh_token: refresh_token,
    };
  }

  signRefreshToken(user: User) {
    return {
      access_token: this.jwtService.sign({
        id: user.id,
        email: user.email,
        role: user.role,
      }),
    };
  }

  async googleLogin(req: any) {
    if (!req.user) {
      return 'No user from Google';
    }
  
    const userEmail = req.user.email;
  
    let user = await this.userRepository.findOne({ where: { email: userEmail } });
  
    if (!user) {
      const newUser = await this.createGoogleUser(req.user);
      user = await this.userRepository.save(newUser);
    }
  
    const tokens = this.generateTokens(user);
  
    return {
      message: user ? 'User Info from DB' : 'User Info from Google',
      user,
      ...tokens,
    };
  }
  
  private async createGoogleUser(googleUser: any) {
    const { email, firstname, lastname, picture } = googleUser;
    const newUser = this.userRepository.create({
      email,
      name: `${firstname} ${lastname}`,
      image: picture,
      phone: '',
      password: 'password',
    });
    return newUser;
  }
  
  private generateTokens(user: User) {
    const access_token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  
    const refresh_token = this.jwtService.sign(
      { id: user.id, email: user.email, role: user.role },
      { expiresIn: '7d' },
    );
  
    return {
      access_token,
      refresh_token,
    };
  }

  // Verify phone number
  async verifyPhoneNumber(phoneNumber: string, firebaseToken: string): Promise<boolean> {
    try {
      const decodedFirebase = await this.firebaseModule.verifyFirebaseToken(firebaseToken);
      if (!decodedFirebase || phoneNumber.substring(1) !== decodedFirebase?.phone_number.substring(3)) {
        return false;
      }
      return true;
    } catch (error) {
      throw new Error('Phone number verification failed. Please make sure your credentials are correct.');
    }
  }
}
