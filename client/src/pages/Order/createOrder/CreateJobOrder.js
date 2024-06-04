import React, { useState } from "react";

import OrderDetails from "../../../components/orderSteps/OrderDetails";
import { Box, Container, Stack } from "@mui/system";
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import request from "../../../utils/request";
import { useQuery } from "@tanstack/react-query";
import Payments from "../../../components/orderSteps/Payments";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const CreateJobOrder = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = Cookies.get("token");
  const { jobId } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["job"],
    queryFn: () => {
      return request
        .get(`/users/${currentUser?._id}/jobs/${jobId}`)
        .then((res) => {
          return res.data;
        });
    },
  });

  // const handleCreateOrder = async () => {
  //   const response = await request.post(
  //     `/users/${data?.gig?.user?._id}/gigs/${gigId}/orders/create`,
  //     { gigId },
  //     {
  //       headers: {
  //         authorization: token,
  //       },
  //     }
  //   );

  // };

  return (
    <Box padding="6rem 0">
      <Container>
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
                  <CardContent sx={{ width: "240%" }}>
                    <Stack direction="row" spacing={4}>
                      <Stack flex={1}>
                        <Typography fontWeight={500}>
                          {data?.title}
                        </Typography>
                        
                        <br />
                        <Link>View what included</Link>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          color="black.light"
                        >
                          {/* Quantity {data?.gig?.concepts} */}
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          ${data?.budget}
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
                      ${data?.budget}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="black.light">
                      Service fee
                    </Typography>
                    <Typography color="gray" variant="body2">
                      ${(data?.budget / 100) * 10}
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
                      ${data?.budget - (data?.budget / 100) * 10}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="black.light">
                      Delivery Time
                    </Typography>
                    <Typography color="gray" variant="body2">
                      {data?.deliveryTime} day(s)
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  sx={{ color: "#fff", textTransform: "capitalize" }}
                  fullWidth
                  // onClick={handleCreateOrder}
                >
                  Continue to Checkout
                </Button>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CreateJobOrder;
