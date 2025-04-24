import express from 'express';
import User from '../models/User.js';
import Pokemon from '../models/Pokemons.js';

export const  addPokemon = async (req ,res) => {
    try{
    const newPokemon = await Pokemon.create(req.body);
    res.status(201).json({newPokemon});
    }catch(error){
        res.status(500).json({message: 'Error creating pokemon' , error});
    }
};

export const  updatePokemon = async (req ,res ) => {
    try{
        const update = Pokemon.findById(req.paramas.id , req.body, {
            new: true,
    });
    if(!update){
        return res.status(404).json({message: 'Pokemon not found'});
    }
    res.json(update);
    }catch(error){
        res.status(500).json({message: 'Error update pokemon', error});
    }
};

export const deletePokemon = async (req ,res) => {
   try{
    const deleted = await Pokemon.findById(req.paramas.id);
    if(!deleted){
        return res.status(404).json({message: 'Pokemon not found'});
    }
    res.json({message:'Pokemon deleted'});
    }catch(error){
        res.status(500).json({message: 'Error deleting pokemon' , error});
    }
};

