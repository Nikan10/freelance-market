import {React, useState} from 'react'
import './signup.css'

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'

import { Container, Typography, Card, CardMedia, CardContent, IconButton, Button, Box, TextField, Dialog, DialogContent } from '@mui/material'
import { ArrowBack } from "@mui/icons-material";

const Signup = (props) => {
  const { setShowSignup, showSignup } = props;
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
    <Dialog maxWidth='md' open={showSignup} onClose={() => setShowSignup(false)} >
        <Card sx={{ display: "flex", minHeight: "32rem"}}>
          <CardMedia component="img" sx={{height: "100%", width: "50%"}} xs={{display: "none"}} image={stormseeker} alt="Image title" />
          <CardContent sx={{height: "100%", width: "50%"}}>
            <IconButton onClick={() => setShowSignup(false)} sx={{marginTop: 0, marginLeft: 0}}>
              <ArrowBack />
            </IconButton>
            <Typography variant='h6' fontWeight={600} sx={{marginLeft: "1rem", marginTop: "1rem"}}>Continue with your email</Typography>
            <form onSubmit={handleSubmit} style={{marginTop: "1rem", justifyContent: "center", padding: "1rem"}}>
              <TextField variant='outlined' label="Email" size="small" fullWidth name='email' sx={{marginBottom: "1.2rem"}} onChange={handleChange} />
              <TextField variant='outlined' label="Username" size="small" fullWidth name='username' sx={{marginBottom: "1.2rem"}} onChange={handleChange} /> 
              <TextField variant='outlined' label="Password" size="small" fullWidth name='password' sx={{marginBottom: "1.2rem"}} onChange={handleChange} /> 
              <TextField variant='outlined' label="Cofirm password" size="small" fullWidth name='confirmPassword' sx={{marginBottom: "1.2rem"}} onChange={handleChange} /> 
              <Button variant='contained' fullWidth type='submit'>Continue</Button>
            </form>
          </CardContent>
        </Card>
    </Dialog>
  )
}

export default Signup