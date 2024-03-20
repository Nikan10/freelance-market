import React from 'react';
import './navigationPage.css';
import heroImage from '../../assets/images/brandings/maher-new7.png'
import Slider2 from '../../components/slider/Slider'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'
import dawid from '../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg'

import {SearchOutlined, AcUnitOutlined, StarRateRounded} from '@mui/icons-material'
import { Card, CardActions, CardContent, ImageList, ImageListItem, Typography, Button, CardMedia, Grid, Container, Box, Stack, Avatar } from '@mui/material'

const cards = [1, 2, 3, 4, 5, 6];


function NavigationPage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

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
      <br/>
      <Container className='container' maxWidth="xl">
        <Typography variant='h5' fontWeight={600} marginBottom={2}>Popular services</Typography>
        <Carousel responsive={responsive}>
          {cards.map(() => (
            <div className='category' style={{height: "18rem", overflow: "hidden", borderRadius: "4px", margin: "0.4rem"}}>
              <div style={{width: "100%", padding: "1rem", color: "white", background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"}}>
                <Typography variant='body2' >Build your brand</Typography>
                <Typography variant='h6' fontWeight={600}>Logo Design</Typography>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
      
      <section style={{backgroundColor: "#95ffd3"}}>
        <Container className='container' sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}  maxWidth="xl">
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
        <Container className='container' maxWidth="xl">
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

      <Container maxWidth="xl" sx={{ padding: "4rem 0"}}>
        <Typography variant='h5' fontWeight={600}>Inspiring work made on Maher</Typography>
        <br/>
        <Carousel responsive={responsive}>
        {cards.map((card) => (
              <Card sx={{margin: "0.2rem 0.6rem"}}>
                <CardMedia component="img" height="180" image={stormseeker} sx={{borderRadius: "6px"}} alt="Image title" />
                <CardContent>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <Avatar src={stormseeker} />
                    <Stack>
                      <Typography variant='body2' fontWeight={600}>Sulaiman</Typography>
                      <Typography variant='body2' color="gray">by jamiljan</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
          ))}
        </Carousel>
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
      
      <Container maxWidth="lg" sx={{backgroundColor: "secondary.dark", height: "20rem", borderRadius: "6px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem"}}>
        <Typography variant='h4' fontWeight={600} color="#fff">Suddenly it is all so doable.</Typography>
        <Button sx={{width: "8rem"}} variant='contained'>Join Maher</Button>
      </Container>
      
    </div>
  );
}

export default NavigationPage;