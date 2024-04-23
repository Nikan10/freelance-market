import React from 'react'

import { AppBar, CssBaseline, IconButton, Toolbar, Typography, Button, InputBase, Badge } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{marginTop: "4rem", boxShadow: "none", backgroundColor: '#d3d3d3', color: '#424242', marginBottom: 0}}>
        <Toolbar>
            <Typography variant='body1'>
                &copy; {new Date().getFullYear()} Maher.com All rights reserved.
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Footer