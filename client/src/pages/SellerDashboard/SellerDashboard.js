import React, { Profiler } from "react";
import {
  Container,
  Grid,
  Autocomplete,
  Card,
  TableContainer,
  TableHead,
  CardMedia,
  CardContent,
  Link,
  Typography,
  TextField,
  Box,
  Stack,
  Avatar,
  Rating,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  ListItemIcon,
  Table,
  TableRow,
  TableCell,
  TableBody,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import { Face, Man, PlaceRounded, StarRateRounded } from "@mui/icons-material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useSelector } from "react-redux";

import dawid from "../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";

const cards = [1, 2, 3, 4, 5, 6];

const SellerDashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const value = "salam";
  let orders;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzMzOTM5ZDkxM2IyMDk0NGUyYzliYyIsImlhdCI6MTcxNDYzMzAxN30.zryExicO4GfxJXWyO4S4buwkN8eeRIsN8rFTsTZdTgc";
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => {
      return request
        .get(`users/${currentUser._id}/manageOrders?seller=true&status=in progress`, {
          headers: { authorization: token },
        })
        .then((res) => {
          return res.data;
        });
    },
  });
  if (data) orders = data;

  return (
    <div style={{ marginTop: "6rem" }}>
      <Container maxWidth="lg">
        {isLoading ? (
            <Box sx={{height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CircularProgress />
            </Box>
        ) : error ? (
          "Something went wrong"
        ) : (
          <Grid spacing={3} container>
            <Grid lg="4" item>
              <Box>
                <Box sx={{ border: "1px solid", borderColor: "light.main", borderRadius: "4px" }}>
                  <Box sx={{ padding: "1.4rem" }}>
                    <Stack spacing={2} direction="row" alignItems="center">
                      <Avatar
                        src={dawid}
                        sx={{
                          width: "4rem",
                          height: "4rem",
                          marginBottom: "1rem",
                        }}
                      />
                      <Typography
                        fontWeight={500}
                        sx={{ flexGrow: 1, textTransform: "capitalize" }}
                      >
                        {currentUser.name} {currentUser.lastname}
                      </Typography>
                      <Stack direction="row" alignItems="center">
                        <StarRateRounded />
                        <Typography variant="body2" fontWeight={500}>
                          4.9
                        </Typography>
                      </Stack>
                    </Stack>

                    <Box margin="1rem 0">
                      <Divider />
                    </Box>
                    <Stack spacing={2}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          sx={{ flexGrow: 1 }}
                          color="gray"
                        >
                          Response Rate
                        </Typography>
                        <LinearProgress
                          sx={{
                            height: "8px",
                            borderRadius: "25px",
                            width: "8rem",
                          }}
                          variant="determinate"
                          value={92.6}
                        />
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          color="primary"
                        >
                          92.6
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          sx={{ flexGrow: 1 }}
                          color="gray"
                        >
                          Delivery on Time
                        </Typography>
                        <LinearProgress
                          sx={{
                            height: "8px",
                            borderRadius: "25px",
                            width: "8rem",
                          }}
                          variant="determinate"
                          value={88}
                        />
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          color="primary"
                        >
                          88
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          sx={{ flexGrow: 1 }}
                          color="gray"
                        >
                          Order Completion
                        </Typography>
                        <LinearProgress
                          sx={{
                            height: "8px",
                            borderRadius: "25px",
                            width: "8rem",
                          }}
                          variant="determinate"
                          value={75.9}
                        />
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          color="primary"
                        >
                          75.9
                        </Typography>
                      </Stack>
                    </Stack>
                    <Box margin="1rem 0">
                      <Divider />
                    </Box>
                    <Stack spacing={2}>
                      <Stack direction="row">
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          color="gray"
                          sx={{ flexGrow: 1 }}
                        >
                          Earned in June
                        </Typography>
                        <Typography variant="body2">$40</Typography>
                      </Stack>
                      <Stack direction="row">
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          color="gray"
                          sx={{ flexGrow: 1 }}
                        >
                          Response Time
                        </Typography>
                        <Typography variant="body2" color="primary">
                          2 hours
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
                <br />
                <Box
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderColor: "light.main",
                    padding: "1.2rem",
                    borderRadius: "4px",
                  }}
                >
                  <Stack direction="row">
                    <Typography
                      variant="body2"
                      color="gray"
                      sx={{ flexGrow: 1 }}
                    >
                      Inbox
                    </Typography>
                    <Typography variant="body2" color="primary">
                      View All
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid lg={8} item>
              <Box>
                <Box
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    padding: "0.6rem",
                    backgroundColor: "#fff",
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography fontWeight={600} sx={{ flexGrow: 1 }}>
                      Active orders
                    </Typography>
                    <Autocomplete
                      size="small"
                      sx={{ width: "9rem" }}
                      options={["AFG", "IRN", "PAK"]}
                      renderInput={(params) => (
                        <TextField {...params} label="Logo options" />
                      )}
                    />
                  </Stack>
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  {orders.map((order) => (
                    <Stack
                      key={order._id}
                      spacing={3}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        border: "1px solid #eee",
                        borderRadius: "4px",
                        padding: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <img src={dawid} height="48px" alt="" />
                        <Avatar />
                        <Typography
                          variant="body1"
                          fontWeight={500}
                          sx={{ textTransform: "capitalize" }}
                        >
                          {currentUser.isSeller
                            ? order?.buyer?.name
                            : order?.seller?.name}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing="3rem">
                        <Stack alignItems="center" spacing={1}>
                          <Typography
                            color="black.light"
                            variant="body2"
                            fontWeight={500}
                          >
                            Price
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            ${order?.price}
                          </Typography>
                        </Stack>
                        <Stack alignItems="center" spacing={1}>
                          <Typography
                            color="black.light"
                            variant="body2"
                            fontWeight={500}
                          >
                            Due in
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            10h, 44m
                          </Typography>
                        </Stack>
                        <Stack alignItems="center" spacing={1}>
                          <Typography
                            color="black.light"
                            variant="body2"
                            fontWeight={500}
                          >
                            Status
                          </Typography>
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
                        </Stack>
                      </Stack>
                      <Button
                        href={`/users/${currentUser._id}/manageOrders/${order._id}`}
                        variant="body2"
                        sx={{
                          color: "primary.main",
                          fontWeight: 500,
                          textDecoration: "none",
                          cursor: "pointer",
                          "&:hover": { color: "primary.dark" },
                        }}
                      >
                        View
                      </Button>
                    </Stack>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default SellerDashboard;
