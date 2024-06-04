import { StarRateRounded } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";

import jason from "../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import Cookies from "js-cookie";

const ManageGigs = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = Cookies.get('token');
  const [active, setActive] = useState('active')

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["manageGigs"],
    queryFn: () => {
      return request
        .get(`/users/${currentUser._id}/gigs`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          return res.data;
        });
    },
  });

  console.log(data);
  return (
    <Box sx={{ padding: "8rem 0" }}>
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
            <Typography variant="h5">Manage Gigs</Typography>
          </Container>
          <br />
          <Container>
            <Stack direction="row">
              <Button>Active</Button>
              <Button>Paused</Button>
            </Stack>
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        variant="body2"
                        sx={{ color: "black.light" }}
                      >
                        Cover
                      </TableCell>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        Title
                      </TableCell>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        RATINGS
                      </TableCell>
                      <TableCell variant="body2" sx={{ color: "black.light" }}>
                        PRICE
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((gig) => {
                      const base64String = btoa(
                        String.fromCharCode(
                          ...new Uint8Array(gig?.coverImage?.img?.data?.data)
                        )
                      );
                      return (
                        <TableRow
                          key={gig._id}
                          component={Link}
                          href={`/users/${currentUser?._id}/gigs/${gig?._id}`}
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
                              <img
                                src={`data:image/jpeg;base64,${base64String}`}
                                style={{height: "6rem", borderRadius: "4px"}}
                                alt=""
                              />
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                              fontWeight={500}
                            >
                              <Typography>
                                {gig?.title}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Typography>{gig.ratingsAverage}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              ${gig?.price}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default ManageGigs;
