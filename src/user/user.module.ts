import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [],
  exports: [UserService],

})
export class UserModule {}

// import { Module } from '@nestjs/common';
// import { UserSchema } from 'src/schemas/user.schema';
// import { UserService } from './user.service';
// import { MongooseModule } from "@nestjs/mongoose";
// import { UserController } from './user.controller';
// import { AuthService } from 'src/auth/auth.service';
// import { AuthModule } from 'src/auth/auth.module';
// import { JwtService } from '@nestjs/jwt';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: 'User', schema : UserSchema }]),
//     AuthModule
//   ],
//   exports: [
//     UserService,
//   ],
//   providers: [AuthService, UserService],
//   controllers: [UserController]
// })
// export class UserModule {}
