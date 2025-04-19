import Pokemon from "../models/Pokemons.js";


export const getAllPokemons = async (req , res ) => {
    try{
        const pokemon = await Pokemon.find();
        res.json(pokemon);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

// доптсати видалення , доавання , та зміну після додання ролей




