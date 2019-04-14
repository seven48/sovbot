import { Room } from '../../models'
import { ERRORS } from '../../globals'

export default function (req, res, next) {
  const { chatId } = req.query
  const account = req.authorization

  if (!chatId) return next(ERRORS.MISSING_PARAM)

  Room.findOne({ chatId, account })
    .then(record => {
      res.json({
        status: 'success',
        exists: !!record
      })
    })
}
