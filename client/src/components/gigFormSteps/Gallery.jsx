import React, { useState } from 'react'
import "./gallery.css"
import {Typography, Button, Box, TextField, Dialog, DialogContent, Input } from '@mui/material'
import { PhotoOutlined } from '@mui/icons-material'
import { Stack } from '@mui/system'


const Gallery = ({ onNext, onPrev }) => {
    const [coverImage, setCoverImage] = useState(null)
    const [images, setImages] = useState([])
    

    const handleCoverImageChanges = (e) => {
      setCoverImage(e.target.files[0])
    }

    const handleImageChanges = (e) => {
      setImages(Array.from(e.target.files))
    }
    
    const returnData = (e) => {
        e.preventDefault()
        if(!images || !coverImage) return
        onNext({images, coverImage})
        window.scrollTo(0, 0);
    }
  return (
    <Box>
        <Typography variant='h4'>Create a Gig gallery</Typography> <br/>
        <Stack>
          <Typography variant='h6' fontWeight={500} gutterBottom>Gig Cover Photo</Typography>
          <Typography color='gray' variant='body2'>Upload cover image (.jpeg), upto 2MB and less than 4,000 pixels, in width or height.</Typography> <br/>
          <div className='drop-file'>
            <div className='drop-file-input-label'>
              <PhotoOutlined sx={{color: "#505050"}} className='drop-file-icon' />
              <Typography sx={{fontWeight: 500, color: "#505050"}} variant='body2'>Drag image here or</Typography>
              <Typography sx={{fontWeight: 500, color: "primary.dark"}} variant='body2'>browse</Typography>
            </div>
            <input accept="image" id="upload-images" onChange={handleCoverImageChanges} type='file' />
          </div>
        </Stack>
        <br/> <br/>
        <Stack>
          <Typography variant='h6' fontWeight={500} gutterBottom>Gig Images</Typography>
          <Typography color='gray' variant='body2'>add a PDF file that is less than 2MB. Clients will only see the first 3 pages of your file.</Typography> <br/>
          <div className='drop-file'>
            <div className='drop-file-input-label'>
              <PhotoOutlined sx={{color: "#505050"}} className='drop-file-icon' />
              <Typography sx={{fontWeight: 500, color: "#505050"}} variant='body2'>Drag images here or</Typography>
              <Typography sx={{fontWeight: 500, color: "primary.dark"}} variant='body2'>browse</Typography>
            </div>
            <input accept="image/*" id="upload-images" onChange={handleImageChanges} multiple type='file' />
          </div>
        </Stack>
        <br/> <br/>
        <Stack direction="row" justifyContent="space-between">
        <Button variant='outlined' onClick={onPrev} sx={{textTransform: 'capitalize'}}>Back</Button>
        <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
      </Stack>
    </Box>
  )
}

export default Gallery