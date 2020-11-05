const express = require('express');
const dotenv = require('dotenv');
const app = express();
const colors = require('colors');
const connectDB  = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config()

connectDB();



app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {console.log(`server running in ${process.env.NODE_ENV} at port ${PORT}`)})