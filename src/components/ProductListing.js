import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

function ProductListing() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => setProducts(res.data));
    }, [])
    return (
        <div style={{ marginTop: "80px" }}>

            <Container sx={{ py: 10 }} maxWidth="lg">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={3}>
                            <Card sx={{ maxWidth: 345, height: "350px", overflow: "scroll", justifyContent: "space-between", flexDirection: "column", position: "relative" }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={product.image}
                                    title={product.title}
                                />
                                <CardContent>
                                    <Typography paragraph component="div">
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
                                <CardActions sx={{ position: "absolute", bottom: "0", marginBottom: "3px" }}>
                                    <Button size="small" variant='outlined' color='success'>Add to Cart</Button>
                                    <Button size="small" color='info' onClick={() => { navigate(`/product/${product.id}`) }} >View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default ProductListing