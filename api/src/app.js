import express from 'express'
import validator from 'express-validator'

import routes from './routes'
import errHandler from './middlewares/error'

const app = express()

// POST data parser
app.use(express.json())

app.use(validator())

app.use('/', routes)
app.use(errHandler)

export default app
