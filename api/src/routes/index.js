import { Router } from 'express'

import accountRouter from './account'
import roomRouter from './room'

const router = Router()

router.use('/account', accountRouter)
router.use('/room', roomRouter)

export default router
