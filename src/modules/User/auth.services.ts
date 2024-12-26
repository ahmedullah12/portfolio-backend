import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from './auth.model';
import { ILoginUser } from './auth.interface';
import { createToken } from '../../utils/jwtHelpers';
import config from '../../config';

const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (!user.password) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (user.password !== payload.password) {
    throw new AppError(httpStatus.BAD_REQUEST, "Password doesn't match");
  }

  const jwtPayload = {
    email: user.email,
    name: user.name,
  };

  const accessToken = createToken(
    jwtPayload,
    config.access_token_secret as string,
    '1d',
  );
  const refreshToken = createToken(
    jwtPayload,
    config.refresh_token_secret as string,
    '30d',
  );

  return {
    refreshToken,
    accessToken,
    user,
  };
};

export const AuthServices = {
  login,
};
