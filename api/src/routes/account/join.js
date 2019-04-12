import { Account } from '../../models'
import { ERRORS } from '../../globals'

function validator (req, res, next) {
  req.checkBody('username').notEmpty()
  req.checkBody('password').notEmpty()

  if (req.validationErrors()) {
    next(ERRORS.MISSING_PARAM)
  } else {
    next()
  }
}

function route (req, res, next) {
  const { username, password } = req.body

  Account.findOne({ username })
    .then(record => {
      if (record) throw ERRORS.USER_EXISTS

      return Account.create({ username, password })
    })
    .then(user => {
      res.json({
        status: 'success',
        username: user.username
      })
    })
    .catch(err => next(err))
}
export default { validator, route }
