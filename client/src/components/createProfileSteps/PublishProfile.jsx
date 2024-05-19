import { Add, NavigateNext } from '@mui/icons-material'
import { Autocomplete, Avatar, Button, ButtonGroup, Grid, Input, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { useRef, useState } from 'react'

const PublishProfile = ({ onNext, onPrev }) => {
  const [photo, setPhoto] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [phone, setPhone] = useState('')

  const photoInputRef = useRef(null);

  const handleClick = () => {
    photoInputRef.current.click();
  }

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto)
  }

  const returnData = () => {

    onNext({photo, country, city, postalCode, phone})
  }
  console.log({photo, country, city, postalCode, phone})
  return (
    <Box paddingTop="8rem" sx={{ height: "100vh" }}>
      <Container maxWidth="md">
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Complete and publish your profile
        </Typography>
        <Typography variant="body2" color="black.light">
          A professional photo helps you build trust with your clients. To keep things safe and simple, they will pay you through us - which is why we need your personal information.
        </Typography>
      </Container>
      <br />
      <Container maxWidth="md">
        <Grid columnSpacing={6} container>
            <Grid md={3} item>
                <Stack alignItems="center">
                    <Avatar sx={{width: "8rem", height: "8rem"}} />
                    <br />
                    <input type='file' ref={photoInputRef} style={{display: "none"}} onChange={handlePhotoChange} />
                    <Button size='small' onClick={handleClick} variant='outlined' startIcon={<Add />}>Upload Photo</Button>
                </Stack>
            </Grid>
            <Grid md={9} item>
                <Typography gutterBottom>Country *</Typography>
                <Autocomplete
                sx={{ maxWidth: "16rem"}}
                size="small"
                onChange={(e, value) => setCountry(value)}
                options={["Afghanistan", "Albania", "Argentina", "China", "Japan", "Korea"]}
                renderInput={(params) => <TextField {...params} />}
                />
                <br />
                <Stack direction="row" spacing={3}>
                    <Stack>
                        <Typography gutterBottom>City *</Typography>
                        <TextField onChange={(e) => setCity(e.target.value)} sx={{ maxWidth: "16rem"}} type='text' size='small' />
                    </Stack>
                    <Stack>
                        <Typography gutterBottom>Postal Code *</Typography>
                        <TextField onChange={(e) => setPostalCode(e.target.value)} sx={{ maxWidth: "8rem"}} type='number' size='small' />
                    </Stack>
                </Stack>
                <br />
                
                <TextField onChange={(e) => setPhone(e.target.value)} type='text' sx={{ maxWidth: "16rem"}} placeholder='Enter number' size='small' />
            </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          bottom: 0,
          position: "fixed",
          width: "100%",
          backgroundColor: "#fff",
          zIndex: 100,
          padding: "1rem 0",
          borderTop: "2px solid",
          borderTopColor: "primary.main"
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Button variant="outlined" onClick={onPrev}>Back</Button>
            <Button variant="contained" onClick={returnData}>
              Next
              <NavigateNext />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default PublishProfile