function required (parameter) {
  if (process.env[parameter]) {
    return process.env[parameter]
  } else {
    console.error(`${parameter} is required parameter.`)
    process.exit(1)
  }
}

// Required
export const MONGODB_HOST = required('MONGODB_HOST')
export const JWT_SECRET = required('JWT_SECRET')

/** Error types */
export const ERRORS = {
  /** Wrong token */
  TOKEN_AUTH_FAILED: 'TOKEN_AUTH_FAILED',
  /** Acess token is missing */
  TOKEN_MISSING: 'TOKEN_MISSING',
  /** Access token is expired */
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  /** One or more parameters are missing */
  MISSING_PARAM: 'MISSING_PARAM',
  /** User is already exists */
  USER_EXISTS: 'USER_EXISTS',
  /** User is not found */
  USER_IS_NOT_FOUND: 'USER_IS_NOT_FOUND'
}
