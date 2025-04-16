// scripts/fetchPokemons.js
import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";
import Pokemon from "../models/Pokemons.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function fetchAndSavePokemons() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(" Connected to MongoDB");

    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemons = res.data.results;

    for (const poke of pokemons) {
      const details = await axios.get(poke.url);

      const pokemonData = {
        name: details.data.name,
        type: details.data.types.map(t => t.type.name),
        image: details.data.sprites.front_default,
      };

      await Pokemon.create(pokemonData);
      console.log(` Saved: ${pokemonData.name}`);
    }

    console.log(" All pokemons imported!");
    process.exit();
  } catch (err) {
    console.error(" Error:", err.message);
    process.exit(1);
  }
}

fetchAndSavePokemons();
