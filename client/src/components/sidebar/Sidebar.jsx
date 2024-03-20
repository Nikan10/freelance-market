import {useState} from 'react'
import { useSelector } from 'react-redux';
import { AppBar, Stack, Drawer, Box, IconButton, Toolbar, Typography, Button, InputBase, Badge, Avatar } from '@mui/material';

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'

const Sidebar = (props) => {

  const user = useSelector(state => state.user);
  const { showSidebar, setShowSidebar } = props

  return (
    <Drawer anchor='left' open={showSidebar} onClose={() => setShowSidebar(false)}>
      <Box width="18rem" padding={2}>
        <Stack sx={{marginBottom: "2rem"}} direction="row" alignItems="center" spacing={2}>
          <Avatar src={stormseeker} />
          <Typography variant='body2' fontWeight={600}>Mohammad Sulaiman</Typography>
        </Stack>
        <Stack>
          <Button sx={{textTransform: "capitalize", color: "gray", justifyContent: "flex-start"}}>Home</Button>
          <Button sx={{textTransform: "capitalize", color: "gray", justifyContent: "flex-start"}}>Inbox</Button>
          <Button sx={{textTransform: "capitalize", color: "gray", justifyContent: "flex-start"}}>Dashboard</Button>
          <Button sx={{textTransform: "capitalize", color: "gray", justifyContent: "flex-start"}}>Browse caregories</Button>
          <Button sx={{textTransform: "capitalize", color: "gray", justifyContent: "flex-start"}}>Start Selling</Button>
          <Button sx={{textTransform: "capitalize", color: "gray", justifyContent: "flex-start"}}>Settings</Button>
        </Stack>
      </Box>
    </Drawer>
  )
}

export default Sidebar