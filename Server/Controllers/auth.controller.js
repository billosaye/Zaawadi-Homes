import User from "../Models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';


//signup
export const signUp = async (req, res, next) => { 
    try {
        const { username, email, password } = req.body; // Destructure the request body

        // Validate input
        if (!username || !email || !password) {
            return next(createError(400, "All fields are required"));
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return next(createError(400, "Invalid email format"));
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email }); // Find user by email
        if (existingUser) {
            return next(createError(400, "Email is already in use"));
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

//handles user sign-up by validating input, checking email format, and ensuring the email is not already in use. 
// It hashes the password, creates a new user, saves it to the database, and responds with a success message while excluding the password. 
// Errors are passed to middleware for handling.



//SignIn
export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return next(createError(400, "Email and password are required"));
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(createError(401, "Invalid credentials"));
        }

        // Compare password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return next(createError(401, "Invalid credentials"));
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
// handles user sign-in by validating input, checking credentials, and generating a JWT token for authenticated users. 
// The token is stored in an HTTP-only cookie, and the response excludes the password for security. 
// Errors are handled via middleware.





//Google
export const google = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email }); // Find user by email
  
      if (user) { // If user exists
        const token = jwt.sign({ // Create token
          id: user._id
        }, process.env.JWT_SECRET);
        const { password, ...others } = user._doc;   
        res.cookie('access_token', token, {
          httpOnly: true
        }).status(200).json({
          message: "Signin successful",
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
          }
        });
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(generatedPassword, 10);
        const newUser = new User({
          username:
            req.body.name.split(" ").join("").toLowerCase() +
            Math.random().toString(36).slice(-4),
          email: req.body.email,
          password: hashedPassword,
          avatar: req.body.photo,
        });
        
        await newUser.save();
        
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const { password, ...others } = newUser._doc;
        
        res.cookie('access_token', token, {
          httpOnly: true
        }).status(200).json({
          message: "Signin successful",
          user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            avatar: newUser.avatar
          }
        });
      }
    } catch (error) {
        next(error);
    }
  };

  // manages Google sign-in by checking if a user exists in the database. 
  // If the user is found, a JWT token is generated, stored in an HTTP-only cookie, and returned along with the user's details (excluding the password). 
  //If the user does not exist, a new account is created with a randomly generated password (hashed using bcrypt), a unique username, and the provided email and avatar. 
  // The new user is then saved in the database, issued a JWT token, and logged in. 