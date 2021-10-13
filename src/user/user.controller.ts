import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from '../dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        
      ) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDTO) {
      const user = await this.userService.create(createUserDto);
      const payload = {
      
        email: user.email,
      };
  
      const token = await this.authService.signPayload(payload);
      return { user, token };
    }
    
    @Post('login')
    async login(@Body() UserDTO: LoginUserDto) {
      const user = await this.userService.findByLogin(UserDTO);
      const payload = {
        email: user.email,
      };
      const token = await this.authService.signPayload(payload);
      return { user, token};
    }

}

// import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
// import { CreateUserDTO } from 'src/dto/create-user.dto';
// import { LoginUserDto } from 'src/dto/login-user.dto';
// import { LoginResponseInterface } from 'src/interfaces/login-response.interface';
// import { UserInterface } from 'src/interfaces/user.interface';
// import { UserHelperService } from 'src/utils/helpers';
// import { UserService } from './user.service';

// @Controller('users')
// export class UserController {

//   constructor(
//     private userService: UserService,
//     private userHelperService: UserHelperService
//   ) { }

//   @Post()
//   async create(@Body() createUserDto: CreateUserDTO): Promise<UserInterface> {
//     const userEntity: UserInterface = this.userHelperService.createUserDtoToEntity(createUserDto);
//     return this.userService.create(userEntity);
//   }

//   @Get()
//   async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<Pagination<UserI>> {
//     limit = limit > 100 ? 100 : limit;
//     return this.userService.findAll({ page, limit, route: 'http://localhost:3000/api/users' });
//   }

//   @Get('/find-by-username')
//   async findAllByUsername(@Query('username') username: string) {
//     //return this.userService.findBy(username);
//     this.userService.
//   }



//   @Post('login')
//   async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponseInterface> {
//     const userEntity: UserInterface = this.userHelperService.loginUserDtoToEntity(loginUserDto);
//     const jwt: string = await this.userService.login(userEntity);
//     return {
//       access_token: jwt,
//       token_type: 'JWT',
//       expires_in: 10000
//     };
//   }

// }