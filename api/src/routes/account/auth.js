import jwt from 'jsonwebtoken'

import { ERRORS, JWT_SECRET } from '../../globals'
import { Account } from '../../models'

function validate (req, res, next) {
  req.checkBody('username').notEmpty()
  req.checkBody('password').notEmpty()

  if (req.validationErrors()) {
    next(ERRORS.MISSING_PARAM)
  } else {
    next()
  }
}

async function route (req, res, next) {
  const { username, password } = req.body

  Account.findOne({ username })
    .then(user => {
      if (!user || !user.isPasswordValid(password)) throw ERRORS.USER_IS_NOT_FOUND

      return jwt.sign(
        { username, password },
        JWT_SECRET,
        { expiresIn: '2 days' }
      )
    })
    .then(token => {
      res.json({
        status: 'success',
        username,
        token
      })
    })
    .catch(err => next(err))
}

export default { validate, route }
