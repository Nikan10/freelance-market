import { useState } from 'react'
import { MailOutlined, MenuOutlined, MessageOutlined, NotificationAddOutlined, NotificationImportantOutlined, NotificationsActiveOutlined, NotificationsOutlined } from '@mui/icons-material'
import { AppBar, Box, IconButton, Stack, Toolbar, Button, makeStyles, Avatar, Menu, MenuItem, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemAvatar } from '@mui/material'
import maherBrand from '../../assets/images/brandings/maher new2.png'

import { useSelector } from 'react-redux'

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'

const Header = (props) => {
  const isLoggedIn = useSelector( state => state.user.isLoggedIn )
  const {setShowSignin, setShowSignup, setShowSidebar} = props

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

  return (
    <AppBar sx={{boxShadow: "none", borderBottom: "1px solid #eee"}}>
        <Toolbar sx={{backgroundColor: "white"}}>
            <Stack sx={{flexGrow: 1, alignItems: "center", height: "100%"}} spacing={1} direction="row">
              <IconButton onClick={() => setShowSidebar(true)}>
                  <MenuOutlined />
              </IconButton>
              <img src={maherBrand} height="30" alt=''></img>
            </Stack>
            {isLoggedIn ?
              <Stack direction="row" spacing={1} sx={{display: {xs: "none", md: "flex"}}}>
                <Button 
                  id='notifications-button' 
                  sx={{textTransform: "capitalize", color: "gray"}}
                  onClick={handleNotificationsClick}
                  aria-controls={ notificationsOpen ? 'notifications-menu' : undefined }
                  aria-haspopup='true'
                  aria-expanded={ notificationsOpen ? 'true' : undefined}
                >Notifications</Button>
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
                >Messages</Button>
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

                <Button sx={{textTransform: "capitalize", color: "gray"}}>Help</Button>
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
                    
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem", color: "gray"}}>My profile</MenuItem>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem", color: "gray"}}>My profile</MenuItem>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem", color: "gray"}}>My profile</MenuItem>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem", color: "gray"}}>My profile</MenuItem>
                    <MenuItem onClick={handleAvatarClose} sx={{width: "12rem", fontSize: "0.8rem", color: "gray"}}>My profile</MenuItem>
                  </Menu>
              </Stack> :
              <Stack direction="row" spacing={1} sx={{display: {xs: "none", md: "flex"}}}>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/">Home</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/services">Services</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/navigation_page">Navigation</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/gig">Gig</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/seller_dashboard">Dashboard</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/become_seller">Become a Seller</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} onClick={setShowSignin}>Sign in</Button>
                <Button sx={{textTransform: "capitalize"}} variant='outlined' onClick={setShowSignup}>Join</Button>
              </Stack>
            }
            
            
        </Toolbar>
    </AppBar>
  )
}

export default Header