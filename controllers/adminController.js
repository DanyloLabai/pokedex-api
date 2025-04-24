
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

export const getAllUsers = async (req ,res) => {
    try{
        const users = await User.find().select('-password');
        res.json(users);
    }catch(error){
        res.status(500).json({message: 'Error', error});
    }
};

export const getUserByID = async (req ,res ) => {
    try{
        const user = await User.findById(req.paramas.id);
        if(!user){
            return res.status(404).json({message : 'User not found'});
        }
        res.json(user);
    }catch(error){
        res.status(500).json({message: "Error" , error});
    }
};

export const deleteUser = async (req ,res) => {
    try{
        const deleted = await User.findByIdAndDelete(req.paramas.id);
        if(!deleted){
            return res.status(404).json({message: 'User not found'});
        }
        res.json({message: 'User deleted'});
    }catch(error){
        res.status(500).json({message:'Error',error});
    }
}

