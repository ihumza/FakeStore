import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CartProduct from './CartProduct';

function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/2')
            .then(res => { console.log(res.data); setCart(res.data) })
    }, [])
    return (
        <Container sx={{ marginTop: "80px" }}>
            <Typography variant='h3' gutterBottom>Your Cart</Typography>
            <Grid container spacing={10} rowSpacing={5}>
                <Grid item xs={12} md={9} >
                    <Paper elevation={5}>
                        {
                            cart.length ?? cart.products.map((product) => (
                                <CartProduct productId={product.productId} qty={product.quantity} />
                            ))
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    Details
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart