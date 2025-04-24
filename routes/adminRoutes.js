import express from 'express';
const router = express.Router();
import auth from '../middlewares/authMiddleware.js';
import isAdmin from '../middlewares/isAdmin.js';
import { addPokemon , updatePokemon , deletePokemon } from '../controllers/adminController.js';

router.post('/',auth ,isAdmin , addPokemon );
router.put('/:id' ,auth ,isAdmin , updatePokemon);
router.delete('/:id', auth ,isAdmin , deletePokemon);

export default router;