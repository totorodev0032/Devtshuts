const express = require('express');
const dotenv = require('dotenv');
const app = express();
const colors = require('colors');
const connectDB  = require('./config/db');

dotenv.config()

connectDB();

const products = require('./data/products');

app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/products', (req,res)=> {
    res.json(products);
})

app.get('/api/products/:id', (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.send(product);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {console.log(`server running in ${process.env.NODE_ENV} at port ${PORT}`)})