import React from 'react';
import './navigationPage.css';
import heroImage from '../../assets/images/brandings/maher-new7.png'
import Slider2 from '../../components/slider/Slider'

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'
import dawid from '../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg'

import {SearchOutlined, AcUnitOutlined} from '@mui/icons-material'
import { Card, CardActions, CardContent, ImageList, ImageListItem, Typography, Button, CardMedia, Grid, Container, Box } from '@mui/material'

const cards = [1, 2, 3, 4, 5, 6];


function NavigationPage() {
  return (
    <div className="NavigationPage">
      <section className="hero">
        <div className="hero-content">
          <Typography variant='h4' fontWeight={600}>Find the perfect freelance services for your business</Typography>
          <br/>
          <div className='search-box'>
            <input type='text' className='search-input input' name='search' placeholder='Search for service...' />
            <button className='search-button button'>{<SearchOutlined className='SearchOutlined' />}</button>
          </div>
          <div className='popularCategories'>
            <Typography>Popular:</Typography>
            <Button variant='outlined' sx={{color: "#fff", borderColor: "#fff", borderRadius: "25px", fontSize: "0.6rem", padding: "0.2rem 0.8rem"}}>Wordpress</Button>
            <Button variant='outlined' sx={{color: "#fff", borderColor: "#fff", borderRadius: "25px", fontSize: "0.6rem", padding: "0.2rem 0.8rem"}}>Website Design</Button>
            <Button variant='outlined' sx={{color: "#fff", borderColor: "#fff", borderRadius: "25px", fontSize: "0.6rem", padding: "0.2rem 0.8rem"}}>Logo Design</Button>
          </div>
        </div>
        <div className='hero-image'>
          <img src={heroImage} alt='hero' ></img>
        </div>
      </section>
      <Container className='container'>
        <Slider2 className="slider" />
      </Container>
      
      <section style={{backgroundColor: "#95ffd3"}}>
        <Container className='container' sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}  maxWidth="lg">
          <div className='intro'>
            <Typography variant='h5' fontWeight={700}>The best part? Everything</Typography>

            <Typography variant='h6' fontWeight={600}>Stick to your budget</Typography>
            <Typography maxWidth={400}>Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus!</Typography>
            
            <Typography variant='h6' fontWeight={600}>Stick to your budget</Typography>
            <Typography maxWidth={400}>Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus!</Typography>
            
            <Typography variant='h6' fontWeight={600}>Stick to your budget</Typography>
            <Typography maxWidth={400}>Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus!</Typography>
          </div>
          <div className='introImage'>
            <img src={dawid} alt=''></img>
          </div>
        </Container>
      </section>

      <section>
        <Container className='container' maxWidth="lg">
          <Typography variant='h5' fontWeight={700}>You need it, we have got it</Typography>
          <br/> <br/>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid key={card} lg={3} sm={4} xs={6} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} item>
                <AcUnitOutlined sx={{fontSize: "5rem"}} />
                <Typography>Graphic Design</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <Container className='container' sx={{backgroundColor: "#260955", borderRadius: "10px", color: "white", display: "flex", justifyContent: "space-between"}} height="100px"  maxWidth="xl">
        <div className='intro'>
          <Typography variant='h5' fontWeight={700}>The best part? Everything</Typography>
          <br/>
          <Typography variant='h6' fontWeight={600}>Stick to your budget</Typography>
          <Typography maxWidth={400}>Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus!</Typography>
          
          <Typography variant='h6' fontWeight={600}>Stick to your budget</Typography>
          <Typography maxWidth={400}>Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus!</Typography>
          
          <Typography variant='h6' fontWeight={600}>Stick to your budget</Typography>
          <Typography maxWidth={400}>Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus!</Typography>
          <Button size='small' variant='contained'>Learn more</Button>
        </div>
        <div className='introImage'>
          <img src={dawid} alt=''></img>
        </div>
      </Container>

      <Container className='container' sx={{display: "flex", justifyContent: "left"}} maxWidth="xl">
        <div className='introImage'>
          <img src={dawid} alt=''></img>
        </div>
        <div className='testimonials' style={{marginLeft: "3rem", maxWidth: "46rem"}}>
          <Typography variant='h6' color="gray">Salim Sabir, Chief Commercial Officer</Typography>
          <br/>
          <Typography variant='h6' fontWeight={600}>Owesome!</Typography>
          <Typography variant='h5' fontStyle="italic" color="primary.dark">"Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus. Ipsam illo autem consectetur, neque error provident eaque nulla nesciunt rem ut adipisci quod eum ducimus."</Typography>
        </div>
      </Container>

      <Container maxWidth="lg" className='container'>
        <Box sx={{width: "40rem", height: "18rem", overflowX: "scroll", overflowY: "hidden"}}>
          <ImageList rows="1" cols="6">
            {cards.map((card) => (
              <ImageListItem key={card}>
                <img src={dawid} alt=''></img>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
      
      <Container maxWidth="lg" sx={{backgroundColor: "secondary.dark", height: "20rem", borderRadius: "6px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem"}}>
        <Typography variant='h4' fontWeight={600} color="#fff">Suddenly it is all so doable.</Typography>
        <Button sx={{width: "8rem"}} variant='contained'>Join Maher</Button>
      </Container>
      
    </div>
  );
}

export default NavigationPage;