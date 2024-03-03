import React from 'react'
import { Container, Stack, IconButton, Link, Breadcrumbs } from '@mui/material'
import { HomeOutlined } from '@mui/icons-material'

const BreadCrumb = () => {
  return (
    <Container>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <IconButton size='small'>
            <HomeOutlined sx={{color: "gray", fontSize: "1.2rem"}} />
          </IconButton>
          <Breadcrumbs>
            <Link href="#" color="gray" underline="hover">Graphic Design</Link>
            <Link href="#" color="gray" underline="hover">Logo Design</Link>
          </Breadcrumbs>
        </Stack>
      </Container>
  )
}

export default BreadCrumb