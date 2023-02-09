import { Grid, Link, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductListing from './ProductListing'


function Home() {
    const [categories, setCategories] = useState();
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then(res => { console.log(res.data); setCategories(res.data) })
    }, [])
    return (
        <Container sx={{ marginTop: "80px", }}>
            <div className="home__topCategories">
                <Typography variant='h3'>Shop By Categories</Typography>
                <Container sx={{ py: 10 }} maxWidth="lg">
                    <Grid container >
                        {
                            categories && categories.map(category => (
                                <Grid md={3} sx={{ textTransform: "capitalize",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between", height:"16rem" }} item>
                                    <img src="https://global-uploads.webflow.com/5f68a65d0932e3546d41cc61/5f9bfbf985f72747e74a46b5_1604058101946-ada-iq%253A-image-slider-gallery-best-shopify-apps.png" alt="img" />
                                    <Typography variant='h5'><Link href={`/category/${category}`}>{category}</Link></Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </div>
            <ProductListing />
        </Container>
    )
}

export default Home