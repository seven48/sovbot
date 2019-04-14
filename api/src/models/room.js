import crypto from 'crypto'

import moment from 'moment'
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  chatId: {
    type: Number,
    required: true
  },
  link: {
    type: String,
    unique: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    require: true
  }
})

schema.pre('save', function (next) {
  const firstPart = crypto.createHash('md5')
    .update(`${moment().unix()}${Math.random()}`)
    .digest('hex')
  const secondPart = crypto.createHash('md5')
    .update(`${this.chatId}`)
    .digest('hex')

  this.link = `${firstPart}_${secondPart}`

  next()
})

const model = mongoose.model('Room', schema)

export default model
