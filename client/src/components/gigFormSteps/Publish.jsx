import React, { useState } from 'react'

import { Container, Typography, TextField, Link } from '@mui/material'
import { Stack } from '@mui/system'

const Publish = ({ formData, setFormData, onPrev }) => {
  const [projectsNumber, setProjectsNumber] = useState(null)

  const handleChange = (e) => {
    setProjectsNumber(e.target.value)
    setFormData({ ...formData, projectsNumber})
  }
  console.log(formData)
  return (
    <Container>
        <Typography variant='h4'>Finalize</Typography> <br/>
        <Stack>
          <Typography variant='h6' fontWeight={500}>Maximum number of simultaneous projects</Typography>
          <Typography color='black.main' variant='body2'>How many projects can you handle at one time and still deliver great results.</Typography> <br/>
          <TextField size="small" type='number'  placeholder='3' name='projectsNumber' sx={{marginBottom: "1.2rem", width: "6rem"}} onChange={handleChange} />
        </Stack>
        <br/>
        <Stack>
          <Typography variant='h6' fontWeight={500}>Copyright notice</Typography>
          <Typography color='black.main' fontWeight={400} maxWidth="48rem" variant='body2'>By submiting your project, you declare that you either own or have rights to the material posted and that posting these materials does not infringe on any third party's rights. You also acknowledge that you understand your project will be reviewed end evaluated by Upwork to ensure it meets Upwork's requirements.</Typography> <br/>
        </Stack>
        <Stack>
          <Typography variant='h6' fontWeight={500}>Term of Services</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <input type='checkbox' style={{width: "20px"}} />
            <Typography color='black.main' variant='body2'>I understand and agree to the <Link>Maher Terms of Services</Link>, including <Link>Privacy Policy</Link>.</Typography> <br/>
          </Stack>
        </Stack>
            
    </Container>
  )
}

export default Publish