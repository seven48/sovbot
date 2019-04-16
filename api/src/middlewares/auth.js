import jwt from 'jsonwebtoken'
import moment from 'moment'

import { ERRORS, JWT_SECRET } from '../globals'
import { Account } from '../models'

export default function (req, res, next) {
  const { authorization } = req.headers

  if (!authorization) return next(ERRORS.TOKEN_MISSING)

  const auth = jwt.decode(authorization, JWT_SECRET)

  if (!auth) return next(ERRORS.TOKEN_AUTH_FAILED)

  if (auth.exp && moment().unix() > auth.exp) return next(ERRORS.TOKEN_EXPIRED)

  Account.findOne({ username: auth.username })
    .then(user => {
      if (!user) throw ERRORS.TOKEN_AUTH_FAILED

      req.authorization = user

      next()
    })
    .catch(err => next(err))
}
