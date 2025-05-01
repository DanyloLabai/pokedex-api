import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;  
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
