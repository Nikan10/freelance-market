import {React, useState} from 'react'
import './signin.css'
import { useDispatch } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../../state/userSlice'


import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'

import { TextField, Dialog, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material'
import { ArrowBack } from "@mui/icons-material";

const Signup = (props) => {
  const { setShowSignin } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    let user = {};
    try {
      user = await fetch('http://localhost:4400/signin', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(formData)
      })
      user = user.json();
      dispatch(loginSuccess(user))
    } catch(error) {
      dispatch(loginFailure(error.message));
    }

    console.log(user)
  }
  return (
    <Dialog maxWidth='md' open={setShowSignin} onClose={() => setShowSignin(false)} >
        <Card sx={{ display: "flex", minHeight: "32rem"}}>
          <CardMedia component="img" sx={{height: "100%", width: "50%"}} xs={{display: "none"}} image={stormseeker} alt="Image title" />
          <CardContent sx={{height: "100%", width: "50%"}}>
            <IconButton onClick={() => setShowSignin(false)} sx={{marginTop: 0, marginLeft: 0}}>
              <ArrowBack />
            </IconButton>
            <Typography variant='h6' fontWeight={600} sx={{marginLeft: "1rem", marginTop: "1rem"}}>Continue with your email</Typography>
            <form onSubmit={handleSubmit} style={{marginTop: "1rem", justifyContent: "center", padding: "1rem"}}>
              <TextField variant='outlined' label="Email" size="small" fullWidth name='email' sx={{marginBottom: "1.2rem"}} onChange={handleChange} />
              <TextField variant='outlined' label="Password" size="small" fullWidth name='password' sx={{marginBottom: "1.2rem"}} onChange={handleChange} /> 

              <Button variant='contained' fullWidth type='submit' >Continue</Button>
            </form>
          </CardContent>
        </Card>
    </Dialog>
  )
}

export default Signup