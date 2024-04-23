import React, { useState } from 'react'

import { Container, Typography, Card, Grid, CardMedia, CardContent, IconButton, Button, Box, TextField, Dialog, DialogContent } from '@mui/material'

const Requirements = ({ onNext, onPrev }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        onNext({title, description})
    }
  return (
    <Container>
        Requirements
            <Grid spacing={4} container>
                <Grid sm={4} item>
                  <Typography fontWeight={600}>Gig title</Typography>
                  <Typography color='gray' variant='body2'>ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc</Typography>
                </Grid>
                <Grid sm={8} item><TextField variant='outlined' fullWidth multiline rows={4} size="small" name='title' sx={{marginBottom: "1.2rem"}} onChange={e => setTitle(e.target.value)} /></Grid>
            </Grid>
        
    </Container>
  )
}

export default Requirements