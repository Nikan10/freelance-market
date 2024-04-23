import { Autocomplete, Button, Container, Grid, Input, InputAdornment, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Pricing = ({onNext}) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [keywords, setKeywords] = useState([])

    const returnData = (e) => {
        e.preventDefault()

        onNext({title, category, keywords})
    }
  return (
    <Container>
      <Typography variant='h4'>Price & scope</Typography> <br/>
      <Stack>
        <Typography variant='h6' fontWeight={500}>Create price tier</Typography>
        <Typography color='gray' variant='body2'>Customize your gig with pricing tire.</Typography> <br/>
        <Grid rowSpacing={2} container>
          <Grid md={3} direction="row" item>
            <Typography color='gray' variant='body2' fontWeight={500}>Custome Title</Typography> <br/>
          </Grid>
          <Grid md={9} item>
            <TextField variant='outlined' multiline rows={3} size="small" name='title' sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setTitle(e.target.value)} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Custome Description</Typography> <br/>
          </Grid>
          <Grid md={9} item>
            <TextField variant='outlined' multiline rows={5} size="small" name='title' sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setTitle(e.target.value)} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Delivery Days</Typography> <br/>
          </Grid>
          <Grid md={9} item>
          <Autocomplete size='small'sx={{width: "20rem"}} options={[1, 2, 3, 4, 5, 6, 7]} renderInput={(params) => <TextField {...params} label='Select'/>} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Number of Revisions</Typography> <br/>
          </Grid>
          <Grid md={9} item>
            <Autocomplete size='small'sx={{width: "20rem"}} options={[1, 2, 3, 4, 5, 6, 7]} renderInput={(params) => <TextField {...params} label='Select'/>} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Number of Concepts</Typography>
          </Grid>
          <Grid md={9} item>
            <TextField variant='outlined' size="small" name='title' sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setTitle(e.target.value)} />
          </Grid>
        </Grid>
      </Stack>
      <br/>
      <Stack maxWidth="md">
        <Typography variant='h6' fontWeight={500}>Sevice Tire Options</Typography>
        <Grid columnSpacing={20} rowSpacing={2} container>
          <Grid md={6} item>
            <Stack justifyContent="space-between" direction="row">
              <Typography color='gray' variant='body2' fontWeight={500}>Printable file</Typography>
              <Input sx={{width: "1rem"}} type='checkbox'></Input>
            </Stack>
          </Grid>
          <Grid md={6} item>
            <Stack justifyContent="space-between" direction="row">
              <Typography color='gray' variant='body2' fontWeight={500}>Printable file</Typography>
              <Input sx={{width: "1rem"}} type='checkbox'></Input>
            </Stack>
          </Grid>
          <Grid md={6} item>
            <Stack justifyContent="space-between" direction="row">
              <Typography color='gray' variant='body2' fontWeight={500}>Printable file</Typography>
              <Input sx={{width: "1rem"}} type='checkbox'></Input>
            </Stack>
          </Grid>
          <Grid md={6} item>
            <Stack justifyContent="space-between" direction="row">
              <Typography color='gray' variant='body2' fontWeight={500}>Printable file</Typography>
              <Input sx={{width: "1rem"}} type='checkbox'></Input>
            </Stack>
          </Grid>
        </Grid>
        <br/> <br/>
        <Stack spacing={16} alignItems="center" direction="row">
          <Typography color='gray' variant='body2' fontWeight={500}>Total price</Typography>
          <TextField variant='outlined' type='number' size="small" name='title' InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>}} sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setTitle(e.target.value)} />
        </Stack>
      </Stack>
      <br/> 
      <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
    </Container>
  )
}

export default Pricing