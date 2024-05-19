import { LocationOnOutlined, SearchOutlined } from '@mui/icons-material'
import { Autocomplete, Button, Divider, FormControlLabel, InputAdornment, Link, Switch, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

const Jobs = () => {
  return (
    <Box marginTop="8rem">
        <Container>
          <Stack direction="row" spacing={1}>
            <TextField
              size="small"

              placeholder="Search for service ..."
              type="text"
              sx={{
                width: "26rem",
                "& .css-1em6vxu-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  paddingRight: "5px",
                  paddingLeft: "4px",
                },
                "& .css-11snfn0-MuiButtonBase-root-MuiButton-root": {
                  borderRadius: "25px",
                  boxShadow: "none",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      size="small"

                      variant="contained"
                    >
                      <SearchOutlined />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Container>
        <br />
        <Container maxWidth="lg">
          <Divider />
        </Container>
        <br />
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Stack direction="row" spacing={1}>
            <Autocomplete
              size="small"
              sx={{ width: "9rem" }}
              options={["AFG", "IRN", "PAK"]}
              renderInput={(params) => (
                <TextField {...params} label="Logo options" />
              )}
            />
            <Autocomplete
              size="small"
              sx={{ width: "9rem" }}
              options={["AFG", "IRN", "PAK"]}
              renderInput={(params) => (
                <TextField {...params} label="Seller details" />
              )}
            />
            <Autocomplete
              size="small"

              sx={{ width: "9rem" }}
              options={["5", "10", "15", "20", "30", "50", "70", "100"]}
              renderInput={(params) => <TextField {...params} label="budget" />}
            />
            <Autocomplete
              size="small"

              sx={{ width: "9rem" }}
              options={["1", "2", "3", "4", "5", "6", "7"]}
              renderInput={(params) => (
                <TextField {...params} label="Delivery time" />
              )}
            />
          </Stack>

          <FormControlLabel label="Pro srvices" control={<Switch />} />
        </Container>
        <br /> <br />
        <Container>
            <Divider />
            <Box sx={{ padding: " 1.4rem 0 2rem 0"}}>
                <Stack spacing={2}>
                    <Typography variant='body2' sx={{color: "black.light", fontWeight: 400}}>Posted 2 hours ago</Typography>
                    <Link ><Typography variant='h5' sx={{'&:hover': { cursor: "pointer"}}} fontWeight={400}>UI/UX design for web page</Typography></Link>
                    <Stack direction="row" spacing={4}>
                        <Stack direction="row">
                            <Typography variant='body2' sx={{color: "black.light"}}>Seller level - &nbsp;</Typography><Typography variant='body2' sx={{color: "black.light", fontWeight: 500}}>Expert</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography variant='body2' sx={{color: "black.light"}}>Budget - &nbsp;</Typography><Typography variant='body2' sx={{color: "black.light", fontWeight: 500}}>$200</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography variant='body2' sx={{color: "black.light"}}>Days - &nbsp;</Typography><Typography variant='body2' sx={{color: "black.light", fontWeight: 500}}>4</Typography>
                        </Stack>
                    </Stack>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos ut sapiente at maiores! Dolorem asperiores incidunt aspernatur? Enim fugiat numquam, modi reprehenderit iusto facilis aliquid laudantium placeat pariatur.</Typography>
                    <Stack direction="row" spacing={1}>
                        <LocationOnOutlined fontSize="body2" />
                        <Typography variant='body2' sx={{color: "black.light", fontWeight: 400}}>United Kingdom</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Divider />
            <Box sx={{ padding: "1.4rem 0 2rem 0"}}>
                <Stack spacing={2}>
                    <Typography variant='body2' sx={{color: "black.light", fontWeight: 400}}>Posted 2 hours ago</Typography>
                    <Link><Typography variant='h5' sx={{'&:hover': { cursor: "pointer"}}} fontWeight={400}>UI/UX design for web page</Typography></Link>
                    <Stack direction="row" spacing={4}>
                        <Stack direction="row">
                            <Typography variant='body2' sx={{color: "black.light"}}>Seller level - &nbsp;</Typography><Typography variant='body2' sx={{color: "black.light", fontWeight: 500}}>Expert</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography variant='body2' sx={{color: "black.light"}}>Budget - &nbsp;</Typography><Typography variant='body2' sx={{color: "black.light", fontWeight: 500}}>$200</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography variant='body2' sx={{color: "black.light"}}>Days - &nbsp;</Typography><Typography variant='body2' sx={{color: "black.light", fontWeight: 500}}>4</Typography>
                        </Stack>
                    </Stack>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos ut sapiente at maiores! Dolorem asperiores incidunt aspernatur? Enim fugiat numquam, modi reprehenderit iusto facilis aliquid laudantium placeat pariatur.</Typography>
                    <Stack direction="row" spacing={1}>
                        <LocationOnOutlined fontSize="body2" />
                        <Typography variant='body2' sx={{color: "black.light", fontWeight: 400}}>United Kingdom</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    </Box>
  )
}

export default Jobs