import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.services';
import { catchAsync } from '../../utils/catchAsync';

const login = catchAsync(async (req, res) => {
  const result = await AuthServices.login(req.body);
  const { accessToken, refreshToken, user } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Logged In Successfully!!',
    data: {
      accessToken,
      email: user?.email,
    },
  });
});

export const AuthController = {
  login
};
