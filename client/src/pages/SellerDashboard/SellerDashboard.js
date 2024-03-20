import React, { Profiler } from 'react'
import { Container, Grid, Autocomplete, Card, TableContainer, TableHead, CardMedia, CardContent, Link, Typography, TextField, Box, Stack, Avatar, Rating, List, ListItem, ListItemText, Button, Divider, ListItemIcon, Table, TableRow, TableCell, TableBody, LinearProgress} from '@mui/material'
import { Face, Man, PlaceRounded, StarRateRounded } from '@mui/icons-material'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { useSelector } from 'react-redux'

import dawid from '../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg'

const cards = [1, 2, 3, 4, 5, 6];

const SellerDashboard = () => {
    const currentUser = useSelector( state => state.user.currentUser );
    console.log(currentUser);
    const value = 'salam';

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }

  return (
    <div style={{marginTop: "6rem"}}>
        <Container maxWidth="xl" >
            <Grid spacing={3} container>
                <Grid lg="4" item>
                    <Box>
                        <Box sx={{border: "1px solid #e0e0e0", borderRadius: "4px", backgroundColor: "#fff"}}>
                            <Box sx={{padding: "1.4rem"}}>
                                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem 0"}}>
                                    <Avatar src={dawid} sx={{width: "8rem", height: "8rem", marginBottom: "1rem"}} />
                                    <Typography variant='h6' fontWeight={600}>Mohammad Sulaiman</Typography>
                                    <Typography variant='body2' color="gray">{currentUser?.username}</Typography>
                                </Box>
                                <Button size='small' variant='outlined' sx={{textTransform: "capitalize", fontWeight: 600}} fullWidth>Preview Profile</Button>
                                
                                <Box margin="1rem 0">
                                    <Divider />
                                </Box>
                                <Stack spacing={2}>
                                    <Stack direction="row" sx={{justifyContent: "space-between"}}>
                                        <Stack direction="row" spacing={1}>
                                            <PlaceRounded /> <Typography variant='body2' color="gray">From</Typography>
                                        </Stack>
                                        <Typography variant='body2' fontWeight={600}>Afghanistan</Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{justifyContent: "space-between"}}>
                                        <Stack direction="row" spacing={1}>
                                            <Man /> <Typography variant='body2' color="gray">Member since</Typography>
                                        </Stack>
                                        <Typography variant='body2' fontWeight={600}>Aug 2020</Typography>
                                    </Stack>
                                </Stack>
                                
                            </Box>
                        </Box>

                        <Box sx={{border: "1px solid #e0e0e0", padding: "1.2rem", backgroundColor: "#fff", marginTop: "1rem", borderRadius: "4px"}}>
                            <Stack direction="row">
                                <Typography variant='body2' color="gray" sx={{flexGrow: 1}}>Inbox</Typography>
                                <Typography variant='body2' color="primary">View All</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{border: "1px solid #e0e0e0", borderRadius: "4px", backgroundColor: "#fff"}}>
                            <Box sx={{padding: "1.4rem"}}>
                                <Stack spacing={2} direction="row" alignItems="center">
                                    <Avatar src={dawid} sx={{width: "4rem", height: "4rem", marginBottom: "1rem"}} />
                                    <Typography fontWeight={600} sx={{flexGrow: 1}}>Mohammad Sulaiman</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <StarRateRounded />
                                        <Typography variant='body2' fontWeight={600}>4.9</Typography>
                                    </Stack>
                                </Stack>
                                
                                <Box margin="1rem 0">
                                    <Divider />
                                </Box>
                                <Stack spacing={2}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Typography variant='body2' fontWeight={600} sx={{flexGrow: 1}} color="gray">Response Rate</Typography>
                                        <LinearProgress sx={{height: "8px", borderRadius: "25px", width: "8rem"}} variant='determinate' value={92.6} />
                                        <Typography variant='body2' fontWeight={600} color="primary">92.6</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Typography variant='body2' fontWeight={600} sx={{flexGrow: 1}} color="gray">Delivery on Time</Typography>
                                        <LinearProgress sx={{height: "8px", borderRadius: "25px", width: "8rem"}} variant='determinate' value={88} />
                                        <Typography variant='body2' fontWeight={600} color="primary">88</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Typography variant='body2' fontWeight={600} sx={{flexGrow: 1}} color="gray">Order Completion</Typography>
                                        <LinearProgress sx={{height: "8px", borderRadius: "25px", width: "8rem"}} variant='determinate' value={75.9} />
                                        <Typography variant='body2' fontWeight={600} color="primary">75.9</Typography>
                                    </Stack>
                                    
                                </Stack>
                                <Box margin="1rem 0">
                                    <Divider />
                                </Box>
                                <Stack spacing={2}>
                                    <Stack direction="row">
                                        <Typography variant='body2' fontWeight={600} color="gray" sx={{flexGrow: 1}}>Earned in June</Typography>
                                        <Typography variant='body2'>$40</Typography>
                                    </Stack>
                                    <Stack direction="row">
                                        <Typography variant='body2' fontWeight={600} color="gray" sx={{flexGrow: 1}}>Response Time</Typography>
                                        <Typography variant='body2' color="primary">2 hours</Typography>
                                    </Stack>
                                </Stack>
                                
                            </Box>
                        </Box>
                    </Box>
                    
                </Grid>
                <Grid lg={8} item>
                    <Box>
                        <Box sx={{border: "1px solid #e0e0e0", borderRadius: "4px", padding: "0.6rem", backgroundColor: "#fff"}}>
                            <Stack direction="row">
                                <Typography variant='h6' fontWeight={600} sx={{flexGrow: 1}}>Active orders</Typography>
                                <Autocomplete size='small'sx={{width: "9rem"}} options={['AFG', 'IRN', 'PAK']} renderInput={(params) => <TextField {...params} label='Logo options'/>} />
                            </Stack>
                        </Box>
                        <Box sx={{border: "1px solid #e0e0e0", borderRadius: "4px", padding: "0.6rem", backgroundColor: "#fff", marginTop: "1rem"}}>
                            <img src={dawid} height="48px" alt='' />
                        </Box>
                        <Box sx={{ height: "22rem", overflow: "hidden", backgroundColor: "lightgray", marginTop: "2rem"}}>
                            <Carousel responsive={responsive}>
                                {cards.map(() => (
                                    <img src={dawid} width="100%" alt='' />
                                ))}
                            </Carousel>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default SellerDashboard