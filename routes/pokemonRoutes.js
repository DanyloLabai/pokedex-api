import { getAllPokemons, getPokemonById } from '../controllers/pokemonController.js';
import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/pokemons:
 *   get:
 *     summary: Отримати список усіх покемонів
 *     description: Повертає масив усіх покемонів з бази даних.
 *     tags:
 *       - Pokemons
 *     responses:
 *       200:
 *         description: Список покемонів успішно отримано
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "677fcce62d6b558c4d251d64"
 *                   name:
 *                     type: string
 *                     example: "venusaur"
 *                   type:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["grass", "poison"]
 *                   image:
 *                     type: string
 *                     example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-04-16T15:29:42.367Z"
 *                   __v:
 *                     type: integer
 *                     example: 0
 */

router.get('/', getAllPokemons);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   get:
 *     summary: Отримати інформацію про конкретного покемона за ID
 *     tags: [Pokemons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Унікальний ID покемона
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Інформація про покемона успішно отримана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "677fcce62d6b558c4d251d64"
 *                 name:
 *                   type: string
 *                   example: "venusaur"
 *                 type:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["grass", "poison"]
 *                 image:
 *                   type: string
 *                   example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-04-16T15:29:42.367Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       404:
 *         description: Покемона з таким ID не знайдено
 */

router.get('/:id', getPokemonById);

export default router;
