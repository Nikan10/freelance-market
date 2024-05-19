import {React, useState} from 'react'
import request from '../../utils/request.js'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../../state/userSlice.js'

import { Container, Typography, Button, TextField, Autocomplete, Link, Input } from '@mui/material'
import { Stack } from '@mui/system'


const Signup = ({ stage }) => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(stage === 1) setFormData({ ...formData, isSeller: true })
    dispatch(loginStart());

    try{
      const response = await request.post('/signup', formData)
      if(response.data) {
        const currentUser = localStorage.setItem('currentUser', JSON.stringify(response.data?.user))
        dispatch(loginSuccess(currentUser))
        navigate('/createProfile')
      }
    } catch(error) {
      console.log(error.message)
      dispatch(loginFailure(error.message));
    }
  }
  
  return (
    <Container maxWidth="sm" sx={{border: "1px solid lightgray", borderRadius: "6px", padding: "2rem"}}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} alignItems="center">
          <Typography variant='h6'>Sign up to find work you love</Typography>
          <Stack direction="row" width="100%" spacing={2}>
            <TextField variant='outlined' onChange={handleChange} type='text' placeholder='Name' fullWidth size="small" name='name' />
            <TextField variant='outlined' onChange={handleChange} type='text' placeholder='Last name' fullWidth size="small" name='lastname' />
          </Stack>
          <TextField variant='outlined' onChange={handleChange} type='email' placeholder='Email' fullWidth size="small" name='email' />
          <TextField variant='outlined' onChange={handleChange} type='password' placeholder='Password' fullWidth size="small" name='password' />
          <TextField type='password' onChange={handleChange} placeholder='Confirm password' fullWidth size="small" name='passwordConfirm' />
          <Autocomplete size='small' onChange={(e, value) => { setFormData({ ...formData, country: value})}} fullWidth options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} name='country' placeholder='Country'/>} />
        </Stack>
        <Stack direction="row" spacing={1} margin="2rem 0" alignItems="center">
          <Input style={{width: "1rem"}} type='checkbox' />
          <Typography variant='body2'>Yes, I understand and agree to the <Link>Maher Terms of Services</Link> including <Link>Privacy Policy</Link></Typography>
        </Stack>
        <Button type='submit' fullWidth variant='contained'>Create my account</Button>
      </form>
      <Stack alignItems="center">
        <Typography variant='caption' marginTop={4} fontWeight={500}>Already have an account? <Link>Log in</Link></Typography>
      </Stack>
    </Container>
  )
}

export default Signup