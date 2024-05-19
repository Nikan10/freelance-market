import { StarRateRounded } from '@mui/icons-material'
import { Autocomplete, Avatar, Button, Card, CardContent, CardMedia, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { useState } from 'react'

import jason from '../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import request from '../../utils/request'
import { Link } from 'react-router-dom'

const MyGigs = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const [seller, setSeller] = useState(false);
    // let seller = false
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzMzOTM5ZDkxM2IyMDk0NGUyYzliYyIsImlhdCI6MTcxNTAwODc4OH0.QqpoZl5Elb3ewmZSJLPIxqpaB7G7oFVKNstBf-piuOc";
    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ["sellerOrders"],
      queryFn: () => {
        return request
          .get(
            `/users/${currentUser._id}/manageOrders?seller=${seller}&status=in progress`,
            {
              headers: {
                authorization: token,
              },
            }
          )
          .then((res) => {
            return res.data;
          });
      },
    });
  
    const handleOrdersTypeChange = (event, value) => {
      if (value === "Selling") setSeller(true);
      console.log(seller);
      refetch();
    };
  
    return (
      <Box sx={{ marginTop: "8rem" }}>
        {isLoading ? (
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          "Something went wrong"
        ) : (
          <Box>
            <Container>
              <Stack direction="row" justifyContent="space-between">
                <Box></Box>
                <Autocomplete
                  onChange={handleOrdersTypeChange}
                  size="small"
                  sx={{ width: "11rem", border: 0 }}
                  options={["Buying", "Selling"]}
                  renderInput={(params) => (
                    <TextField
                      placeholder="orders"
                      {...params}
                      sx={{ border: 0 }}
                    />
                  )}
                />
              </Stack>
              <Typography variant="h5">Manage Sales</Typography>
            </Container>
            <br />
            <Container>
              <Stack direction="row">
                <Button>New</Button>
                <Button>Active</Button>
                <Button>Late</Button>
                <Button>Delivered</Button>
                <Button>Completed</Button>
                <Button>Cancelled</Button>
              </Stack>
              <Box>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell variant="body2" sx={{ color: "black.light" }}>
                          BUYER
                        </TableCell>
                        <TableCell variant="body2" sx={{ color: "black.light" }}>
                          GIG
                        </TableCell>
                        <TableCell variant="body2" sx={{ color: "black.light" }}>
                          DUE ON
                        </TableCell>
                        <TableCell variant="body2" sx={{ color: "black.light" }}>
                          TOTAL
                        </TableCell>
                        <TableCell variant="body2" sx={{ color: "black.light" }}>
                          STATUS
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((order) => (
                        <TableRow
                          key={order._id}
                          component={Link}
                          href={`/users/${order?.buyer?._id}/manageOrders/${order?._id}`}
                          sx={{
                            textDecoration: "none",
                            "&:hover": {
                              backgroundColor: "light.main",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <TableCell>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                              fontWeight={500}
                            >
                              <Avatar />
                              <Typography variant="body2" fontWeight={500}>
                                {seller
                                  ? order?.buyer?.name
                                  : order?.seller?.name}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                              fontWeight={500}
                            >
                              <Typography variant="body2">
                                {order?.title}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">Mar 14</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">
                              ${order?.price}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="caption"
                              sx={{
                                textTransform: "uppercase",
                                fontWeight: 500,
                                color: "#fff",
                                backgroundColor: "secondary.main",
                                padding: "1px 8px",
                                borderRadius: "25px",
                              }}
                            >
                              {order?.status}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    );
}

export default MyGigs