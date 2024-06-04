import {
  EditOutlined,
  Man,
  PlaceRounded,
  StarRateRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

import dawid from "../../assets/images/categories/dawid-zawila--G3rw6Y02D0-unsplash.jpg";
import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  
  return (
    <Container maxWidth="xl" sx={{ padding: "6rem 0" }}>
      <Grid spacing={3} container>
        <Grid lg="4" item>
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          >
            <Box sx={{ padding: "1.4rem" }}>
              <Button
                variant="outlined"
                size="small"
                href="/editProfile"
                endIcon={<EditOutlined />}
              >
                Edit profile
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1rem 0",
                }}
              >
                <Avatar
                  src={dawid}
                  sx={{ width: "8rem", height: "8rem", marginBottom: "1rem" }}
                />
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ textTransform: "capitalize" }}
                >
                  {currentUser?.name} {currentUser?.lastname}
                </Typography>
                <Typography variant="body2" color="gray">
                  sulaiman10
                </Typography>
                <br />
              </Box>

              <Box margin="1rem 0">
                <Divider />
              </Box>

              <Stack spacing={2}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Stack direction="row" spacing={1}>
                    <PlaceRounded />{" "}
                    <Typography variant="body2" color="gray">
                      From
                    </Typography>
                  </Stack>
                  <Typography variant="body2" fontWeight={600}>
                    Afghanistan
                  </Typography>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Stack direction="row" spacing={1}>
                    <Man />{" "}
                    <Typography variant="body2" color="gray">
                      Member since
                    </Typography>
                  </Stack>
                  <Typography variant="body2" fontWeight={600}>
                    Aug 2020
                  </Typography>
                </Stack>
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
                backgroundColor: "#fff",
              }}
            >
              <Box sx={{ padding: "1.4rem" }}>
                <Typography variant="h5" fontWeight={600}>
                  Web Developer
                </Typography>
                <br />
                <Stack spacing={2}>
                  <Typography fontWeight={600} sx={{ flexGrow: 1 }}>
                    Description
                  </Typography>
                  <Typography variant="body2" color="gray">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium itaque sed quo soluta vero asperiores ullam
                    placeat sapiente deleniti ipsum ipsam incidunt, nobis
                    laboriosam exercitationem dolorem dicta quas quidem quis.
                  </Typography>
                </Stack>

                <Box margin="1rem 0">
                  <Divider />
                </Box>

                <Stack spacing={2}>
                  <Typography fontWeight={600} sx={{ flexGrow: 1 }}>
                    Language
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="body2">English</Typography>
                    <Typography variant="body2" color="gray">
                      Coversational
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Typography variant="body2">Pashto</Typography>
                    <Typography variant="body2" color="gray">
                      Fluent
                    </Typography>
                  </Stack>
                </Stack>

                <Box margin="1rem 0">
                  <Divider />
                </Box>

                <Stack spacing={2}>
                  <Typography fontWeight={600} sx={{ flexGrow: 1 }}>
                    Skills
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      variant="body2"
                      sx={{
                        borderRadius: "25px",
                        border: "1px solid lightgray",
                        color: "gray",
                        padding: "4px 10px",
                      }}
                    >
                      UI Design
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        borderRadius: "25px",
                        border: "1px solid lightgray",
                        color: "gray",
                        padding: "4px 10px",
                      }}
                    >
                      Web Design
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Box>
          <br />
          <Box>
            <Box
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                backgroundColor: "#fff",
              }}
            >
              <Box sx={{ padding: "1.4rem" }}>
                <Stack spacing={2}>
                  <Typography fontWeight={600} sx={{ flexGrow: 1 }}>
                    Education
                  </Typography>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1}>
                      <Typography variant="body2">B.A</Typography>
                      <Typography variant="body2" color="gray">
                        Computer Science
                      </Typography>
                    </Stack>
                    <Typography variant="body2">
                      Kandahar, Afghanistan, Kandahar University
                    </Typography>
                  </Stack>
                </Stack>

                <Box margin="1rem 0">
                  <Divider />
                </Box>

                <Stack spacing={2}>
                  <Typography fontWeight={600}>Certificates</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="body2" fontWeight={600}>
                      UI Design Award
                    </Typography>
                    <Typography variant="body2" color="gray">
                      2018
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
