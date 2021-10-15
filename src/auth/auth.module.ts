import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from 'src/roles/role.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AuthService,
    JwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}