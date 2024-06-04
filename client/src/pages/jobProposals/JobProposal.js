import { Box, Container, Stack } from "@mui/system";
import React from "react";
import request from "../../utils/request";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import jason from "../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg";
import Carousel from "react-multi-carousel";
import { Circle, StarRateRounded } from "@mui/icons-material";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const JobProposal = () => {
  const { jobId, proposalId } = useParams();
  const token = Cookies.get("token");
  const currentUser = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const orderNow = () => {
    navigate(`/jobs/${jobId}/orders/create`)
  }

  const proposal = useQuery({
    queryKey: ["jobProposal"],
    queryFn: () => {
      return request
        .get(
          `users/${currentUser?._id}/jobs/${jobId}/proposals/${proposalId}`,
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
    queryKey: ["user", proposal.data],
    queryFn: () => {
      return request
        .get(
          `users/${proposal?.data?.user}`,
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
    enabled: !!proposal.data
  });
  let profilePhoto = ''

  if(user.data) {
    profilePhoto = btoa(
      String.fromCharCode(...new Uint8Array(user?.data?.profile?.photo?.img.data.data))
    );
  }

  return (
    <Box padding="6rem 0">
      <Container>
        <Typography variant="h4">Proposal</Typography>
        <br /> <br />
        <Typography variant="h5">Cover letter</Typography>
        <br />
        <Typography sx={{ maxWidth: "52rem" }}>{proposal?.data?.coverLetter}</Typography>
        <br /> <br />
        <Typography variant="h5">Attached samples</Typography>
        <br />
        <Box>
          {proposal.data && (
            <Carousel responsive={responsive}>
              {proposal?.data?.images.map((image) => {
                const base64String = btoa(
                  String.fromCharCode(...new Uint8Array(image?.img?.data?.data))
                );
                return (
                  <Card
                    sx={{
                      boxShadow: "none",
                      backgroundColor: "transparent",
                      margin: "0.3rem",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="210"
                      image={`data:image/jpeg;base64,${base64String}`}
                      alt="Image title"
                    />
                  </Card>
                );
              })}
            </Carousel>
          )}
        </Box>
        <Box marginTop="4rem">
          <Typography variant="h6" fontWeight={500}>
            About this seller
          </Typography>
          <br />
          <Stack direction="row" spacing={3}>
            <Avatar sx={{ width: "4rem", height: "4rem" }} src={`data:image/jpeg;base64,${profilePhoto}`} />
            <Stack>
              <Stack direction="row" spacing={12}>
                <Typography
                  fontWeight={500}
                  sx={{ textTransform: "capitalize" }}
                >
                  {user?.data?.name} {user?.data?.lastname}
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
              maxWidth: "42rem",
            }}
          >
            <Grid sx={{}} container>
              <Grid lg={6} item>
                <Box sx={{ marginBottom: "1rem" }}>
                  <Typography variant="body2" color="gray">
                    From
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    {user?.data?.profile?.country}
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
                    {user?.data?.profile?.languages[0].language}
                  </Typography>
                </Box>
              </Grid>
              <Grid lg={6} item>
                <Box sx={{ marginBottom: "1rem" }}>
                  <Typography variant="body2" color="gray">
                    Member since
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    {new Date(user?.data?.createdAt).getFullYear()}
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
                Laudantium itaque sed quo soluta vero asperiores ullam placeat
                sapiente deleniti ipsum ipsam incidunt, nobis laboriosam
                exercitationem dolorem dicta quas quidem quis. Laudantium itaque
                sed quo soluta vero asperiores ullam placeat sapiente deleniti
                ipsum ipsam incidunt, nobis laboriosam exercitationem dolorem
                dicta quas quidem quis.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          bottom: 0,
          position: "fixed",
          width: "100%",
          backgroundColor: "#fff",
          zIndex: 100,
          padding: "1rem 0",
          borderTop: "2px solid",
          borderTopColor: "primary.main",
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Box></Box>
            <Button variant="contained" sx={{textTransform: "capitalize"}} onClick={orderNow} >
              &nbsp; Order Now &nbsp;
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default JobProposal;
