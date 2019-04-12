import crypto from 'crypto'

import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    validate: /^([a-zA-Z0-9]+)$/
  },
  password: {
    type: String,
    required: true
  }
})

schema.pre('save', function (next) {
  this.password = crypto.createHash('md5')
    .update(this.password)
    .digest('hex')

  next()
})

schema.methods.isPasswordValid = function (password) {
  const passwordHash = crypto.createHash('md5')
    .update(password)
    .digest('hex')

  return this.password === passwordHash
}

const model = mongoose.model('Account', schema)

export default model
