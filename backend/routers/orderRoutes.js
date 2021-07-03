import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controllers/orderConroller.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)

export default router
