import express from 'express';
const app = express();
import {router} from './routes/authRoutes.js';
import dotenv from 'dotenv'

dotenv.config();
app.use(express.json());
app.use('/api/auth' , router);

export default app;