import mongoose from "mongoose";

const User = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon' }],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon' }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User' , User);