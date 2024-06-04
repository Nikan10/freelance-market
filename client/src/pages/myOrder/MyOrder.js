import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  Grid,
  IconButton,
  Rating,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  CloseOutlined,
  DeliveryDining,
  Done,
  ExitToApp,
  LocationCityOutlined,
  MapOutlined,
  PlaceOutlined,
  PlaceRounded,
  SearchOutlined,
  StarRateRounded,
} from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/system";
import React, { Profiler, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import request from "../../utils/request";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { LoadingButton } from "@mui/lab";
import Cookies from "js-cookie";

const MyOrder = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = Cookies.get('token');
  const { orderId } = useParams();
  const [submitDelivery, setSubmitDelivery] = useState(false);
  let isSeller = false;
  let coverImage = "";

  const { isLoading, error, data } = useQuery({
    queryKey: ["order"],
    queryFn: () => {
      return request
        .get(`/users/${currentUser._id}/manageOrders/${orderId}`, {
          headers: { authorization: token },
        })
        .then((res) => {
          return res.data;
        });
    },
  });

  if (data) {
    const base64String = btoa(
      String.fromCharCode(
        ...new Uint8Array(data.order.gig.images[0].img.data.data)
      )
    );
    coverImage = base64String;
  }

  if(currentUser?._id === data?.order?.seller?._id) isSeller = true;

  return (
    <Box marginTop="4rem">
      {isLoading ? (
        <Box sx={{height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <CircularProgress />
        </Box>
      ) : error ? (
        "something went wrong"
      ) : (
        <Box>
          <Toolbar
            sx={{
              borderBottom: "1px solid",
              borderBottomColor: "light.main",
              justifyContent: "center",
            }}
          >
            <Container>
              <Stack
                maxWidth="lg"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={5}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Done
                      sx={{
                        padding: "0.2rem",
                        color: "#fff",
                        backgroundColor: "primary.main",
                        borderRadius: "25px",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Buyer submitted <br /> information
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <PlaceOutlined
                      sx={{
                        padding: "0.2rem",
                        color: "#fff",
                        backgroundColor: "secondary.main",
                        borderRadius: "25px",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "secondary.main",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Order in progress <br /> deliver soon
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setSubmitDelivery(true)}
                  sx={{ color: "#fff", textTransform: "capitalize" }}
                >
                  Deliver Order
                </Button>
              </Stack>
            </Container>
          </Toolbar>
          <Container>
            <Dialog
              maxWidth="md"
              open={submitDelivery}
              onClose={() => setSubmitDelivery(false)}
            >
              <Stack padding="1rem" width="34rem">
                <Stack direction="row" alignItems="center">
                  <Typography fontWeight={400} flex={1} gutterBottom>
                    Deliver completed work
                  </Typography>
                  <IconButton>
                    <CloseOutlined
                      sx={{ color: "black.light" }}
                      fontSize="0.6rem"
                      justifyContent="center"
                      onClick={() => setSubmitDelivery(false)}
                    />
                  </IconButton>
                </Stack>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    width: "fit-content",
                    margin: "1rem 0",
                  }}
                >
                  Upload work
                </Button>
                <Typography variant="body2" sx={{ color: "black.light" }}>
                  Max size 1GB
                </Typography>
                <TextField
                  type="text"
                  sx={{ backgroundColor: "#fff", margin: "1rem 0" }}
                  multiline
                  rows={5}
                  placeholder="Type your message here ..."
                  fullWidth
                />
                <Typography variant="body2" sx={{ color: "black.light" }}>
                  0 / 2000 Charecters Max
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Box></Box>
                  <LoadingButton
                    variant="contained"
                    size="small"
                    sx={{
                      color: "#fff",
                      marginTop: "1rem",
                      width: "fit-content",
                      textTransform: "capitalize",
                    }}
                  >
                    Deliver work
                  </LoadingButton>
                </Stack>
              </Stack>
            </Dialog>

            <Grid spacing={8} container>
              <Grid md={8} item>
                {!isSeller && (<Card
                  sx={{
                    borderLeft: "5px solid",
                    borderLeftColor: "primary.main",
                  }}
                >
                  <CardContent sx={{ paddingLeft: "3rem" }}>
                    <Typography variant="h6" fontWeight={400} gutterBottom>
                      Your order is now in the works
                    </Typography>
                    <Typography
                      variant="body2"
                      color="black.light"
                      gutterBottom
                    >
                      We notified <b>{data?.order?.buyer?.name}</b> about your
                      order
                    </Typography>
                    <Typography variant="body2" color="black.light">
                      You should recieve your delivery by{" "}
                      <b>22 Oct, 12:30 am</b>
                    </Typography>
                  </CardContent>
                </Card>)}
                <br />
                <br />
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "light.main",
                    backgroundColor: "light.light",
                    padding: "1rem",
                    borderRadius: "4px",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{ margin: "0.6rem 0" }}
                  >
                    Use a quick response
                  </Typography>
                  <TextField
                    type="text"
                    sx={{ backgroundColor: "#fff" }}
                    multiline
                    rows={3}
                    placeholder="Type your message here ..."
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid md={4} item>
                <Stack
                  spacing={3}
                  sx={{
                    border: "1px solid",
                    borderColor: "light.main",
                    padding: "1rem",
                    paddingTop: "1.6rem",
                    borderRadius: "4px",
                  }}
                >
                  <Typography fontWeight={500}>Order details</Typography>
                  <Stack spacing={2}>
                    <Card
                      sx={{
                        display: "flex",
                        height: "5rem",
                        boxShadow: "none",
                        borderRadius: 0,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={`data:image/jpeg;base64,${coverImage}`}
                        alt="Image title"
                        sx={{ borderRadius: "6px", width: "50%" }}
                      />
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "0.4rem 0.8rem",
                        }}
                      >
                        <Stack>
                          <Typography
                            variant="body2"
                            fontWeight={400}
                            sx={{
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              width: "10rem",
                              height: "6rem",
                            }}
                            gutterBottom
                          >
                            {data?.order?.gig?.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              textTransform: "uppercase",
                              fontWeight: 500,
                              fontSize: "0.6rem",
                              color: "#fff",
                              backgroundColor: "secondary.main",
                              padding: "1px 8px",
                              borderRadius: "25px",
                              width: "fit-content",
                            }}
                          >
                            {data?.order?.status}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                    <br />
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="black.light">
                          Ordered from
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          $34
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="black.light">
                          Delivery date
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          $12
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="black.light">
                          Total price
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          $12
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="black.light">
                          Order number
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          $12
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack></Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default MyOrder;
