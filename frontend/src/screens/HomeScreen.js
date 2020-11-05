import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Product } from '../components/Product';
// import products from '../products';
import axios from 'axios';

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');

            setProducts(data);
        }


        fetchProducts();
    }, [])
    return (
        <>
            <h2 style = {{marginTop:'10px', marginBottom:'10px'}}>Dev T-Shirt</h2>
            <Row>
                {products.map((product) => 
                    <Col key = {product._id} sm = {12} md = {6} lg = {4} xl = {3} >
                        <Product product = {product}/>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default HomeScreen
