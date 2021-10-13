// export function geneCMFIds() : string {
//     return "MCF-1";
// }

// import { Injectable } from '@nestjs/common';
// import { CreateUserDTO } from 'src/dto/create-user.dto';
// import { LoginUserDto } from 'src/dto/login-user.dto';
// import { UserInterface } from 'src/interfaces/user.interface';
// // import { CreateUserDto } from 'src/user/model/dto/create-user.dto';
// // import { LoginUserDto } from 'src/user/model/dto/login-user.dto';
// // import { UserI } from 'src/user/model/user.interface';

// @Injectable()
// export class UserHelperService {

//   createUserDtoToEntity(createUserDto: CreateUserDTO): UserInterface {
//     return {
//       firstName: createUserDto.firstName,
//       lastName: createUserDto.lastName,
//       email: createUserDto.email,
//       password: createUserDto.password
//     };
//   }

//   loginUserDtoToEntity(loginUserDto: LoginUserDto): UserInterface {
//     return {
//       email: loginUserDto.email,
//       password: loginUserDto.password
//     };
//   }

// }