import express from 'express';
const app = express();
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv'
import PokemonRouter from './routes/pokemonRoutes.js'
import UserRouter from './routes/userRoutes.js';

dotenv.config();
app.use(express.json());
app.use('/api/auth' , authRoutes);
app.use('/api/pokemons',PokemonRouter);
app.use('/api' , UserRouter);

export default app;