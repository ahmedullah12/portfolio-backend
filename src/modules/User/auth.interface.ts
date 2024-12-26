/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';


export interface IUser {
  name: string;
  email: string;
  password: string;
};

export interface ILoginUser {
  email: string;
  password: string;
}
