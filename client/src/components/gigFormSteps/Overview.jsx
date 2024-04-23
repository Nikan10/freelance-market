import React, { useState } from 'react'

import { Container, Typography, Card, Grid, CardMedia, CardContent, IconButton, Button, Box, TextField, Dialog, DialogContent, Stack, Autocomplete } from '@mui/material'

const Overview = ({ onNext }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [keywords, setKeywords] = useState([])

    const returnData = (e) => {
        e.preventDefault()

        onNext({title, category, keywords})
    }
  return (
    <Container>
      <Typography variant='h4'>Gig overview</Typography> <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Title</Typography>
        <Typography color='gray' variant='body2'>Tell the client what you will deliver and how it benefits them.</Typography> <br/>
        <TextField variant='outlined' fullWidth size="small" name='title' sx={{marginBottom: "1.2rem"}} onChange={e => setTitle(e.target.value)} />
      </Stack>
      <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Category</Typography>
        <Typography color='gray' variant='body2'>Select a category so it's easy fro clients to find your project.</Typography> <br/>
        <Autocomplete size='small'sx={{width: "12rem"}} options={['Graphic Design', 'Web Developement', 'Translation']} renderInput={(params) => <TextField {...params} label='Select'/>} />
      </Stack>
      <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Gig attributes</Typography>
        <Typography color='gray' variant='body2'>Select a category above to see options.</Typography> <br/>
      </Stack>
      <br/>
      <Stack>
        <Typography variant='h6' fontWeight={600}>Search tags (optional)</Typography>
        <Typography color='gray' variant='body2'>Tell the client what you will deliver and how it benefits them.</Typography> <br/>
        <TextField variant='outlined' fullWidth size="small" name='title' sx={{marginBottom: "1.2rem"}} onChange={e => setTitle(e.target.value)} />
      </Stack>
      <br/>
          
      <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
    </Container>
  )
}

export default Overview