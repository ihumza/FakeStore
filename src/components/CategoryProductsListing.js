import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

function CategoryProductsListing() {
    const [products, setProducts] = useState();
    const { category } = useParams();
    console.log(products)
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then(res => setProducts(res.data));
    }, [])
    return (
        <Container sx={{ marginTop: "80px" }}>
            <Typography sx={{ textTransform: "capitalize" }} variant='h3' gutterBottom>{category}</Typography>
            <Grid container spacing={4}>
                {products && products.map(product => (
                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 345, height: "350px", overflow: "scroll", justifyContent: "space-between", flexDirection: "column", position: "relative" }}>
                            <CardMedia
                                sx={{ height: "200px", objectFit: "contain" }}
                                image={product.image}
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    {product.title.length > 40 ?
                                        product.title.substring(0, 40 - 3) + "..." :
                                        product.title}
                                </Typography>
                                <div className="rating__Container" style={{ position: "absolute", bottom: "0", marginBottom: "50px" }}>
                                    <StarRatings
                                        starSpacing="1px"
                                        starDimension="15px"
                                        rating={product.rating.rate}
                                        starRatedColor="#F1C40E"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default CategoryProductsListing