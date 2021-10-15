import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { LoginUserDto } from 'src/dto/login-user.dto';
import { Payload } from 'src/interfaces/payload';
import { UserInterface } from 'src/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { DeleteUserDto } from 'src/dto/delete-user.dto';

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
        const createdUser = new this.userModel(createUserDTO);
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

    async deleteByEmail(deleteUserDTO: DeleteUserDto) {
      const user = this.userModel.findOne({email: deleteUserDTO.email}).exec();
      if (!user) {
        throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
      }else {
        return await this.userModel.deleteOne({email: deleteUserDTO.email}).exec();
      }
    }

    sanitizeUser(user: UserInterface) {
      const sanitized = user.toObject();
      delete sanitized['password'];
      return sanitized;
  }
}
