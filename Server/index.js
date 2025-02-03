import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './Routes/auth.route.js'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

app.use(express.json()) // Add this line to parse JSON request bodies
app.use('/server/auth', authRouter) // All requests to /server/auth will be handled by the auth router

// Regular routes and middleware
app.use('/server/auth', authRouter)

// Add a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the API'); // You can customize this message
});

// Error handling middleware must be the last middleware
app.use((err, req, res, next) => { 
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        message,       
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
})




