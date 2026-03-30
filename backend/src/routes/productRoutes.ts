import { Router } from 'express';
import { getProductByBarcode, getProductById, getPopularProducts } from '../controllers/productController';

const router = Router();

router.get('/barcode/:barcode', getProductByBarcode);
router.get('/popular', getPopularProducts);
router.get('/:id', getProductById);

export default router;