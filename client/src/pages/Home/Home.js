import React from 'react'

import { AppBar, CssBaseline, Stack, Chip, Link, IconButton, Toolbar, Typography, TextField, Container, Button, Rating, InputBase, Badge, Box, Grid, Card, CardContent, CardMedia, Input, FormControlLabel, Switch, Autocomplete, Breadcrumbs, Divider, Paper, Avatar } from '@mui/material';
import { HomeOutlined, Star, StarBorderOutlined, StarRateRounded } from "@mui/icons-material";

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'
import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'
import Catigories from '../../components/categories/Categories';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';

const cards = [1,2,3,4,5,6,7,8,9,10,11,12];
const cards2 = [1,2,3,4];

const home = () => {
  return (
    <div className='home'>
      <Catigories />
      <br/>
      <BreadCrumb />
      <br/>
      <Container maxWidth="xl">
        <Typography variant='h4' fontWeight={600}>Logo Design</Typography>
        <Typography>Stand out from the crowd with a logo that fits your brand personality.</Typography>
      </Container>
      <br/>
      <Container maxWidth="xl">
        <Typography variant='h6' maxWidth="lg" fontWeight={600} marginBottom="1rem">Select logo style</Typography>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Hand-drawn</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Minimalist</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Vintage</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Cartoon</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >3D</Button>
        </Stack>
      </Container>
      <br />
      <Container maxWidth="xl">
        <Divider />
      </Container>
      <br/>
      <Container maxWidth="xl" sx={{display: "flex", justifyContent: "space-between"}}>
        <Stack direction="row" spacing={1}>
          <Autocomplete size='small'sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Logo options'/>} />
          <Autocomplete size='small' sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Seller details' />} />
          <Autocomplete size='small' sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Budget' />} />
          <Autocomplete size='small' sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Delivery time' />} />
        </Stack>
        
        <FormControlLabel label="Pro srvices" control={<Switch />} />
      </Container>
      <br/> <br/>
      <Container maxWidth="xl">
        <Stack direction="row" sx={{alignItems: "center"}}>
          <Typography color="gray" sx={{flexGrow: 1}}>250000+ services available</Typography>
          <Autocomplete size='small'sx={{width: "11rem", border: 0}} value='Best selling' options={['Best selling', 'Online', 'New']} renderInput={(params) => <TextField {...params} sx={{border: 0}}/>} />
        </Stack>
      </Container>
      <br/>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={2.4}>
              <Card>
                <CardMedia component="img" height="160" image={stormseeker} sx={{borderRadius: "3px"}} alt="Image title" />
                <CardContent>
                  <Box sx={{marginBottom: "0.8rem", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Stack direction='row' alignItems='center' spacing={1}>
                      <Avatar sx={{width: "2rem", height: "2rem"}} src={jason} />
                      <Typography variant='body2' fontWeight={600}>Sulaiman</Typography>
                    </Stack>
                    <Typography variant='body2' fontSize={12} fontWeight={600} sx={{height: "auto", backgroundColor: "cyan", borderRadius: "4px", padding: "0.2rem"}}>Trusted</Typography>
                  </Box>
                  <Typography variant='body2' fontWeight={600} color="#464646" gutterBottom>I will design modern minimalist luxury business logo design</Typography>
                  <Stack margin="0.4rem 0" spacing={0.6} alignItems='center' direction='row'>
                    <StarRateRounded /><Typography variant='body2' fontWeight={600}>4.9</Typography>
                  </Stack>
                  <Typography variant='body2' fontWeight={800}>From $80</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br/>
      <Container maxWidth="xl">
        <Divider />
      </Container>
      <br/>
      <Container maxWidth="lg">
        <Stack sx={{display: "flex", alignItems: "center"}}>
          <Typography variant='h5' fontWeight={600} gutterBottom>Explore More Logo Design Services</Typography>
          
          <Box>
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="Logo animation" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="Modern logo design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="Vintage logo design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="Water color design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="PDF logo design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="SVG logo design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="PNG logo design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="PNG logo design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="PNG logo design" />
            <Chip sx={{margin: "0.4rem", color: "gray"}} label="PNG logo design" />
          </Box>
        </Stack>
      </Container>
      <br/>
      <Container maxWidth="xl">
        <Divider />
      </Container>
      <br/> <br/>
      <Container maxWidth="xl">
        <Stack sx={{display: "flex", alignItems: "center"}}>
          <Typography variant='h5' fontWeight={600} gutterBottom>Logo Design FAQs</Typography>
        </Stack>
        <br/>
        <Grid columnSpacing={8} md={{columnSpacing: "4"}} rowSpacing={4} container>
          <Grid lg={6} sm={12} item>
            <Typography fontWeight={600}>What is logo dsign?</Typography>
            <Typography variant='body2' color="gray">ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc</Typography>
          </Grid>
          <Grid lg={6} sm={12} item>
            <Typography fontWeight={600}>What is logo dsign?</Typography>
            <Typography variant='body2' color="gray">ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc</Typography>
          </Grid>
          <Grid lg={6} sm={12} item>
            <Typography fontWeight={600}>What is logo dsign?</Typography>
            <Typography variant='body2' color="gray">ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc</Typography>
          </Grid>
          <Grid lg={6} sm={12} item>
            <Typography fontWeight={600}>What is logo dsign?</Typography>
            <Typography variant='body2' color="gray">ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc</Typography>
          </Grid>
        </Grid>
      </Container>
      <br/> <br/>
    </div>
  )
}

export default home