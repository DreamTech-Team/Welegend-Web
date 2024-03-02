/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from '../auth/guard/jwt.guard';
import User from './entities/user.entity';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/roles.decorator';


@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtGuard)
  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get()
  getAllUsers() {
    return this.usersService.getAllUser()
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  getUserById(@Param('id') userId: string) {
    return this.usersService.getUserById(userId)
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  async updateUserProfile(@Param('id') userId: string, @Body() updateData: Partial<User>) {
    try {
      const updatedUser = await this.usersService.updateUserProfile(userId, updateData);
      return { message: 'Update Successfully', user: updatedUser };
    } catch (error) {
      return { error: error.message };
    }
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteUserById(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId)
  }

  @UseGuards(JwtGuard)
  @Patch('update-password/:id')
  async updatePassword(
    @Param('id') userId: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
  ) {
    try {
      const result = await this.usersService.updatePassword(userId, oldPassword, newPassword);
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }

}
