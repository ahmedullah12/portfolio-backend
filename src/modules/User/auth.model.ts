import { Schema, model } from 'mongoose';
import { IUser } from './auth.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.set('toJSON', {
  //not sending the password field
  transform: (doc, { password, ...rest }, option) => rest,
});

export const User = model<IUser>('User', userSchema);
