import jwt from 'jsonwebtoken';

export default function(req , res , next ){
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({message: 'No token provide'});

    const token = authHeader.split(' ')[1];
    try{
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        res.user = decode;
        next();
    }catch(error){
        return res.status(401).json({message: 'Invalid token'});
    }
}