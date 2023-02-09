import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import axios from 'axios';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function CartProduct({ productId, qty }) {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => setProduct(res.data))
    }, [productId])
    return (
        <Box p={3} mt={2} display="flex" alignItems="center" flexDirection="row">
            <Box m={2} sx={{
                height: "100px",
                width: "100px",
                backgroundSize: "contain",
                backgroundImage: `url("${product.image}")`,
                backgroundRepeat: "no-repeat",
                padding: "10px",
                backgroundPosition: "center"
            }}></Box>
            <Box m={2} >
                <Typography onClick={() => navigate(`/product/${product.id}`)} component="h2" variant="h5">
                    {product.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Quantity: {qty}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                    Price: ${product.price}
                </Typography>
            </Box>
        </Box>
    )
}

export default CartProduct