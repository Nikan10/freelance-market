import React, { useState } from 'react'
import { Container, Stack } from '@mui/system'
import { Button, Link, Typography } from '@mui/material'
import { AttachMoneyOutlined, WorkOutlined } from '@mui/icons-material'
import Signup from '../../components/signup/Signup'

const Join = () => {
  const [stage, setStage] = useState(null)
  const [signup, setSignup] = useState(false)

  const handleStage = (value) => {
    setStage(value)
    setSignup(true)
  }
  return (
    <Container sx={{marginTop: "6rem"}}>
        { signup ? <Signup stage={stage} /> :
          <Stack alignItems="center">
            <Typography variant='h5' marginTop={6} gutterBottom>Join as client or freelancer</Typography>
            <br/>
            <Stack direction="row" spacing={3}>
                <Button onClick={() => handleStage(1)} variant='outlined' sx={{color: "black.main", borderColor: "lightgray", borderRadius: "6px", padding: "1rem", textTransform: "capitalize", width: "15rem", height: "12rem"}}><Stack alignItems="center"><WorkOutlined sx={{marginBottom: "1rem"}} /><Typography variant='body2' fontWeight={500}>I am a freelancer, looking for work</Typography></Stack></Button>
                <Button onClick={() => handleStage(2)} variant='outlined' sx={{color: "black.main", borderColor: "lightgray", borderRadius: "6px", padding: "1rem", textTransform: "capitalize", width: "15rem", height: "12rem"}}><Stack alignItems="center"><AttachMoneyOutlined sx={{marginBottom: "1rem"}} /><Typography variant='body2' fontWeight={500}>I am a client, hiring for a project</Typography></Stack></Button>
            </Stack>
            <Typography variant='caption' marginTop={4} fontWeight={500}>Already have an account? <Link>Log in</Link></Typography>
        </Stack>}
    </Container>
  )
}

export default Join