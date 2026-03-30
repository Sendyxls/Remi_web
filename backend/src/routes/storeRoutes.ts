import { Router } from 'express';
import { getNearbyStores } from '../controllers/storeController';

const router = Router();

router.get('/nearby', getNearbyStores);

export default router;