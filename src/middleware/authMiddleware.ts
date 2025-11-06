import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "../service/userService";
import { User } from "../types/user.types";

interface JWTpayload{
    userId: number;
    email: string;
}

export const protect = async (req: any, res: Response, next: NextFunction) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            console.log(req.headers);
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET ||
                "defaultsecret") as { payload: JWTpayload };

            // const user: User | null = await findUserByEmail(decoded.payload.email);
            // req.user = user || undefined;

            // if(!req.user){
            //     return res.status(401).json({ message: "Not authorized, user not found" });
            // }
            return next();
        } catch (error) {
            
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
    }
    else {
        return  res.status(401).json({ message: "Not authorized, no token" });
    }
    return res.status(401).json({ message: "Not authorized" });
};