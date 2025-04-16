import mongoose from "mongoose";

const Pokemon = new mongoose.Schema({
    name: {type: String, required: true},
    type: [String],
    image: String,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Pokemon' , Pokemon)