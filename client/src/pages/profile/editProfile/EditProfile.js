import { Divider, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

const EditProfile = () => {
  return (
    <Container>
        <Box sx={{border: "1px solid #e0e0e0", borderRadius: "4px", backgroundColor: "#fff"}}>
                            <Box sx={{padding: "1.4rem"}}>
                                <Typography variant='h5' fontWeight={600}>Web Developer</Typography>
                                <br/>
                                <Stack spacing={2}>
                                    <Typography fontWeight={600} sx={{flexGrow: 1}}>Description</Typography>
                                    <Typography variant='body2' color="gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium itaque sed quo soluta vero asperiores ullam placeat sapiente deleniti ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem dicta quas quidem quis.</Typography>
                                </Stack>
                        
                                <Box margin="1rem 0">
                                    <Divider />
                                </Box>

                                <Stack spacing={2}>
                                    <Typography fontWeight={600} sx={{flexGrow: 1}}>Language</Typography>
                                    <Stack direction="row" spacing={1}>
                                      <Typography variant='body2'>English</Typography>
                                      <Typography variant='body2' color="gray">Coversational</Typography>
                                    </Stack>
                                    
                                    <Stack direction="row" spacing={1}>
                                      <Typography variant='body2'>Pashto</Typography>
                                      <Typography variant='body2' color="gray">Fluent</Typography>
                                    </Stack>
                                </Stack>
                        
                                <Box margin="1rem 0">
                                    <Divider />
                                </Box>

                                <Stack spacing={2}>
                                    <Typography fontWeight={600} sx={{flexGrow: 1}}>Skills</Typography>
                                    <Stack direction="row" spacing={1}>
                                      <Typography variant='body2' sx={{borderRadius: "25px", border: "1px solid lightgray", color: "gray", padding: "4px 10px"}}>UI Design</Typography>
                                      <Typography variant='body2' sx={{borderRadius: "25px", border: "1px solid lightgray", color: "gray", padding: "4px 10px"}}>Web Design</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
    </Container>
  )
}

export default EditProfile