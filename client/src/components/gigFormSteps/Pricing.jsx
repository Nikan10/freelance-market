import { Autocomplete, Button, Container, Grid, Input, InputAdornment, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Pricing = ({onNext}) => {
    const [customeTitle, setCustomeTitle] = useState('')
    const [customeDescrition, setCustomeDescription] = useState('')
    const [delivery, setDelivery] = useState(null)
    const [revisions, setRevisions] = useState(null)
    const [concepts, setConcepts] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)

    const returnData = (e) => {
        e.preventDefault()
        onNext({customeTitle, customeDescrition, delivery, revisions, concepts, totalPrice})
    }
  return (
    <Container>
      <Typography variant='h4'>Price & scope</Typography> <br/>
      <Stack>
        <Typography variant='h6' fontWeight={500}>Create price tier</Typography>
        <Typography color='gray' variant='body2'>Customize your gig with pricing tire.</Typography> <br/>
        <Grid rowSpacing={2} container>
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Custome Title</Typography> <br/>
          </Grid>
          <Grid md={9} item>
            <TextField variant='outlined' multiline rows={3} size="small" name='customeTitle' sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setCustomeTitle(e.target.value)} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Custome Description</Typography> <br/>
          </Grid>
          <Grid md={9} item>
            <TextField variant='outlined' multiline rows={5} size="small" name='customeDescription' sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setCustomeDescription(e.target.value)} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Delivery Days</Typography> <br/>
          </Grid>
          <Grid md={9} item>
            <Autocomplete onChange={(e, value) => setDelivery(value)} size='small'sx={{width: "20rem"}} options={[1, 2, 3, 4, 5, 6, 7]} renderInput={(params) => <TextField {...params} label='Select'/>} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Number of Revisions</Typography> <br/>
          </Grid>
          <Grid md={9} item>
            <Autocomplete onChange={(e, value) => setRevisions(value)} size='small'sx={{width: "20rem"}} options={[1, 2, 3, 4, 5, 6, 7]} renderInput={(params) => <TextField {...params} label='Select'/>} />
          </Grid>
          
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Number of Concepts</Typography>
          </Grid>
          <Grid md={9} item>
            <TextField variant='outlined' size="small" name='concepts' sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setConcepts(e.target.value)} />
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
              <Input sx={{width: "1rem"}} type='checkbox' />
            </Stack>
          </Grid>
          <Grid md={6} item>
            <Stack justifyContent="space-between" direction="row">
              <Typography color='gray' variant='body2' fontWeight={500}>Printable file</Typography>
              <Input sx={{width: "1rem"}} type='checkbox'/>
            </Stack>
          </Grid>
          <Grid md={6} item>
            <Stack justifyContent="space-between" direction="row">
              <Typography color='gray' variant='body2' fontWeight={500}>Printable file</Typography>
              <Input sx={{width: "1rem"}} type='checkbox' />
            </Stack>
          </Grid>
          <Grid md={6} item>
            <Stack justifyContent="space-between" direction="row">
              <Typography color='gray' variant='body2' fontWeight={500}>Printable file</Typography>
              <Input sx={{width: "1rem"}} type='checkbox' />
            </Stack>
          </Grid>
        </Grid>
        <br/> <br/>
        <Grid container>
          <Grid md={3} item>
            <Typography color='gray' variant='body2' fontWeight={500}>Total price</Typography>
          </Grid>
          <Grid md={9} item>
            <TextField variant='outlined' type='number' size="small" name='totalPrice' InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>}} sx={{marginBottom: "1.2rem", width: "20rem"}} onChange={e => setTotalPrice(e.target.value)} />
          </Grid>
        </Grid>
      </Stack>
      <br/> 
      
      <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
    </Container>
  )
}

export default Pricing