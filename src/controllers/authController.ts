import { Request, Response } from "express";
import * as userService from "../service/userService";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    try {
        const existingUser = await userService.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await userService.createUser(email, password);
        res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (error) {
        res.status(500).json({ message: " error logging in the user" });
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    try {
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        } 
        const payload = { userId: user.id, email: user.email };  
       const token = jwt.sign({ payload}, process.env.JWT_SECRET || "defaultsecret", { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token});
    } catch (error) {
        res.status(500).json({ message: "Error logging in the user" });
    }

}

