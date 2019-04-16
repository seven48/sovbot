import { Room } from '../../models'
import { ERRORS } from '../../globals'

export default function (req, res, next) {
  const { chatId } = req.body
  const account = req.authorization

  if (!chatId) return next(ERRORS.MISSING_PARAM)

  Room.findOne({ chatId, account })
    .then(record => {
      if (record) throw ERRORS.ALREADY_EXISTS

      return Room.create({ chatId, account })
    })
    .then(record => {
      res.json({
        status: 'success',
        chatId,
        link: record.link
      })
    })
    .catch(err => next(err))
}
