import { ERRORS } from '../globals'

export default function (err, req, res, next) {
  let statusCode = 400
  let errMessage = 'Unknown error'

  switch (err) {
    case ERRORS.MISSING_PARAM:
      errMessage = 'One or more parameters are missing'
      break
    case ERRORS.USER_EXISTS:
      errMessage = 'Username is already exists'
      break
    case ERRORS.USER_IS_NOT_FOUND:
      errMessage = 'Wrong username or password'
      break
  }

  res.status(statusCode).json({
    status: 'error',
    message: errMessage,
    code: err
  })
}
