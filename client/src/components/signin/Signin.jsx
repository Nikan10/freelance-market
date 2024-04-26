import {React, useState} from 'react'
import './signin.css'
import request from '../../utils/request.js'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../../state/userSlice'

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'

import { TextField, Dialog, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material'
import { ArrowBack } from "@mui/icons-material";

const Signin = (props) => {
  const { setShowSignin } = props;
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginStart());

    try {
      const response = await request.post('/signin', formData)

      if(response) {
        let currentUser = response.data.user
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        dispatch(loginSuccess(currentUser))
        setTimeout(() => {
          setShowSignin(false)
        }, 1000);
        navigate('/')
      }
    } catch(error) {
      dispatch(loginFailure(error.message));
      console.log(error.message)
    }
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

export default Signin