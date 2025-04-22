import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            throw new Error("Unauthorized");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.payload;

        next();
    } catch (error) {
        res.status(401).json({ err: error.message });
    }
};

export default verifyToken;
