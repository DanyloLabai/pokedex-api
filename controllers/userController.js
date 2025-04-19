import User from "../models/User.js";
import Pokemon from "../models/Pokemons.js";

export const addPokemonToUser = async (req , res) => {
    try{
        const user = await User.findById(res.user.id);
        const pokemon = req.body.pokemonId;

        if(!user){
            return res.status(404).json({message: 'User not found'});
        }

        if(!user.pokemons.includes(pokemon)){
            user.pokemons.push(pokemon);
            await user.save();
        }

        res.status(200).json({message: 'Pokemon added to your list.'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

export const addPokemonToUserFavorite = async (req , res) => {
    try{
        const user = await User.findById(res.user.id);
        const pokemon = req.body.pokemonId;

        if(!user){
            return res.status(404).json({message: 'User not found'});
        }

        if(!user.pokemons.includes(pokemon)){
           return res.status(400).json({message: 'Pokemon is not in your pokemon list'})
        }

        if(!user.favorites.includes(pokemon)){
            user.favorites.push(pokemon);
            await user.save();
        }

        res.status(200).json({message: 'Pokemon added to your favorites list.'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}