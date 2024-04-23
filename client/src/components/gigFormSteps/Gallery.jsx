import React, { useState } from 'react'
import "./gallery.css"
import { Container, Typography, Card, Grid, CardMedia, CardContent, IconButton, Button, Box, TextField, Dialog, DialogContent, Input } from '@mui/material'
import { PhotoOutlined, UploadFileOutlined } from '@mui/icons-material'
import { Stack } from '@mui/system'


const Gallery = ({ onNext }) => {
    const [images, setImages] = useState([])
    const [document, setDocument] = useState(null)

    const handleImageChanges = (e) => {
        const selectedImages = Array.from(e.target.files)
        setImages(selectedImages)
    }

    const returnData = (e) => {
        e.preventDefault()

        onNext({images, document})
    }
  return (
    <Container>
        <Typography variant='h4'>Create a Gig gallery</Typography> <br/>
        <Stack>
          <Typography variant='h6' fontWeight={500}>Project Images</Typography>
          <Typography color='gray' variant='body2'>Upload up to 5 images (.jpeg), upto 6MB each and less than 4,000 pixels, in width or height.</Typography> <br/>
          <div className='drop-file'>
            <div className='drop-file-input-label'>
              <PhotoOutlined sx={{color: "#505050"}} className='drop-file-icon' />
              <Typography sx={{fontWeight: 500, color: "#505050"}} variant='body2'>Drag images here or</Typography>
              <Typography sx={{fontWeight: 500, color: "primary.dark"}} variant='body2'>browse</Typography>
            </div>
            <input accept="image/*" id="upload-images" multiple type='file' />
          </div>
        </Stack>
        <br/> <br/>
        <Stack>
          <Typography variant='h6' fontWeight={500}>Sample Documents (optional)</Typography>
          <Typography color='gray' variant='body2'>add a PDF file that is less than 2MB. Clients will only see the first 3 pages of your file.</Typography> <br/>
          <div className='drop-file'>
            <div className='drop-file-input-label'>
              <PhotoOutlined sx={{color: "#505050"}} className='drop-file-icon' />
              <Typography sx={{fontWeight: 500, color: "#505050"}} variant='body2'>Drag document here or</Typography>
              <Typography sx={{fontWeight: 500, color: "primary.dark"}} variant='body2'>browse</Typography>
            </div>
            <input accept="image/*" id="upload-images" multiple type='file' />
          </div>
        </Stack>
        <br/>
        <Button variant='contained' onClick={returnData} sx={{textTransform: 'capitalize'}}>Save & Continue</Button>
    </Container>
  )
}

export default Gallery