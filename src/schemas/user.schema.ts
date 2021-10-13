// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import * as mongoose from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Role } from 'src/utils/enums';

import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema= new mongoose.Schema({
    firstName: {
      type: String
    },

    lastName: {
      type: String
    },

    email:{
      type:String,
      unique:true,
      required:true
    },

    password:{
      type:String,
      required:true
    },

    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    }
})

UserSchema.pre('save', async function(next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      const hashed = await bcrypt.hash(this['password'], 10);
      this['password'] = hashed;
      return next();
    } catch (err) {
      return next(err);
    }
  });

// export type UserDocument = User & Document;

// @Schema()
// export class User {
//   @Prop({ required: true })
//   firstName: string;

//   @Prop({ required: true })
//   lastName: string;

//   @Prop({ required: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ enum: Role })
//   role: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);