import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../dto/login-user.dto';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/utils/enums';
import { JwtAuthGuard } from './auth-guard';
import { DeleteUserDto } from 'src/dto/delete-user.dto';
import { UserInterface } from 'src/interfaces/user.interface';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService
    ) {}

    @Post('register')
    //@UseGuards(JwtAuthGuard)
    async register(@Body() registerDTO: CreateUserDTO) {
      const user = await this.userService.create(registerDTO);
      const payload = { email: user.email };
      const token = await this.authService.signPayload(payload);
      return { user, token };
    }

    @Post('login')
    async login(@Body() loginDTO: LoginUserDto) {
      const user = await this.userService.findByLogin(loginDTO);
      const payload = { email: user.email };
      const token = await this.authService.signPayload(payload);
      return { user, token};
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    async delete(@Body() deleteUserDTO: DeleteUserDto) {
      return await this.userService.deleteByEmail(deleteUserDTO);
    }
}