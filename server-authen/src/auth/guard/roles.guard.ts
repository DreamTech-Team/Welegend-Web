/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();

    if (request?.headers?.authorization) {
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.jwtService.verify(token);
      const userRole = decoded['role'];

      return roles.includes(userRole);
    }
  }
}
