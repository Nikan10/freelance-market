import React from 'react'
import { Stack, Container, Link } from '@mui/material'

const Categories = () => {
  return (
    <Container maxWidth="xl" sx={{ height: "2rem", marginTop: "4rem", borderBottom: "1px solid lightgray", backgroundColor: "#fff", color: "gray", display: "flex", alignItems: "center"}}>
        <Stack spacing={2} direction="row">
          <Link href="#" color="gray" underline="none">Grphic design</Link>
          <Link href="#" color="gray" underline="none">Grphic design</Link>
          <Link href="#" color="gray" underline="none">Grphic design</Link>
          <Link href="#" color="gray" underline="none">Grphic design</Link>
          <Link href="#" color="gray" underline="none">Grphic design</Link>
        </Stack>
      </Container>
  )
}

export default Categories