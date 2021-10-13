import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { LoginUserDto } from 'src/dto/login-user.dto';
import { Payload } from 'src/interfaces/payload';
import { UserInterface } from 'src/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
// import { User } from 'src/types/user';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<UserInterface>,
      ) {}

    async create(createUserDTO: CreateUserDTO) {
        const { email } = createUserDTO;
        const user = await this.userModel.findOne({ email });
        if (user) {
          throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }
        const createdUser = new this.userModel(CreateUserDTO);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }

    async findByPayload(payload: Payload) {
      const { email } = payload;
      return await this.userModel.findOne({ email });
    }
    
    async findByLogin(UserDTO: LoginUserDto) {
      const { email, password } = UserDTO;
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
      }
      if (await bcrypt.compare(password, user.password)) {
        return this.sanitizeUser(user)
      } else {
        throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
      }
    }

    sanitizeUser(user: UserInterface) {
      const sanitized = user.toObject();
      delete sanitized['password'];
      return sanitized;
  }
}

// import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User } from 'src/schemas/user.schema';
// // import { AuthService } from "../auth/auth.service";
// import { UserInterface } from "../interfaces/user.interface";

// @Injectable()
// export class UserService {

//   constructor(
//     @InjectModel(User.name) private readonly userModel : Model<User>,
//     private authService: AuthService
//   ) { }

//   async create(newUser: UserInterface): Promise<User> {
//     try {
//       const exists: boolean = await this.mailExists(newUser.email);
//       if (!exists) {
//         const passwordHash: string = await this.hashPassword(newUser.password);
//         newUser.password = passwordHash;
//         const user = await this.userModel.create(newUser);
//         return this.findOne(user.email);
//       } else {
//         throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
//       }
//     } catch {
//       throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
//     }
//   }

//   async login(user: UserInterface): Promise<string> {
//     try {
//       const foundUser: User = await this.findByEmail(user.email.toLowerCase());
//       if (foundUser) {
//         const matches: boolean = await this.validatePassword(user.password, foundUser.password);
//         if (matches) {
//           const payload: User = await this.findOne(foundUser.email);
//           return this.authService.generateJwt(payload);
//         } else {
//           throw new HttpException('Login was not successfull, wrong credentials', HttpStatus.UNAUTHORIZED);
//         }
//       } else {
//         throw new HttpException('Login was not successfull, wrong credentials', HttpStatus.UNAUTHORIZED);
//       }
//     } catch {
//       throw new HttpException('User not found', HttpStatus.NOT_FOUND);
//     }
//   }

// //   async findAll(options: IPaginationOptions): Promise<Pagination<UserI>> {
// //     return paginate<UserEntity>(this.userRepository, options);
// //   }

// //   async findAllByEmail(username: string): Promise<UserInterface[]> {
// //     return this.userModel.find({
// //       where: {
// //         username: Like(`%${username.toLowerCase()}%`)
// //       }
// //     })
// //   }

//   // also returns the password
//   private async findByEmail(email: string): Promise<User> {
//     return this.userModel.findOne({ email }, { select: [ 'email', 'password'] }).exec();
//   }

//   private async hashPassword(password: string): Promise<string> {
//     return this.authService.hashPassword(password);
//   }

//   private async validatePassword(password: string, storedPasswordHash: string): Promise<any> {
//     return this.authService.comparePasswords(password, storedPasswordHash);
//   }

//   private async findOne(email: string): Promise<User> {
//     return this.userModel.findOne({ email: email }).exec();
//   }

//   public getOne(email: string): Promise<User> {
//     return this.userModel.findOne({ email: email}).exec();
//   }

//   private async mailExists(email: string): Promise<boolean> {
//     const user = await this.userModel.findOne({ email: email }).exec();
//     if (user) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// }
