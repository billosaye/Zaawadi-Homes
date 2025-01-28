import User from "../Models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


//signup
export const signUp = async (req, res, next) => { 
    try {
        const { username, email, password } = req.body; // Destructure the request body

        // Validate input
        if (!username || !email || !password) {
            const error = new Error("All fields are required");
            error.statusCode = 400;
            return next(error);
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const error = new Error("Invalid email format");
            error.statusCode = 400;
            return next(error);
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email }); // Find user by email
        if (existingUser) {
            const error = new Error("Email is already in use");
            error.statusCode = 400;
            return next(error);
        }

        // Hash password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save user to the database
        await newUser.save();

        // Respond with success
        res.status(201).json({ 
            message: "User registered successfully",
            user: { username: newUser.username, email: newUser.email } 
        });
    } catch (error) {
        next(error);
    }
};


export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            const error = new Error("Email and password are required");
            error.statusCode = 400;
            return next(error);
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            return next(error);
        }

        // Compare password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            return next(error);
        }

        // Create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        const {password: _, ...userWithoutPassword} = user.toObject();

        // Set cookie and respond
        res.cookie('accesstoken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000, // 1 hour
        }).status(200).json(userWithoutPassword); 

    } catch (error) {
        next(error);
    }
};
