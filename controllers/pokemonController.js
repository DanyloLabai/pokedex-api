import Pokemon from "../models/Pokemons.js";


export const getAllPokemons = async (req , res ) => {
    try{
        const pokemon = await Pokemon.find();
        res.json(pokemon);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}


export const getPokemonById = async (req ,res) => {
    try{
        const pokemon = await Pokemon.findById(req.params.id);
        if(!pokemon){
            return res.status(404).json({message: 'Pokemon not found'});
        }
        res.json(pokemon);
    }catch(error){
        res.status(500).json({message: 'Error' , error});
    }
}





