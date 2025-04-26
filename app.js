import express from 'express';
const app = express();
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv'
import PokemonRouter from './routes/pokemonRoutes.js'
import UserRouter from './routes/userRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import { SwaggerUI , swaggerSpec } from './utils/swagger.js';
import swaggerJSDoc from 'swagger-jsdoc';

dotenv.config();

app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));

app.use(express.json());
app.use('/api/auth' , authRoutes);
app.use('/api/pokemons',PokemonRouter);
app.use('/api' , UserRouter);
app.use('/api/admin/pokemons', adminRouter);
app.use('/api/admin/users', adminRouter);

export default app;