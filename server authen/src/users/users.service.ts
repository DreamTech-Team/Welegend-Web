/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUserWithEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async getAllUser(): Promise<User[]> {
    const users = await this.userRepository.find();

    users.map((user) => delete user.password);

    return users;
  }

  async getUserById(userId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    return user;
  }

  async updateUserProfile(userId: string, data: Partial<User>): Promise<User> {
    const userToUpdate = await this.userRepository.findOne({ where: { id: userId } });

    if (!userToUpdate) {
      throw new Error('No user has this id');
    }

    if (data.name) userToUpdate.name = data.name;
    if (data.address !== undefined) userToUpdate.address = data.address;
    if (data.gender) userToUpdate.gender = data.gender;
    if (data.phone) userToUpdate.phone = data.phone;
    if (data.image) userToUpdate.image = data.image;
    if (data.birthdate) userToUpdate.birthdate = data.birthdate;

    await this.userRepository.save(userToUpdate);

    return userToUpdate;
  }

  async deleteUser(userId: string): Promise<{ message: string }> {
    const userToDelete = await this.userRepository.findOne({ where: { id: userId } });

    if (!userToDelete) {
      throw new Error('No user has this id');
    }

    await this.userRepository.remove(userToDelete);

    return { message: 'Successfully Delete' };
  }

  async updatePassword(userId: string, oldPassword: string, newPassword: string): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
        throw new Error('No user has this id');
    }

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (!isOldPasswordValid) {
      throw new UnauthorizedException('Password is wrong');
    }

    if (oldPassword === newPassword) {
      throw new UnauthorizedException('New password must be different from old');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedNewPassword;
    await this.userRepository.save(user);

    return { message: 'Password is updated successfully' };
  }
}
