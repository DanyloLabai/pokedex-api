import express from 'express';
const router = express.Router();
import auth from '../middlewares/authMiddleware.js';
import isAdmin from '../middlewares/isAdmin.js';
import { addPokemon , updatePokemon , deletePokemon  , getAllUsers , getUserByID , deleteUser} from '../controllers/adminController.js';


router.post('/',auth ,isAdmin , addPokemon );
router.put('/:id' ,auth ,isAdmin , updatePokemon);
router.delete('/:id', auth ,isAdmin , deletePokemon);
router.get('/' , auth , isAdmin , getAllUsers);
router.get('/:id' , auth , isAdmin , getUserByID);
router.delete('/:id' , auth , isAdmin , deleteUser);

export default router;