import { StarRateRounded } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'
import cardImage from '../../assets/images/categories/CARD12-1.jpg'
import brochreImage from '../../assets/images/categories/Brochure1.jpg'
import logoImage from '../../assets/images/categories/logo4.jpg'

import request from '../../utils/request'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const photos = [cardImage, brochreImage, logoImage]

const GigCard = ({ gig }) => {
    
  return (
    <Link to={`/gigs/${gig._id}`} style={{textDecoration: "none"}} >
        <Card sx={{boxShadow: "none", backgroundColor: "transparent"}}>
                <CardMedia component="img" height="160" image={cardImage} sx={{borderRadius: "5px", border: "1px solid lightgray"}} alt="Image title" />
                <CardContent sx={{padding: 0, paddingTop: "1rem"}}>
                  <Box sx={{marginBottom: "0.8rem", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Stack direction='row' alignItems='center' spacing={1}>
                      <Avatar sx={{width: "2rem", height: "2rem"}} src={jason} />
                      <Typography variant='body2' fontWeight={600}>{gig?.user?.username}</Typography>
                    </Stack>
                    
                  </Box>
                  <Typography variant='body2' fontWeight={500} color="black.main" sx={{height: "3rem"}} gutterBottom>{gig.title}</Typography>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack margin="0.4rem 0" spacing={0.6} alignItems='center' direction='row'>
                      <StarRateRounded /><Typography variant='body2' fontWeight={600}>{gig.ratingsAverage}</Typography>
                    </Stack>
                    <Typography variant='body1' fontWeight={600}>Price ${gig.price}</Typography>
                  </Stack>
                  
                </CardContent>
        </Card>
    </Link>
  )
}

export default GigCard