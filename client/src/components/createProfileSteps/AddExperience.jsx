import {
  Add,
  CloseOutlined,
  Label,
  NavigateNext,
  WorkHistoryOutlined,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Button,
  Dialog,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";

const AddExperience = ({ onNext, onPrev }) => {
  const [addExperience, setAddExperience] = useState(false);
  const [experienceAdded, setExperienceAdded] = useState(false);
  const [experience, setExperience] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        title,
        company,
        location,
        startDate: {
          startMonth,
          startYear,
        },
        endDate: {
          endMonth,
          endYear,
        },
        description,
      },
    ]);
    setTitle("");
    setCompany("");
    setLocation("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");

    setExperienceAdded(true);
    setAddExperience(false);
  };

  const returnData = () => {
    onNext(experience);
  };
  console.log(experience);
  return (
    <Box sx={{ height: "100vh", paddingTop: "8rem" }}>
      <Dialog
        open={addExperience}
        sx={{ width: "100%" }}
        onClose={() => setAddExperience(false)}
      >
        <Stack maxHeight="30rem" sx={{ overflowY: "hidden", width: "36rem" }}>
          <Stack padding="1rem" direction="row" alignItems="center">
            <Typography fontWeight={400} flex={1}>
              Add work experience
            </Typography>
            <IconButton onClick={() => setAddExperience(false)}>
              <CloseOutlined
                sx={{ color: "black.light" }}
                fontSize="0.6rem"
                justifyContent="center"
              />
            </IconButton>
          </Stack>
          <Divider />
          <Stack sx={{ overflowY: "scroll", padding: "2rem" }} spacing={3}>
            <TextField
              label="Title *"
              size="small"
              placeholder="Ex: Web desinger"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Company *"
              size="small"
              placeholder="Ex: Microsoft"
              onChange={(e) => setCompany(e.target.value)}
            />
            <TextField
              label="Location *"
              size="small"
              placeholder="Ex: New York"
              onChange={(e) => setLocation(e.target.value)}
            />
            <Grid rowSpacing={2} container>
              <Grid md={6} item>
                <Typography variant="body2" fontWeight={500}>
                  Start Date *
                </Typography>
              </Grid>
              <Grid md={6} item>
                <Typography variant="body2" fontWeight={500}>
                  End Date *
                </Typography>
              </Grid>
              <Grid md={6} item>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginRight: "1rem" }}
                >
                  <Autocomplete
                    size="small"
                    options={[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ]}
                    onChange={(e, value) => setStartMonth(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Month" />
                    )}
                  />
                  <Autocomplete
                    size="small"
                    options={[
                      "2024",
                      "2023",
                      "2022",
                      "2021",
                      "2020",
                      "2019",
                      "2018",
                      "2017",
                      "2016",
                      "2015",
                      "2014",
                      "2013",
                      "2012",
                      "2011",
                      "2010",
                      "2009",
                      "2008",
                      "2007",
                      "2006",
                      "2005",
                    ]}
                    onChange={(e, value) => setStartYear(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Year" />
                    )}
                  />
                </Stack>
              </Grid>
              <Grid md={6} item>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginLeft: "1rem" }}
                >
                  <Autocomplete
                    size="small"
                    options={[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ]}
                    onChange={(e, value) => setEndMonth(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Month" />
                    )}
                  />
                  <Autocomplete
                    size="small"
                    options={[
                      "2024",
                      "2023",
                      "2022",
                      "2021",
                      "2020",
                      "2019",
                      "2018",
                      "2017",
                      "2016",
                      "2015",
                      "2014",
                      "2013",
                      "2012",
                      "2011",
                      "2010",
                      "2009",
                      "2008",
                      "2007",
                      "2006",
                      "2005",
                    ]}
                    onChange={(e, value) => setEndYear(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Year" />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Stack>
              <Typography variant="body2" fontWeight={500} gutterBottom>
                Description
              </Typography>
              <TextField
                onChange={(e) => setDescription(e.target.value)}
                size="small"
                multiline
                rows={4}
              />
            </Stack>
          </Stack>
          <Stack
            padding="1rem"
            direction="row"
            justifyContent="space-between"
            sx={{ position: "relative", bottom: 0 }}
          >
            <Box></Box>
            <Button
              variant="contained"
              size="small"
              sx={{
                color: "#fff",
                width: "fit-content",
                textTransform: "capitalize",
              }}
              onClick={handleAddExperience}
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Dialog>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={500} gutterBottom>
          If you have relevent work experience, add it here.
        </Typography>
        <Typography variant="body2" color="black.light">
          Freelancers who add thier experience are twice as likely to win work.
          But if you are just starting out, you can still create a greate
          profile.
        </Typography>
      </Container>
      <br />
      <Container maxWidth="sm">
        <Box>
          {experienceAdded ? (
            <Grid container>
              <Grid md={2} item>
                <Stack alignItems="center" justifyContent="center">
                  <IconButton onClick={() => setAddExperience(true)}>
                    <Add />
                  </IconButton>
                </Stack>
              </Grid>
              <Grid md={10} item>
                <Stack spacing={2}>
                  {experience.map((exp) => (
                    <Box
                      sx={{
                        border: "1px solid",
                        padding: "1rem",
                        borderColor: "light.dark",
                        borderRadius: "6px",
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={4}>
                        <WorkHistoryOutlined color="primary" />
                        <Box>
                          <Typography fontWeight={500} variant="h6">
                            {exp.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            color="black.light"
                          >
                            {exp.company}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={400}
                            color="black.light"
                          >
                            {exp.startDate.startYear} - {exp.endDate.endMonth}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          ) : (
            <Stack
              justifyContent="space-between"
              sx={{
                border: "2px dashed",
                padding: "1rem",
                borderColor: "light.dark",
                backgroundColor: "light.light",
                borderRadius: "6px",
                height: "14rem",
                width: "18rem",
              }}
            >
              <Box></Box>
              <Box>
                <Typography
                  variant="h6"
                  color="black.light"
                  fontWeight={400}
                  gutterBottom
                >
                  Add your experience
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => setAddExperience(true)}
                  sx={{ color: "#fff", borderRadius: "25px" }}
                >
                  <Add />
                </Button>
              </Box>
            </Stack>
          )}
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
            <Button variant="outlined" onClick={onPrev}>
              Back
            </Button>
            <Button variant="contained" onClick={returnData}>
              Next
              <NavigateNext />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AddExperience;
