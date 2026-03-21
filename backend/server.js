require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const contactRoutes = require('./routes/contact');
const resumeRoutes = require('./routes/resume');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);

// Base API Route
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running properly! 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
