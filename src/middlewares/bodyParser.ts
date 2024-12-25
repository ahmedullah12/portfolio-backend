import { catchAsync } from "../utils/catchAsync";


export const parseBody = catchAsync(async (req, res, next) => {
  if (req.body.data) {
    req.body = JSON.parse(req.body.data);
  }

  next();
});
