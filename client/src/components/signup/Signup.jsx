import {React, useState} from 'react'
import './signup.css'

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'

import { Container, Typography, Card, CardMedia, CardContent, IconButton, Button, Box, TextField } from '@mui/material'
import { ArrowBack } from "@mui/icons-material";

const Signup = (props) => {
  const { setShowSignup } = props;
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4400/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(formData)
    })
    const data = response.json();
    console.log(data)
  }
  return (
    <Box sx={{position: "fixed", backgroundColor: "#00000070", height: "100vh", marginTop: 0, width: "100%", zIndex: "100"}}>
      <Container maxWidth="md" sx={{ marginTop: "4rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Card sx={{ display: "flex", width: "100%", height: "32rem" }}>
          <CardMedia component="img" sx={{height: "100%", width: "50%"}} xs={{display: "none"}} image={stormseeker} alt="Image title" />
          <CardContent sx={{height: "100%", width: "50%"}}>
            <IconButton onClick={() => setShowSignup(false)} sx={{marginTop: 0}}>
              <ArrowBack />
            </IconButton>
            <Typography variant='h5' fontWeight={600} marginTop="3rem">Continue with your email</Typography>
            <form onSubmit={handleSubmit} style={{margin: "0 3rem", marginTop: "3rem"}}>
              <TextField variant='outlined' label="Username" size="small" name='username' onChange={handleChange} /> <br/>
              <br/>
              <TextField variant='outlined' label="Email" size="small" name='email' onChange={handleChange} /> <br/>
              <br/>
              <TextField variant='outlined' label="Password" size="small" name='password' onChange={handleChange} /> <br/> <br/>
              <Button variant='contained' type='submit'>Continue</Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Signup