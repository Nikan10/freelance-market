import { useState } from 'react'
import { Help, HelpCenterOutlined, HelpOutline, MailOutlined, MenuOutlined, MessageOutlined, NotificationAddOutlined, NotificationImportantOutlined, NotificationsActiveOutlined, NotificationsOutlined, SearchOutlined } from '@mui/icons-material'
import { AppBar, Box, IconButton, Stack, Toolbar, Button, Avatar, Menu, MenuItem, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, TextField, Link } from '@mui/material'
import maherBrand from '../../assets/images/brandings/maher6.png'

import { logout } from '../../state/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'
import request from '../../utils/request'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system'

const Header = (props) => {
  const isLoggedIn = useSelector( state => state.user.isLoggedIn )
  const currentUser = useSelector( state => state.user.currentUser )
  const {setShowSignin, setShowSidebar} = props

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [messagesAnchorEl, setMessagesAnchorEl] = useState(null);
  const [NotificationsAnchorEl, setNotificationsAnchorEl] = useState(null);

  const avatarOpen = Boolean(avatarAnchorEl);
  const massagesOpen = Boolean(messagesAnchorEl);
  const notificationsOpen = Boolean(NotificationsAnchorEl);

  const handleAvatarClick = (event) => {
    setAvatarAnchorEl(event.target);
  }
  const handleMessagesClick = (event) => {
    setMessagesAnchorEl(event.target);
  }
  const handleNotificationsClick = (event) => {
    setNotificationsAnchorEl(event.target);
  }

  const handleAvatarClose = () => {
    setAvatarAnchorEl(null);
  }
  const handleMessagesClose = () => {
    setMessagesAnchorEl(null);
  }
  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  }

  const logoutUser = async () => {
    try {
      await request.post('/logout')
      dispatch(logout());
      localStorage.removeItem('currentUser')
      navigate("/navigationPage")
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
    <AppBar sx={{boxShadow: "none", borderBottom: "1px solid #eee", backgroundColor: "#fff"}}>
      <Container maxWidth="xl">
      {isLoggedIn ?
        <Toolbar>
            <Stack sx={{flexGrow: 1, alignItems: "center", height: "100%"}} spacing={1} direction="row">
              {/* <IconButton onClick={() => setShowSidebar(true)}>
                  <MenuOutlined />
              </IconButton> */}
              <Link href="/"><img src={maherBrand} style={{marginRight: "1rem"}} height="30" alt='' /></Link>
              <Button sx={{textTransform: "capitalize", color: "black.main", marginLeft: "8rem"}} href="/sellerDashboard">Dashboard</Button>
              <Button sx={{textTransform: "capitalize", color: "black.main"}} href={`users/${currentUser._id}/manageOrders`}>Orders</Button>
              <Button sx={{textTransform: "capitalize", color: "black.main"}} href="/myGigs">Gigs</Button>
              <Button sx={{textTransform: "capitalize", color: "black.main"}} href="/jobs">Jobs</Button>
              <Button sx={{textTransform: "capitalize", color: "black.main"}} href="/earnings">Earnings</Button>
              <Button sx={{textTransform: "capitalize", color: "black.main"}} href="/more">More</Button>
            </Stack>
            
              <Stack direction="row" spacing={1} sx={{display: {xs: "none", md: "flex"}}}>
                <Button 
                  id='notifications-button' 
                  sx={{textTransform: "capitalize", color: "gray"}}
                  onClick={handleNotificationsClick}
                  aria-controls={ notificationsOpen ? 'notifications-menu' : undefined }
                  aria-haspopup='true'
                  aria-expanded={ notificationsOpen ? 'true' : undefined}
                ><NotificationsOutlined /></Button>
                  <Menu id="notifications-menu" anchorOrigin={{vertical: "bottom", horizontal: "right"}} transformOrigin={{vertical: "top", horizontal: "right"}} anchorEl={NotificationsAnchorEl} open={notificationsOpen} MenuListProps={{'aria-labelledby': 'notifications-button'}} onClose={handleNotificationsClose}>
                    <Stack sx={{padding: "10px", paddingTop: "6px", color: "#525252", alignItems: "center"}} direction="row" spacing={1}>
                      <NotificationsOutlined fontSize='body2' />
                      <Typography variant='body2'>Notifications</Typography>
                    </Stack>
                    <Stack spacing={0.2} sx={{backgroundColor: "#eee", width: "24rem", height: "18rem", borderTop: "1px solid lightgray"}}>
                      <MenuItem onClick={handleNotificationsClose} sx={{fontSize: "0.8rem", color: "gray", backgroundColor: "#f3fcfa", padding: "0.3rem"}}>
                        <List>
                          <ListItem>
                            <ListItemIcon><ListItemAvatar><Avatar><NotificationsOutlined /></Avatar></ListItemAvatar></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}} primary="Your seller profile was not approved" secondaryTypographyProps={{fontSize: "0.7rem"}} secondary="1 week" />
                          </ListItem>
                        </List>
                      </MenuItem>
                      <MenuItem onClick={handleNotificationsClose} sx={{fontSize: "0.8rem", color: "gray", backgroundColor: "#f3fcfa", padding: "0.3rem"}}>
                        <List>
                          <ListItem>
                            <ListItemIcon><ListItemAvatar><Avatar><NotificationsOutlined /></Avatar></ListItemAvatar></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}} primary="Your seller profile was not approved" secondaryTypographyProps={{fontSize: "0.7rem"}} secondary="1 week" />
                          </ListItem>
                        </List>
                      </MenuItem>
                      <MenuItem onClick={handleNotificationsClose} sx={{fontSize: "0.8rem", color: "gray", backgroundColor: "#f3fcfa", padding: "0.3rem"}}>
                        <List>
                          <ListItem>
                            <ListItemIcon><ListItemAvatar><Avatar><NotificationsOutlined /></Avatar></ListItemAvatar></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}} primary="Your seller profile was not approved" secondaryTypographyProps={{fontSize: "0.7rem"}} secondary="1 week" />
                          </ListItem>
                        </List>
                      </MenuItem>
                    </Stack>
                  </Menu>
                <Button 
                  id="messages-button"
                  sx={{textTransform: "capitalize", color: "gray"}}
                  onClick={handleMessagesClick}
                  aria-controls={ massagesOpen ? 'notifications-menu' : undefined }
                  aria-haspopup='true'
                  aria-expanded={ massagesOpen ? 'true' : undefined}
                ><MailOutlined /></Button>
                  <Menu id="messages-menu" anchorOrigin={{vertical: "bottom", horizontal: "right"}} transformOrigin={{vertical: "top", horizontal: "right"}} anchorEl={messagesAnchorEl} open={massagesOpen} MenuListProps={{'aria-labelledby': 'notifications-button'}} onClose={handleMessagesClose}>
                    <Stack sx={{padding: "10px", paddingTop: "6px", color: "#525252", alignItems: "center"}} direction="row" spacing={1}>
                      <MailOutlined fontSize='body2' />
                      <Typography variant='body2'>Messages</Typography>
                    </Stack>
                    <Stack spacing={0.2} sx={{backgroundColor: "#eee", width: "24rem", height: "18rem", borderTop: "1px solid lightgray"}}>
                      <MenuItem onClick={handleMessagesClose} sx={{fontSize: "0.8rem", color: "gray", backgroundColor: "#f3fcfa", padding: "0.3rem"}}>
                        <List>
                          <ListItem>
                            <ListItemIcon><ListItemAvatar ><Avatar sx={{backgroundColor: "#99ffe9"}}><MailOutlined color='primary' /></Avatar></ListItemAvatar></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}} primary="Your seller profile was not approved" secondaryTypographyProps={{fontSize: "0.7rem"}} secondary="1 week" />
                          </ListItem>
                        </List>
                      </MenuItem>
                      <MenuItem onClick={handleMessagesClose} sx={{fontSize: "0.8rem", color: "gray", backgroundColor: "#f3fcfa", padding: "0.3rem"}}>
                        <List>
                          <ListItem>
                            <ListItemIcon><ListItemAvatar><Avatar sx={{backgroundColor: "#99ffe9"}}><MailOutlined color='primary' /></Avatar></ListItemAvatar></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}} primary="Your seller profile was not approved" secondaryTypographyProps={{fontSize: "0.7rem"}} secondary="1 week" />
                          </ListItem>
                        </List>
                      </MenuItem>
                    </Stack>
                  </Menu>

                <Button sx={{textTransform: "capitalize", color: "gray"}}><HelpOutline /></Button>
                <Avatar 
                  sx={{cursor: "pointer"}} 
                  src={jason}
                  id="user-button"
                  onClick={handleAvatarClick}
                  aria-controls={ avatarOpen ? 'user-menu' : undefined }
                  aria-haspopup='true'
                  aria-expanded={ avatarOpen ? 'true' : undefined}
                />
                  <Menu id="user-menu" anchorEl={avatarAnchorEl} open={avatarOpen} MenuListProps={{'aria-labelledby': 'user-button'}} onClose={handleAvatarClose}>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem"}}><Link href="/createGig" sx={{textDecoration: "none", color: "black.main", width: "100%"}}>Create gig</Link></MenuItem>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem"}}><Link href="/myProfile" sx={{textDecoration: "none", color: "black.main", width: "100%"}}>My profile</Link></MenuItem>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem"}}><Link href="/gigs" sx={{textDecoration: "none", color: "black.main", width: "100%"}}>Gigs</Link></MenuItem>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem"}}><Link sx={{textDecoration: "none", width: "100%"}} onClick={logoutUser}>Log out</Link></MenuItem>
                  </Menu>
              </Stack>
              
        </Toolbar>
        :
        <Toolbar>
            <Stack direction="row" sx={{flex: 1}}>
              <Link to="/"><img src={maherBrand} style={{marginRight: "1rem"}} height="30" alt='' /></Link>
            </Stack>
            <Stack direction="row" spacing={1} sx={{display: {xs: "none", md: "flex"}}}>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/">Home</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/services">Services</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/navigationPage">Navigation</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/terms_of_services">Term of Services</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} onClick={setShowSignin}>Sign in</Button>
                <Button sx={{textTransform: "capitalize"}} variant='outlined' href='/join'>Join</Button>
            </Stack>
        </Toolbar>
      }
      </Container>
    </AppBar>
  )
}

export default Header