import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register  = async (req , res) => {
    try{
        const {username, email, password } = req.body;

        const existing = await User.findOne({email});
        if(existing) {
            return res.status(400).json({message: 'User alreadt exist'});

        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashPassword
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({token, message: 'Registretain succes'});

    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Registration failed'});

    }
};

export const login = async(req , res) => {
    try{
        const {email , password } = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: 'Invalid email or password'});
        }
       
    } catch(error){
        console.log(error);
        res.status(500).json({message: 'Login failed'});
    }
}