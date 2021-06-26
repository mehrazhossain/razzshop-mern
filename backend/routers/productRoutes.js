import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/').get(getProductById)

export default router
