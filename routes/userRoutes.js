import { addPokemonToUser , addPokemonToUserFavorite} from '../controllers/userController.js';
import authen from '../middlewares/authMiddleware.js';
import express from 'express';
const router = express.Router();

router.post('/user/:userId/pokemons' ,authen , addPokemonToUser );
router.post('/user/:userId/favorites', authen , addPokemonToUserFavorite);

export default router;