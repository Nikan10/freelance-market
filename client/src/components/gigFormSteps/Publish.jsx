import React, { useState } from 'react'

import { Container, Typography, TextField, Link, Button, Dialog } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { LoadingButton } from '@mui/lab'

const Publish = ({ onNext, onPrev }) => {
  const [projectsNumber, setProjectsNumber] = useState(null)
  const [step, setStep] = useState(1)

  const returnData = (e) => {
    e.preventDefault()
    if(!projectsNumber) return
    onNext({ projectsNumber })
    setStep(step + 1)
  }
  return (
    <Box>
        <Typography variant='h4'>Finalize</Typography> <br/>
        <Stack>
          <Typography variant='h6' fontWeight={500}>Maximum number of simultaneous projects</Typography>
          <Typography color='black.main' variant='body2'>How many projects can you handle at one time and still deliver great results.</Typography> <br/>
          <TextField size="small" type='number'  placeholder='3' name='projectsNumber' sx={{marginBottom: "1.2rem", width: "6rem"}} onChange={e => setProjectsNumber(e.target.value)} />
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
            <Typography color='black.main' variant='body2'>I unders tand and agree to the <Link>Maher Terms of Services</Link>, including <Link>Privacy Policy</Link>.</Typography> <br/>
          </Stack>
        </Stack>
        <br/> <br/>
      
      <Stack direction="row" justifyContent="space-between">
      <Button variant='outlined' onClick={onPrev} sx={{textTransform: 'capitalize'}}>Back</Button>
        {step === 1 && <Stack direction="row" spacing={2}>
          <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
          <Button disabled variant='contained' sx={{textTransform: 'capitalize'}} type='submit'>Submit</Button>
        </Stack>}
        {step === 2 && <Stack direction="row" spacing={2}>
          <Button disabled variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
          <LoadingButton variant='contained' sx={{textTransform: 'capitalize'}} type='submit'>Submit</LoadingButton>
        </Stack>}
      </Stack>
    </Box>
  )
}

export default Publish