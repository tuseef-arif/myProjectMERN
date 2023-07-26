const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv/config');
const app = express();
const port = 3000; // Change the port number as per your preference

app.use(express.json());
const userRoutes = require('./routes/user')
app.use('/api/', userRoutes);

const authRoutes = require('./routes/auth')
app.use('/api/', authRoutes); 

// Connect to MongoDB
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Your other middleware and routes can be added here
// ...

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
