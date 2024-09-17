import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import the item routes
import itemRoutes from './routes/itemRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection String (Using provided credentials and database)
const url = `mongodb+srv://ukasha:ukasha@cluster0.hh95ib5.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB Atlas
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Use routes
app.use('/api/items', itemRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
