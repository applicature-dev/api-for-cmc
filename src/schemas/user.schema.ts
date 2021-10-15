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
      required:true,
      match: /^[A-Za-z0-9._%+-]+@zokyolabs.com$/
      
    },

    password:{
      type:String,
      required:true
    },

    role: {
      type: String,
      enum: Role,
      default: Role.USER
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