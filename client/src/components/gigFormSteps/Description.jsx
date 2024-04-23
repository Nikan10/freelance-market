import React, { useState } from 'react'

import { Container, Typography, Card, Grid, CardMedia, CardContent, IconButton, Button, Box, TextField, Dialog, DialogContent } from '@mui/material'
import { Stack } from '@mui/system'
import { Add } from '@mui/icons-material'

const Description = ({ onNext }) => {
  const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const returnData = (e) => {
        e.preventDefault()

        onNext({title, description})
    }
  return (
    <Container>
        <Typography variant='h4'>Gig description</Typography> <br/>
        <Stack>
            <Typography variant='h6' fontWeight={500}>Gig summery</Typography>
            <Typography color='gray' variant='body2'>Briefly explain what sets you and your project apart.</Typography> <br/>
            <TextField variant='outlined' fullWidth multiline rows={4} size="small" name='title' sx={{marginBottom: "1.2rem"}} onChange={e => setTitle(e.target.value)} />
        </Stack>
        <Stack>
            <Typography variant='h6' fontWeight={500}>Frequently asked questions (optional)</Typography>
            <Typography color='gray' variant='body2'>Write answers to common questions your client ask. Add up to 5 questions.</Typography> <br/>
            <Button startIcon={<Add />} sx={{width: "10rem"}} >Add a question</Button>
        </Stack>
        <br/><br/>
        <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
    </Container>
  )
}

export default Description