import { MenuOutlined } from '@mui/icons-material'
import { AppBar, Box, IconButton, Stack, Toolbar, Button, makeStyles } from '@mui/material'
import maherBrand from '../../assets/images/brandings/maher new2.png'

const Header = (props) => {
  const {setShowSignin, setShowSignup} = props
  return (
    <AppBar sx={{boxShadow: "none", borderBottom: "1px solid lightgray", zIndex: "90"}}>
        <Toolbar sx={{backgroundColor: "white"}}>
            <Stack sx={{flexGrow: 1, alignItems: "center", height: "100%"}} spacing={2} direction="row">
              <IconButton>
                  <MenuOutlined />
              </IconButton>
              <img src={maherBrand} height="30" alt=''></img>
            </Stack>
            <Stack direction="row" spacing={1} sx={{display: {xs: "none", md: "flex"}}}>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/">Home</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/services">Services</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/navigation_page">Navigation</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/gig">Gig</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} href="/become_seller">Become a Seller</Button>
                <Button sx={{textTransform: "capitalize", color: "gray"}} onClick={setShowSignin}>Sign in</Button>
                <Button sx={{textTransform: "capitalize"}} variant='outlined' onClick={setShowSignup}>Join</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Header