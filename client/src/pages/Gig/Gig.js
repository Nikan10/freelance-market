import React from 'react'
import { Container, Grid, Card, TableContainer, TableHead, CardMedia, CardContent, Link, Typography, Box, Stack, Avatar, Rating, List, ListItem, ListItemText, Button, Divider, ListItemIcon, Table, TableRow, TableCell, TableBody} from '@mui/material'
import Categories from '../../components/categories/Categories'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'

import { Circle, MarkChatRead, StarRateRounded, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import dawid from '../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg'

const cards = [1, 2, 3, 4, 5, 6];

const Gig = () => {
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

    const responsive2 = {
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
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
    }
    const responsive3 = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
    }

  return (
    <div className='gig'>
        <Categories />
        <br/>
        <BreadCrumb />
        <br/>
        <Container maxWidth="xl">
            <Grid columnSpacing={6} container>
                <Grid lg="8" item>
                    <Box>
                        <Typography variant='h5' fontWeight={600}>
                            I will design modern logo for your brand
                        </Typography>
                        <br/>
                        <Stack direction="row" spacing={2}>
                            <Avatar src={jason} />
                            <Stack>
                                <Typography fontWeight={600}>Sulaiman19</Typography>
                                <Stack direction="row" alignItems="center">
                                    <StarRateRounded />
                                    <Typography variant='body2' fontWeight={600}>4.9</Typography>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Typography variant='body2' fontSize={12} fontWeight={600} sx={{height: "auto", backgroundColor: "cyan", borderRadius: "4px", padding: "0.2rem"}}>Trusted</Typography>
                            </Stack>
                        </Stack>
                        <br/>
                        <Box sx={{width: "100%", height: "32rem", overflow: "hidden", backgroundColor: "lightgray"}}>
                            <Carousel responsive={responsive}>
                                {cards.map(() => (
                                    <img src={dawid} width="100%" alt='' />
                                ))}
                            </Carousel>
                        </Box>
                        <br/>
                        <Box>
                            <Carousel responsive={responsive2}>
                                {cards.map(() => (
                                    <div style={{margin: "0 0.2rem"}}>
                                        <img src={dawid} width="100%" alt='' />
                                    </div>
                                ))}
                            </Carousel>
                        </Box>
                        <br/> <br/>
                        <Box>
                            <Stack direction="row" alignItems="center">
                                <Typography flexGrow={1} variant='h6' fontWeight={600} marginBottom={2}>What people loved about this seller</Typography>
                                <Typography variant='body2' fontWeight={600}>See all reviews</Typography>
                            </Stack>
                            <Carousel responsive={responsive}>
                                {cards.map(() => (
                                    <Stack direction="row" spacing={3} style={{padding: "18px 32px", border: "1px solid lightgray", height: "10rem", borderRadius: "4px", margin: "0.4rem"}}>
                                        <Avatar src={jason} />
                                        <Stack spacing={2}>
                                            <Stack direction="row"spacing={2}>
                                                <Typography variant='body2' fontWeight={600}>Salim Jan</Typography>
                                                <Typography variant='body2' color="gray">Afghanistan</Typography>
                                                <Stack direction="row" spacing={1} >
                                                    <Rating value="4" size='small' readOnly />
                                                </Stack>
                                            </Stack>
                                            <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                                        </Stack>
                                        
                                    </Stack>
                                ))}
                            </Carousel>
                        </Box>
                        <br/> <br/>
                        <Box>
                            <Typography variant='h6' fontWeight={600}>About this gig</Typography>
                            <br/>
                            <Typography variant='body2' fontWeight={600}>MODERN BRAND LOGO</Typography>
                            <br/>
                            <Box>
                                <Typography variant='body2' fontWeight={600}>If you need modern brand logo so this gig is for you</Typography>
                                <br/>
                                <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                                <br/>
                                <Typography variant='body2'>Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                            </Box>
                            <br/>
                            <Box>
                                <Typography variant='body2' fontWeight={600}>My services</Typography>
                                <Typography variant='body2'>
                                    <ul>
                                        <li>list item one</li>
                                        <li>list item two</li>
                                        <li>list item three</li>
                                        <li>list item four</li>
                                        <li>list item five</li>
                                        <li>list item six</li>
                                        <li>list item seven</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <br/>
                            <Box>
                                <Typography variant='body2' fontWeight={600}>I look forward to create unique identity for your brand</Typography>
                                <br/>
                                <Typography variant='body2'>Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                            </Box>
                        </Box>
                        <br/> <br/>
                        <Box>
                            <Typography variant='h6' fontWeight={600}>About this seller</Typography>
                            <br/>
                            <Stack direction="row" spacing={3}>
                                <Avatar sx={{width: "4.5rem", height: "4.5rem"}} src={jason} />
                                <Stack>
                                    <Stack direction="row" spacing={12}>
                                        <Typography variant='body2' fontWeight={600}>Sulaiman19</Typography>
                                        <Typography variant='body2' color="primary" alignItems="center" sx={{padding: "4px", borderRadius: "12px"}} borderColor="primary">Online <Circle fontSize="2rem" /> </Typography>
                                    </Stack>
                                    <Typography variant='body2' color="gray">
                                        Web and Logo Designer
                                    </Typography>
                                    <Stack direction="row" spacing={4} alignItems="center">
                                        <Stack direction="row" alignItems="center">
                                            <StarRateRounded />
                                            <Typography variant='body2' fontWeight={600}>4.9</Typography>
                                        </Stack>
                                        <Typography fontWeight={600} sx={{backgroundColor: "cyan", fontSize: "0.8rem", padding: "0.1rem 0.4rem", borderRadius: "8px"}}>Skilled</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <br/>
                            <Box>
                                <Button variant='outlined' size='small' sx={{color: "black", fontWeight: 600, textTransform: "capitalize", borderColor: "black"}}>Contact me</Button>
                            </Box>
                            <br/>
                            <Box sx={{border: "1px solid lightgray", borderRadius: "4px", padding: "1.4rem"}}>
                                <Grid sx={{}} container>
                                    <Grid lg={6} item>
                                        <Box sx={{marginBottom: "1rem"}}>
                                            <Typography variant='body2' color="gray">From</Typography>
                                            <Typography variant='body2' fontWeight={600}>Afghanistan</Typography>
                                        </Box>
                                        <Box sx={{marginBottom: "1rem"}}>
                                            <Typography variant='body2' color="gray">Avg. response time</Typography>
                                            <Typography variant='body2' fontWeight={600}>2 hours</Typography>
                                        </Box>
                                        <Box sx={{marginBottom: "1rem"}}>
                                            <Typography variant='body2' color="gray">Language</Typography>
                                            <Typography variant='body2' fontWeight={600}>English</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid lg={6} item>
                                        <Box sx={{marginBottom: "1rem"}}>
                                            <Typography variant='body2' color="gray">Member since</Typography>
                                            <Typography variant='body2' fontWeight={600}>Jun 2020</Typography>
                                        </Box>
                                        <Box sx={{marginBottom: "1rem"}}>
                                            <Typography variant='body2' color="gray">Last delivery</Typography>
                                            <Typography variant='body2' fontWeight={600}>about 19 hours</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box>
                                    <Divider />
                                </Box>
                                
                                <Box marginTop={2}>
                                    <Typography variant='body2' color="gray">Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis. Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <br/> <br/>
                        <Box>
                            <Typography variant='h6' fontWeight={600}>Compare packages</Typography>
                            <br/>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Package</TableCell>
                                            <TableCell>Basic</TableCell>
                                            <TableCell>Premium</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{backgroundColor: "#eee"}}>
                                            <TableCell>Logo transparency</TableCell>
                                            <TableCell>Basic</TableCell>
                                            <TableCell>Premium</TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Logo transparency</TableCell>
                                            <TableCell>Basic</TableCell>
                                            <TableCell>Premium</TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableBody>
                                        <TableRow sx={{backgroundColor: "#eee"}}>
                                            <TableCell>Logo transparency</TableCell>
                                            <TableCell>Basic</TableCell>
                                            <TableCell>Premium</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <br/> <br/>
                        <Box sx={{backgroundColor: "#eee", padding: "2rem"}}>
                            <Typography variant='h6' fontWeight={600} marginBottom={1}>Recommended for you</Typography>
                            <Carousel responsive={responsive3}>
                                {cards.map(() => (
                                    <Card sx={{margin: "0.1rem 0.2rem"}}>
                                        <CardMedia component="img" height="130" image={dawid} sx={{borderRadius: "3px"}} alt="Image title" />
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
                                ))}
                            </Carousel>
                        </Box>
                        <br/> <br/>
                        <Box>
                            <Typography variant='h6' fontWeight={600}>reviews</Typography>
                            <Box>
                                <Box>
                                    <Divider />
                                </Box>
                                <Grid container>
                                    {cards.map(() => (
                                        <Grid item>
                                            <Stack sx={{margin: "2rem 0"}} direction="row" spacing={2}>
                                                <Avatar src={dawid} />
                                                <Stack spacing={1}>
                                                    <Stack>
                                                        <Typography variant='body2' fontWeight={600}>shoaib khan</Typography>
                                                        <Typography variant='body2' color="gray">India</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1} >
                                                        <Rating value="4" size='small' readOnly />
                                                        <Typography fontSize="0.8rem" color="gray">2 months ago</Typography>
                                                    </Stack>
                                                    <Typography variant='body2'>Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis. Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography variant='body2' fontWeight={600}>Helpful?</Typography>
                                                        <Button variant='body2' sx={{textTransform: "capitalize", padding: 0, fontWeight: 600}} startIcon={<ThumbUpOutlined />}>Yes</Button>
                                                        <Button variant='body2' sx={{textTransform: "capitalize", padding: 0, fontWeight: 600}} startIcon={<ThumbDownOutlined />}>No</Button>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            <Box>
                                                <Divider />
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box margin="1rem 0">
                                <Button variant='outlined' sx={{color: "black", borderColor: "black", textTransform: "capitalize", fontWeight: 600}} size='small'>Show More Reviews</Button>
                            </Box>
                        </Box>
                        <br />
                    </Box>
                </Grid>

                <Grid lg="4" item>
                    <Box sx={{position: "sticky", top: "6rem", backgroundColor: "#fff", marginBottom: "2rem"}}>
                        <Box sx={{border: "1px solid lightgray", borderRadius: "4px"}}>
                            <Box sx={{padding: "1.2rem"}}>
                                <Stack direction="row">
                                    <Typography sx={{flexGrow: 1, textTransform: "uppercase", fontWeight: 600}}>Basic</Typography>
                                    <Typography>$60</Typography>
                                </Stack>
                                <br/>
                                <Typography variant='body2' color="gray">Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                                <Stack>

                                </Stack>
                                <List>
                                    <ListItem sx={{padding: 0}}>
                                        <ListItemIcon>
                                            <MarkChatRead />
                                        </ListItemIcon>
                                        <ListItemText secondary="List item one" />
                                    </ListItem>
                                    <ListItem sx={{padding: 0}}>
                                        <ListItemIcon>
                                            <MarkChatRead />
                                        </ListItemIcon>
                                        <ListItemText secondary="List item one" />
                                    </ListItem>
                                    <ListItem sx={{padding: 0}}>
                                        <ListItemIcon>
                                            <MarkChatRead />
                                        </ListItemIcon>
                                        <ListItemText secondary="List item one" />
                                    </ListItem>
                                    <ListItem sx={{padding: 0}}>
                                        <ListItemIcon>
                                            <MarkChatRead />
                                        </ListItemIcon>
                                        <ListItemText sx={{fontSize: "0.4rem"}} secondary="List item one" />
                                    </ListItem>
                                </List>
                                <br/>
                                <Box>
                                    <Button variant='contained' sx={{textTransform: "capitalize", fontWeight: 600, color: "#fff", backgroundColor: "black"}} fullWidth>Continue</Button>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{padding: "1.2rem", backgroundColor: "#eee", marginTop: "1rem", borderRadius: "4px"}}>
                            <Button variant='outlined' sx={{textTransform: "capitalize", fontWeight: 600, color: "#000", borderColor: "#000"}} fullWidth>Contact me</Button>
                        </Box>
                    </Box>
                    
                </Grid>
            </Grid>
        </Container>

        <Container maxWidth="xl" sx={{backgroundColor: "#eee", padding: "3rem 0"}}>
            <Typography color="gray">More services by <Link href='' color="#000" fontWeight={600}>Sulaiman19</Link></Typography>
            <br/>
            <Carousel responsive={responsive3}>
            {cards.map(() => (
                <Card sx={{margin: "0.2rem 1rem"}}>
                    <CardMedia component="img" height="160" image={jason} sx={{borderRadius: "3px"}} alt="Image title" />
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
            ))}
            </Carousel>
        </Container>

    </div>
  )
}

export default Gig