import {React, useState} from 'react'
import './signin.css'

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'

import { Container, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material'
import { ArrowBack } from "@mui/icons-material";

const Signup = (props) => {
  const { setShowSignin } = props;
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
    <Container maxWidth="xl" sx={{ position: "fixed", backgroundColor: "#00000070", height: "100vh", zIndex: "100", marginTop: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card sx={{ display: "flex", alignItems: "center", width: "70%", height: "32rem" }}>
        <CardMedia component="img" height="100%" image={stormseeker} alt="Image title" />
        <CardContent sx={{width: "100%", height: "100%"}} >
          <IconButton onClick={() => setShowSignin(false)} sx={{marginTop: 0}}>
            <ArrowBack />
          </IconButton>
          <Typography variant='h5' fontWeight={600} marginTop="3rem">Continue with your email</Typography>
          <form onSubmit={handleSubmit} style={{margin: "0 3rem", marginTop: "3rem"}}>
            <label>Email or username</label> <br/>
            <input type='email' placeholder='name@email.com' name='email' style={{ width: "100%" }} onChange={handleChange} /> <br/>
            <label>Password</label> <br/>
            <input type='text' name='password' onChange={handleChange} /> <br/>
            <Button variant='contained' type='submit'>Continue</Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Signup