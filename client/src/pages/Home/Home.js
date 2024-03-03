import React from 'react'

import { AppBar, CssBaseline, Stack, Link, IconButton, Toolbar, Typography, TextField, Container, Button, Rating, InputBase, Badge, Box, Grid, Card, CardContent, CardMedia, Input, FormControlLabel, Switch, Autocomplete, Breadcrumbs, Divider, Paper } from '@mui/material';
import { HomeOutlined } from "@mui/icons-material";

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'
import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'
import Catigories from '../../components/categories/Categories';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';

const cards = [1,2,3,4,5,6,7,8,9,10,11,12];

const home = () => {
  return (
    <div className='home'>
      <Catigories />
      <br/>
      <BreadCrumb />
      <br/>
      <Container>
        <Typography variant='h4' fontWeight={600}>Logo Design</Typography>
        <Typography>Stand out from the crowd with a logo that fits your brand personality.</Typography>
      </Container>
      <br/>
      <Container>
        <Typography variant='h6' maxWidth="lg" fontWeight={600} marginBottom="1rem">Select logo style</Typography>
        <Box maxWidth="xl" sx={{display: "flex", gap: "1rem"}}>
          <Button variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.6rem", padding: "6px"}} ><Box sx={{width: "2.4rem", height: "2.4rem", backgroundColor: "blue", borderRadius: "50%", overflow: "hidden"}}><img style={{width: "100%"}} src={jason} alt=''></img></Box><Typography margin="0 8px" sx={{fontSize: "0.8rem", fontWeight: "600", textTransform: "none", color: "black"}}>Minimalist</Typography></Button>
          <Button variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.6rem", padding: "6px"}} ><Box sx={{width: "2.4rem", height: "2.4rem", backgroundColor: "blue", borderRadius: "50%", overflow: "hidden"}}><img style={{width: "100%"}} src={jason} alt=''></img></Box><Typography margin="0 8px" sx={{fontSize: "0.8rem", fontWeight: "600", textTransform: "none", color: "black"}}>Hand-drawn</Typography></Button>
          <Button variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.6rem", padding: "6px"}} ><Box sx={{width: "2.4rem", height: "2.4rem", backgroundColor: "blue", borderRadius: "50%", overflow: "hidden"}}><img style={{width: "100%"}} src={jason} alt=''></img></Box><Typography margin="0 8px" sx={{fontSize: "0.8rem", fontWeight: "600", textTransform: "none", color: "black"}}>Vintage</Typography></Button>
          <Button variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.6rem", padding: "6px"}} ><Box sx={{width: "2.4rem", height: "2.4rem", backgroundColor: "blue", borderRadius: "50%", overflow: "hidden"}}><img style={{width: "100%"}} src={jason} alt=''></img></Box><Typography margin="0 8px" sx={{fontSize: "0.8rem", fontWeight: "600", textTransform: "none", color: "black"}}>Cartoon</Typography></Button>
          <Button variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.6rem", padding: "6px"}} ><Box sx={{width: "2.4rem", height: "2.4rem", backgroundColor: "blue", borderRadius: "50%", overflow: "hidden"}}><img style={{width: "100%"}} src={jason} alt=''></img></Box><Typography margin="0 8px" sx={{fontSize: "0.8rem", fontWeight: "600", textTransform: "none", color: "black"}}>3D</Typography></Button>
        </Box>
      </Container>
      <br />
      <Container>
        <Divider />
      </Container>
      <br/>
      <Container sx={{display: "flex", justifyContent: "space-between"}}>
        <Stack direction="row" spacing={1}>
          <Autocomplete size='small'sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Logo options'/>} />
          <Autocomplete size='small' sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Seller details' />} />
          <Autocomplete size='small' sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Budget' />} />
          <Autocomplete size='small' sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Delivery time' />} />
        </Stack>
        
        <FormControlLabel label="Pro srvices" control={<Switch />} />
      </Container>
      <br/> <br/>
      <Container>
        <Stack direction="row" sx={{alignItems: "center"}}>
          <Typography color="gray" sx={{flexGrow: 1}}>250000+ services available</Typography>
          <Autocomplete size='small'sx={{width: "11rem", border: 0}} value='Best selling' options={['Best selling', 'Online', 'New']} renderInput={(params) => <TextField {...params} sx={{border: 0}}/>} />
        </Stack>
      </Container>
      <br/>
      <Container maxWidth="lg">
        <Grid container spacing={3} xs={{spacing: "8"}}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia component="img" height="160" image={stormseeker} sx={{borderRadius: "3px"}} alt="Image title" />
                <CardContent>
                  <Typography gutterBottom variant='h6'>Heading</Typography>
                  <Typography>
                    This is media card
                  </Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br/>
    </div>
  )
}

export default home