import { Router } from 'express';
const router = Router();


export default router;

import { findAll, findByUser } from '../controllers/post.controller';

router.get('/list', findAll);
router.get('/list-by-user/:user_id', findByUser);