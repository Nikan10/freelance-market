import React from 'react'
import { Container, Grid, Typography, Box, Stack, Avatar } from '@mui/material'
import Categories from '../../components/categories/Categories'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

import dawid from '../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg'

const Gig = () => {
  return (
    <div className='gig'>
        <Categories />
        <br/>
        <BreadCrumb />
        <br/>
        <Container maxWidth="xl">
            <Grid lg="12" maxWidth="xl" columnSpacing={4} container>
                <Grid lg="9" spacing={6} item>
                    <Box sx={{backgroundColor: "blue"}}>
                        <Typography variant='h6' fontWeight={600}>
                            I will design modern logo for your brand
                        </Typography>
                            
                        <Stack direction="row">
                            <Avatar >hg</Avatar>
                            <Typography>sjhdjcnjdjk</Typography>
                        </Stack>

                        <Box sx={{width: "100%", height: "32rem", overflow: "hidden", backgroundColor: "lightgray"}}>
                            <img src={dawid} width="100%" alt=''></img>  
                        </Box>

                        <Stack>
                            <Typography fontWeight={600}>
                                What people loved about this seller
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid lg="3" item>
                    <Box sx={{backgroundColor: "green"}}>
                        <Box sx={{border: "1px solid gray", width: "100%", borderRadius: "12px"}}>
                            <Typography>New</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    </div>
  )
}

export default Gig