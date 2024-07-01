import { Router } from 'express';
import { authPrivate } from '../middlewares/Auth.js';
import { pegarProdutos } from '../controllers/VendasController.js';

const router = Router();

// router.post('/ads/add', authPrivate, create);
// router.get('/ads/list', getList);
// router.get('/ad/:id', getItem);
// Enviando imagens, será POST
// router.post('/ad/:id', authPrivate, update);

// Categories
router.get('/produtos', pegarProdutos);

export default router;