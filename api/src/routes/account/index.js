import { Router } from 'express'

import authRoute from './auth'
import joinRoute from './join'

const router = Router()

router.post('/auth', authRoute.validate, authRoute.route)
router.post('/join', joinRoute.validator, authRoute.route)

export default router
