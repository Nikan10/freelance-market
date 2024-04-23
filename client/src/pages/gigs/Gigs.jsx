import { StarRateRounded } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'

const Gigs = () => {
  return (
      <Container sx={{marginTop: "8rem"}}>
          <Card sx={{ display: "flex", maxWidth: "46rem", height: "10rem"}}>
                <CardMedia component="img" height={180}image={jason} sx={{borderRadius: "3px"}} alt="Image title" />
                <CardContent sx={{width: "60rem"}}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <Stack direction='row' alignItems='center' spacing={1}>
                        <Avatar sx={{width: "2rem", height: "2rem"}} src={jason} />
                        <Typography variant='body2' fontWeight={600}>Sulaiman</Typography>
                        </Stack>
                        <Typography variant='body2' fontSize={12} fontWeight={600} sx={{height: "auto", backgroundColor: "cyan", borderRadius: "4px", padding: "0.2rem"}}>Trusted</Typography>
                    </Box>
                    <Typography variant='caption' fontWeight={600} color="#464646" gutterBottom>I will design modern minimalist luxury business logo design</Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack margin="0.4rem 0" spacing={0.6} alignItems='center' direction='row'>
                            <StarRateRounded /><Typography variant='body2' fontWeight={600}>4.3</Typography>
                        </Stack>
                        <Typography variant='body1' fontWeight={600}>Price $20</Typography>
                    </Stack>
                </CardContent>
            </Card>
      </Container>
  )
}

export default Gigs