import { Router } from 'express';
import { getTimeController } from '../controllers/map.controller';

const router = Router();
router.get('/time', getTimeController);

export default router;