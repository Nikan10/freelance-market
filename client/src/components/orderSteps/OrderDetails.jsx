import { FirstPage, NavigateNext, StarRateRounded } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import jason from "../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const OrderDetails = ({ onNext, setOrderId }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = Cookies.get('token');
  const { gigId } = useParams();
  const navigate = useNavigate();
  let coverImage = "";

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () => {
      return request
        .get(`/users/${currentUser?._id}/gigs/${gigId}`)
        .then((res) => {
          return res.data;
        });
    },
  });

  if (data) {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(data.gig.coverImage.img.data.data))
    );
    coverImage = base64String;
  }

  const handleCreateOrder = async () => {
    const response = await request.post(
      `/users/${data?.gig?.user?._id}/gigs/${gigId}/orders/create`,
      { gigId },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response) {
      console.log(response?.data)
      onNext(response?.data);
    }
    // if (response) {
    //   navigate(`/users/${userId}/orders/${response.data.newOrder._id}`);
    // }
  };

  return (
    <Box>
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
        <Grid spacing={8} container>
          <Grid md={8} item>
            <Box>
              <Card
                sx={{
                  display: "flex",
                  height: "8rem",
                  boxShadow: "none",
                  borderRadius: 0,
                }}
              >
                <CardMedia
                  component="img"
                  image={`data:image/jpeg;base64,${coverImage}`}
                  alt="Image title"
                  sx={{ borderRadius: "6px" }}
                />
                <CardContent sx={{ width: "240%" }}>
                  <Stack direction="row" spacing={4}>
                    <Stack flex={1}>
                      <Typography fontWeight={500}>
                        {data?.gig?.title}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Rating
                          size="small"
                          value={data?.gig?.ratingsAverage}
                          readOnly
                        />
                        <Typography variant="caption" fontWeight={700}>
                          {data?.gig?.ratingsAverage}
                        </Typography>
                      </Stack>
                      <br />
                      <Link>View what included</Link>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        color="black.light"
                      >
                        Quantity {data?.gig?.concepts}
                      </Typography>
                      <Typography variant="body2" fontWeight={500}>
                        ${data?.gig?.price}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
            <br />
            <br />
            {/* <Box>
            <Typography variant="h6" fontWeight={500}>
              Upgrade your order with extras
            </Typography>
            <br />
            <Stack spacing={4}>
              <Stack spacing={1} direction="row">
                <input type="checkbox" />
                <Stack flex={1}>
                  <Typography fontWeight={700}>Include source file</Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="black.light"
                  >
                    The original, layerd design file allows you to make future
                    edits to the design.
                  </Typography>
                </Stack>
                <Typography>$5</Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <input type="checkbox" />
                <Stack flex={1}>
                  <Typography fontWeight={700}>Include source file</Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="black.light"
                  >
                    The original, layerd design file allows you to make future
                    edits to the design.
                  </Typography>
                </Stack>
                <Typography>$5</Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <input type="checkbox" />
                <Stack flex={1}>
                  <Typography fontWeight={700}>Include source file</Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="black.light"
                  >
                    The original, layerd design file allows you to make future
                    edits to the design.
                  </Typography>
                </Stack>
                <Typography>$5</Typography>
              </Stack>
            </Stack>
          </Box> */}
          </Grid>
          <Grid md={4} item>
            <Stack
              spacing={3}
              sx={{
                border: "1px solid",
                borderColor: "light.main",
                padding: "1rem",
                borderRadius: "4px",
              }}
            >
              <Stack spacing={2}>
                <Typography fontWeight={500}>Price summery</Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="black.light">
                    Subtotal
                  </Typography>
                  <Typography color="gray" variant="body2">
                    ${data?.gig?.price}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="black.light">
                    Service fee
                  </Typography>
                  <Typography color="gray" variant="body2">
                    ${(data?.gig?.price / 100) * 10}
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    color="black.light"
                  >
                    Total
                  </Typography>
                  <Typography fontWeight={500} color="gray" variant="body2">
                    ${data?.gig?.price - (data?.gig?.price / 100) * 10}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="black.light">
                    Delivery Time
                  </Typography>
                  <Typography color="gray" variant="body2">
                    1 day
                  </Typography>
                </Stack>
              </Stack>
              <Button
                variant="contained"
                sx={{ color: "#fff", textTransform: "capitalize" }}
                fullWidth
                onClick={handleCreateOrder}
              >
                Continue to Checkout
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default OrderDetails;
