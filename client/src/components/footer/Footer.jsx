import React from 'react'

import { AppBar, CssBaseline, IconButton, Toolbar, Typography, Button, InputBase, Badge } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: "none", backgroundColor: '#1d1d1d', color: 'white', marginBottom: 0}}>
        <Toolbar>
            <Typography variant='body1'>
                &copy; {new Date().getFullYear()} My App. All rights reserved.
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Footer