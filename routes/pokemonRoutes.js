import {
  getAllPokemons,
  getPokemonById,
} from "../controllers/pokemonController.js";
import express from "express";
const router = express.Router();


router.get("/", getAllPokemons);
router.get("/:id", getPokemonById);

export default router;
