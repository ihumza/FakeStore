import { ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    console.log(user)
    return (
        <AppBar position="fixed" >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" onClick={() => navigate('/')}>
                    Fake Store
                </Typography>
                <div className="rightNavigationIcons" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "10rem" }}>
                    <Button color="inherit" variant='outlined' onClick={() => navigate('/login')}>Login</Button>
                    <ShoppingCartOutlined onClick={() => navigate('/checkout/cart')} />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header