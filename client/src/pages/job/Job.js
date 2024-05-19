import { Divider, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

const Job = () => {
  return (
    <Box marginTop="6rem">
        <Container>
            <Typography variant='h6' fontWeight={500}>JavaScript Dropdown List</Typography>
            <Typography variant='body2' sx={{color: "black.light"}} fontWeight={500}>Posted 5 hours ago</Typography>
            <br />
            <Divider />
            <br />
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos ut sapiente at maiores! Dolorem asperiores incidunt aspernatur? Enim fugiat numquam, modi reprehenderit iusto facilis aliquid laudantium placeat pariatur.</Typography>
            <br />
            <Divider />
            <br />
            <Stack>
                <Stack>
                    <Stack>
                        
                    </Stack>
                </Stack>
            </Stack>
            <br />
            <Divider />
            <br />
            <Typography variant='h6'>About the client</Typography>
            <Typography variant='body2' font>United States</Typography>
            <Typography variant='body2'>New York</Typography>
            <Typography variant='body2'>Member since Apr 3, 2020</Typography>
        </Container>
    </Box>
  )
}

export default Job