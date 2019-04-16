import redis from  '../broker'
import app from '../app'
import { mongoose } from '../models'
import { MONGODB_HOST } from './../globals'

const mongooseConfig = {
  useNewUrlParser: true,
  useCreateIndex: true
}
mongoose.connect(MONGODB_HOST, mongooseConfig)

redis.connect()

app.listen(
  5000
)
