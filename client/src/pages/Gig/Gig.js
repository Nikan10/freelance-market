import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  TableContainer,
  TableHead,
  CardMedia,
  CardContent,
  Link,
  Typography,
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
} from "@mui/material";
import Categories from "../../components/categories/Categories";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import Cookies from "js-cookie";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import jason from "../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg";

import {
  Circle,
  Cookie,
  Done,
  MarkChatRead,
  Star,
  StarRateRounded,
  ThumbDownOutlined,
  ThumbUpOutlined,
  TimerOffOutlined,
  TimerOutlined,
} from "@mui/icons-material";
import dawid from "../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersStart, fetchOrdersSuccess } from "../../state/orderSlice";

const cards = [1, 2, 3, 4, 5, 6];
const object = { name: "jan", latname: "khan" };

const Gig = () => {
  const [active, setActive] = useState(0);
  const userId = useSelector((state) => state?.user?.currentUser?._id);
  const token = Cookies.get('token')
  const { gigId, id } = useParams();
  
  let slideShowImages = []

  const navigate = useNavigate();
  
  const handleSlideChange = (state) => {
    setActive(state)
  }
  
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

  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const responsive3 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const gig = useQuery({
    queryKey: ["gig"],
    queryFn: () => {
      return request
        .get(
          `/users/${id}/gigs/${gigId}`,
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

  const user = useQuery({
    queryKey: ["user", gig.data],
    queryFn: () => {
      return request
        .get(
          `users/${gig?.data?.user?._id}`,
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
    enabled: !!gig.data
  });

  let userPhoto = '';
  if(user.data) {
    userPhoto = btoa(
      String.fromCharCode(
        ...new Uint8Array(user?.data?.profile?.photo?.img.data.data)
      )
    );
  }

  const myGigs = useQuery({
    queryKey: ["myGigs"],
    queryFn: () => {
      return request
        .get(
          `/users/${id}/gigs`,
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
  
  const handleGotoOrder = () => {
    navigate(`/gigs/${gigId}/orders/create`);
  };
  
  if(gig.data) {
    slideShowImages.push(...[gig?.data?.coverImage, ...gig?.data?.images])
  }

  return (
    <Box className="gig" marginTop="8rem">
      <Container maxWidth="lg">
        <Grid columnSpacing={10} container>
          <Grid md="8" item>
            {gig?.isLoading ? (
              "loading"
            ) : gig?.error ? (
              "Something went wrong"
            ) : (
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  {gig?.data?.title}
                </Typography>
                <br />
                <Stack direction="row" spacing={2}>
                  <Avatar src={`data:image/jpeg;base64,${userPhoto}`} />
                  <Stack>
                    <Typography
                      fontWeight={500}
                      sx={{ textTransform: "capitalize" }}
                      variant="body2"
                    >
                      {gig?.data?.user?.name} {gig?.data?.user?.lastname}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Star fontSize="3rem" />
                      <Typography variant="body2" fontWeight={600}>
                        {gig?.data?.ratingsAverage}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body2"
                      fontSize={12}
                      fontWeight={600}
                      sx={{
                        height: "auto",
                        backgroundColor: "cyan",
                        borderRadius: "4px",
                        padding: "0.2rem",
                      }}
                    >
                      Trusted
                    </Typography>
                  </Stack>
                </Stack>
                <br />
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Carousel afterChange={handleSlideChange} responsive={responsive}>
                    {slideShowImages && slideShowImages?.map((image, i) => {

                      const base64String = btoa(
                        String.fromCharCode(
                          ...new Uint8Array(image.img.data.data)
                        )
                      );
                      
                      return (
                        <img
                          src={`data:image/jpeg;base64,${base64String}`}
                          width="100%"
                          alt=""
                        />
                      );
                    })}
                  </Carousel>
                </Box>
                <br />
                <Box>
                  <Carousel responsive={responsive2}>
                    {slideShowImages && slideShowImages.map((image, i) => {
                      const base64String = btoa(
                        String.fromCharCode(
                          ...new Uint8Array(image.img.data.data)
                        )
                      );
                      if (active === i) {
                        return (
                          <div style={{ margin: "0 0.2rem" }}>
                            <img
                              src={`data:image/jpeg;base64,${base64String}`}
                              width="100%"
                              alt=""
                            />
                          </div>
                        );
                      }
                      return (
                        <div style={{ margin: "0 0.2rem" }}>
                          <img
                            src={`data:image/jpeg;base64,${base64String}`}
                            style={{ opacity: 0.4 }}
                            width="100%"
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </Box>
                <br /> <br />
                <Box>
                  <Typography variant="h5" fontWeight={500}>
                    About this gig
                  </Typography>
                  <br />
                  <Typography fontWeight={500}>
                    {gig?.data?.customeTitle}
                  </Typography>
                  <br />
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      {gig?.data?.customeDescription}
                    </Typography>
                    <br />
                    <Typography variant="body2">
                      {gig?.data?.summery}
                    </Typography>
                  </Box>
                  <br /> <br />
                  <Box>
                    <Typography fontWeight={500} variant="h6" gutterBottom>Frequently asked questions</Typography>
                    <br />
                    {gig?.data?.faqs.map((faq) => (
                      <Box>
                        <Typography fontWeight={500} gutterBottom>{faq.question}</Typography>
                        <Typography variant="body2">{faq.answer}</Typography>
                        <br />
                      </Box>
                    ))}
                  </Box>
                </Box>
                <br /> <br />
                <Box>
                  <Typography variant="h5" fontWeight={500}>
                    About this seller
                  </Typography>
                  <br />
                  <Stack direction="row" spacing={3}>
                    <Avatar
                      sx={{ width: "4.5rem", height: "4.5rem" }}
                      src={`data:image/jpeg;base64,${userPhoto}`}
                    />
                    <Stack>
                      <Stack direction="row" spacing={12}>
                        <Typography
                          fontWeight={500}
                          sx={{ textTransform: "capitalize" }}
                        >
                          {gig?.data?.user?.name} {gig?.data?.user?.lastname}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          alignItems="center"
                          sx={{ padding: "4px", borderRadius: "12px" }}
                          borderColor="primary"
                        >
                          Online <Circle fontSize="2rem" />
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="black.light">
                        {user?.data?.profile?.profileTitle}
                      </Typography>
                      <Stack direction="row" spacing={4} alignItems="center">
                        <Stack direction="row" alignItems="center">
                          <StarRateRounded />
                          <Typography variant="body2" fontWeight={600}>
                            4.9
                          </Typography>
                        </Stack>
                        <Typography
                          fontWeight={600}
                          sx={{
                            backgroundColor: "cyan",
                            fontSize: "0.8rem",
                            padding: "0.1rem 0.4rem",
                            borderRadius: "8px",
                          }}
                        >
                          Skilled
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <br />
                  <Box>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "black",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        borderColor: "black",
                      }}
                    >
                      Contact me
                    </Button>
                  </Box>
                  <br />
                  <Box
                    sx={{
                      border: "1px solid lightgray",
                      borderRadius: "4px",
                      padding: "1.4rem",
                    }}
                  >
                    <Grid sx={{}} container>
                      <Grid lg={6} item>
                        <Box sx={{ marginBottom: "1rem" }}>
                          <Typography variant="body2" color="gray">
                            From
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            Afghanistan
                          </Typography>
                        </Box>
                        <Box sx={{ marginBottom: "1rem" }}>
                          <Typography variant="body2" color="gray">
                            Avg. response time
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            2 hours
                          </Typography>
                        </Box>
                        <Box sx={{ marginBottom: "1rem" }}>
                          <Typography variant="body2" color="gray">
                            Language
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            English
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid lg={6} item>
                        <Box sx={{ marginBottom: "1rem" }}>
                          <Typography variant="body2" color="gray">
                            Member since
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            Jun 2020
                          </Typography>
                        </Box>
                        <Box sx={{ marginBottom: "1rem" }}>
                          <Typography variant="body2" color="gray">
                            Last delivery
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            about 19 hours
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box>
                      <Divider />
                    </Box>

                    <Box marginTop={2}>
                      <Typography variant="body2" color="gray">
                        Laudantium itaque sed quo soluta vero asperiores ullam
                        placeat sapiente deleniti ipsum ipsam incidunt, nobis
                        laboriosam exercitationem dolorem dicta quas quidem
                        quis. Laudantium itaque sed quo soluta vero asperiores
                        ullam placeat sapiente deleniti ipsum ipsam incidunt,
                        nobis laboriosam exercitationem dolorem dicta quas
                        quidem quis.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <br /> <br />
                <Box sx={{ backgroundColor: "#eee", padding: "2rem" }}>
                  <Typography variant="h5" fontWeight={500} marginBottom={1}>
                    Related Gigs
                  </Typography>
                  <Carousel responsive={responsive3}>
                    {cards.map(() => (
                      <Card sx={{ margin: "0.1rem 0.4rem" }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={dawid}
                          sx={{ borderRadius: "3px" }}
                          alt="Image title"
                        />
                        <CardContent>
                          <Box
                            sx={{
                              marginBottom: "0.8rem",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <Avatar
                                sx={{ width: "2rem", height: "2rem" }}
                                src={jason}
                              />
                              <Typography variant="body2" fontWeight={600}>
                                Sulaiman
                              </Typography>
                            </Stack>
                            <Typography
                              variant="body2"
                              fontSize={12}
                              fontWeight={600}
                              sx={{
                                height: "auto",
                                backgroundColor: "cyan",
                                borderRadius: "4px",
                                padding: "0.2rem",
                              }}
                            >
                              Trusted
                            </Typography>
                          </Box>
                          <Typography
                            variant="caption"
                            fontWeight={600}
                            color="#464646"
                            gutterBottom
                          >
                            I will design modern minimalist luxury business logo
                            design
                          </Typography>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Stack
                              margin="0.4rem 0"
                              spacing={0.6}
                              alignItems="center"
                              direction="row"
                            >
                              <StarRateRounded />
                              <Typography variant="body2" fontWeight={600}>
                                4.3
                              </Typography>
                            </Stack>
                            <Typography variant="body1" fontWeight={600}>
                              Price $20
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    ))}
                  </Carousel>
                </Box>
                <br /> <br />
                <Box>
                  <Typography variant="h5" fontWeight={500}>
                    Reviews
                  </Typography>
                  <br/>
                  <Box>
                    <Box>
                      <Divider />
                    </Box>
                    <Grid container>
                      {cards.map(() => (
                        <Grid item>
                          <Stack
                            sx={{ margin: "2rem 0" }}
                            direction="row"
                            spacing={2}
                          >
                            <Avatar src={dawid} />
                            <Stack spacing={1}>
                              <Stack>
                                <Typography variant="body2" fontWeight={600}>
                                  shoaib khan
                                </Typography>
                                <Typography variant="body2" color="gray">
                                  India
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={1}>
                                <Rating value="4" size="small" readOnly />
                                <Typography fontSize="0.8rem" color="gray">
                                  2 months ago
                                </Typography>
                              </Stack>
                              <Typography variant="body2">
                                Laudantium itaque sed quo soluta vero asperiores
                                ullam placeat sapiente deleniti ipsum ipsam
                                incidunt, nobis laboriosam exercitationem
                                dolorem dicta quas quidem quis. Laudantium
                                itaque sed quo soluta vero asperiores ullam
                                placeat sapiente deleniti ipsum ipsam incidunt,
                                nobis laboriosam exercitationem dolorem dicta
                                quas quidem quis.
                              </Typography>
                              <Stack direction="row" spacing={3}>
                                <Typography variant="body2" fontWeight={600}>
                                  Helpful?
                                </Typography>
                                <Button
                                  variant="body2"
                                  sx={{
                                    textTransform: "capitalize",
                                    padding: 0,
                                    fontWeight: 600,
                                  }}
                                  startIcon={<ThumbUpOutlined />}
                                >
                                  Yes
                                </Button>
                                <Button
                                  variant="body2"
                                  sx={{
                                    textTransform: "capitalize",
                                    padding: 0,
                                    fontWeight: 600,
                                  }}
                                  startIcon={<ThumbDownOutlined />}
                                >
                                  No
                                </Button>
                              </Stack>
                            </Stack>
                          </Stack>
                          <Box>
                            <Divider />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Box margin="1rem 0">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "black",
                        borderColor: "black",
                        textTransform: "capitalize",
                        fontWeight: 600,
                      }}
                      size="small"
                    >
                      Show More Reviews
                    </Button>
                  </Box>
                </Box>
                <br />
              </Box>
            )}
          </Grid>

          <Grid md="4" item>
            <Box
              sx={{
                position: "sticky",
                top: "6rem",
                backgroundColor: "#fff",
                marginBottom: "2rem",
              }}
            >
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: "light.main",
                  borderRadius: "4px",
                }}
              >
                <Stack spacing={2} sx={{ padding: "1.2rem", paddingTop: "2rem" }}>
                  <Stack direction="row">
                    <Typography
                      sx={{
                        flexGrow: 1,
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Price
                    </Typography>
                    <Typography fontWeight={500}>${gig?.data?.price}</Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    color="black.light"
                    fontWeight={400}
                  >
                    {gig?.data?.customeDescription}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TimerOutlined sx={{ color: "black.main" }} />
                    <Typography
                      variant="caption"
                      sx={{ color: "black.main" }}
                      fontWeight={700}
                    >
                      {gig?.data?.deliveryTime} Days <br /> Delivery
                    </Typography>
                  </Stack>

                  <List>
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemIcon>
                          <Done />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="body2" fontWeight={400} sx={{color: "black.light"}}>{gig?.data?.concepts} concepts included</Typography>
                        </ListItemText>
                      </ListItem>
                    {gig?.data?.options.map((option) => {
                      
                      if(option.status === "true") {
                        console.log(option.name)
                        return (
                          <ListItem sx={{ padding: 0 }}>
                            <ListItemIcon>
                              <Done />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="body2" fontWeight={400} sx={{color: "black.light"}}>{option.name} included</Typography>
                            </ListItemText>
                          </ListItem>
                        )
                      }
                      })
                    }
                  </List>

                  <Box>
                    <Button
                      variant="contained"
                      onClick={handleGotoOrder}
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        color: "#fff",
                      }}
                      fullWidth
                    >
                      Continue
                    </Button>
                  </Box>
                </Stack>
              </Box>
                <br/>
              <Box
                sx={{
                  padding: "1.2rem",
                  borderRadius: "4px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                  fullWidth
                >
                  Contact me
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "#eee", padding: "3rem 0" }}
      >
        <Typography color="gray">
          More services by{" "}
          <Link href="" color="#000" fontWeight={600}>
            Sulaiman19
          </Link>
        </Typography>
        <br />
        {myGigs.data && <Carousel responsive={responsive2}>
          {myGigs?.data.map((gig) => (
            <Card sx={{ margin: "0.2rem 1rem" }}>
              <CardMedia
                component="img"
                height="140"
                image={jason}
                sx={{ borderRadius: "3px" }}
                alt="Image title"
              />
              <CardContent>
                <Box
                  sx={{
                    marginBottom: "0.8rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                      sx={{ width: "2rem", height: "2rem" }}
                      src={jason}
                    />
                    <Typography variant="body2" sx={{textTransform: "capitalize"}} fontWeight={600}>
                      {gig?.user?.name} {gig?.user?.lastname}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    fontSize={12}
                    fontWeight={600}
                    sx={{
                      height: "auto",
                      backgroundColor: "cyan",
                      borderRadius: "4px",
                      padding: "0.2rem",
                    }}
                  >
                    Trusted
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  fontWeight={600}
                  color="#464646"
                  gutterBottom
                >
                  {gig?.title}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack
                    margin="0.4rem 0"
                    spacing={0.6}
                    alignItems="center"
                    direction="row"
                  >
                    <StarRateRounded />
                    <Typography variant="body2" fontWeight={600}>
                    {gig?.ratingsAverage}
                    </Typography>
                  </Stack>
                  <Typography variant="body1" fontWeight={600}>
                    Price ${gig?.price}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Carousel>}
      </Container>
    </Box>
  );
};

export default Gig;
