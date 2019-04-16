import { Router } from 'express'

import authMiddleware from '../../middlewares/auth'
import existsRoute from './exists'
import insertRoute from './insert'

const router = Router()

router.get('/exists', authMiddleware, existsRoute)

router.post('/insert', authMiddleware, insertRoute)

export default router
