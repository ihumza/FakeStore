import { Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings';

function Product() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [rating, setRating] = useState(0);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => { setProduct(res.data); setRating(res.data.rating.rate) })
    }, [params.id])
    return (
        <div style={{ marginTop: "120px" }}>
            <Container>

                <Grid container spacing={4}>
                    <Grid style={{
                        backgroundImage: `url(${product.image})`,
                        height: '40vh',
                        marginTop: 20,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} item md={4}>
                    </Grid>
                    <Grid item md={8} >
                        <Typography gutterBottom variant='h3'>{product.title}</Typography>
                        <Typography gutterBottom variant='h4'>${product.price}</Typography>
                        <Typography gutterBottom variant='h5'>{product.category}</Typography>
                        <StarRatings
                            rating={rating}
                            starDimension="30"
                            starSpacing='3px'
                            starRatedColor='#F1C40E'
                        />
                        <Typography gutterBottom paragraph>{product.description}</Typography>

                        <TextField sx={{ width: '100px', textAlign: 'center' }} value={1} type='number' variant='standard' />
                        <br />
                        <br />
                        <br />
                        <Button color='warning' disableRipple variant='contained'>Add to Cart</Button>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default Product