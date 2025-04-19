import {getAllPokemons } from '../controllers/pokemonController.js';
import express from 'express';
const router = express.Router();

router.get('/' , getAllPokemons);


export default router;