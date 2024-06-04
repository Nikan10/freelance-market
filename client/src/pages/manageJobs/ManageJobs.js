import { Autocomplete, Avatar, Button, CircularProgress, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import request from '../../utils/request';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const ManageJobs = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const token = Cookies.get('token');
    

    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ["myJobs"],
      queryFn: () => {
        return request
          .get(`/users/${currentUser._id}/jobs?status=open`, {
            headers: {
              authorization: token,
            },
          })
          .then((res) => {
            return res.data;
          });
      },
    });
  
  console.log(data)
  return (
    <Box padding="6rem 0">
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
            <Typography variant="h5">Manage Jobs</Typography>
          </Container>
          <br />
          <Container>
            <Stack direction="row">
              <Button>Open</Button>
              <Button>closed</Button>
              <Button>Deleted</Button>
            </Stack>
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        TITLE
                      </TableCell>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        PROPOSALS
                      </TableCell>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        DELIVERY
                      </TableCell>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        BUDGET
                      </TableCell>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        START DATE
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data && data.map((job) => (
                      <TableRow
                        key={job._id}
                        component={Link}
                        href={`/users/${job?.buyer?._id}/jobs/${job?._id}/details`}
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
                            <Typography variant="body2" fontWeight={500}>
                              {job?.title}
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
                              {job?.proposals.length}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {job?.deliveryTime}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            ${job?.budget}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                          >
                            {new Date(job?.startDate).toUTCString()}
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
  )
}

export default ManageJobs