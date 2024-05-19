import { Add, CloseOutlined, NavigateNext, WorkHistoryOutlined } from "@mui/icons-material";
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

const AddEducation = ({ onNext, onPrev }) => {
  const [AddEducation, setAddEducation] = useState(false);
  const [educationAdded, setEducationAdded] = useState(false);
  const [education, setEducation] = useState([]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        school,
        degree,
        field,
        from,
        to,
        description,
      },
    ]);
    setSchool("");
    setDegree("");
    setField("");
    setFrom("");
    setTo("");
    setDescription("");

    setEducationAdded(true);
    setAddEducation(false);
  };

  const returnData = () => {
    onNext(education);
  };


  // const [AddEducation, setAddEducation] = useState(false);
  // const [educationAdded, setEducationAdded] = useState(false);

  // const [school, setSchool] = useState("");
  // const [degree, setDegree] = useState("");
  // const [field, setField] = useState("");
  // const [from, setFrom] = useState('')
  // const [to, setTo] = useState('')
  // const [description, setDescription] = useState("");

  // const handleAddEducation = () => {
  //   setEducationAdded(true);
  //   setAddEducation(false);
  // };

  // const returnData = () => {
  //   const education = {
  //     school,
  //     degree,
  //     field,
  //     from,
  //     to,
  //     description,
  //   };
  //   onNext({education});
  // };
  return (

    <Box sx={{ height: "100vh", paddingTop: "8rem" }}>
      <Dialog open={AddEducation} onClose={() => setAddEducation(false)}>
        <Stack
          maxHeight="30rem"
          sx={{ overflowY: "hidden", width: "36rem"}}
        >
          <Stack padding="1rem" direction="row" alignItems="center">
            <Typography fontWeight={400} flex={1}>
              Add education history
            </Typography>
            <IconButton onClick={() => setAddEducation(false)}>
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
              label="School *"
              size="small"
              placeholder="Ex: Oxford University"
              onChange={(e) => setSchool(e.target.value)}
            />
            <TextField
              label="Degree"
              size="small"
              placeholder="Ex: Bachelors"
              onChange={(e) => setDegree(e.target.value)}
            />
            <TextField
              label="Field of study"
              size="small"
              placeholder="Ex: Design"
              onChange={(e) => setField(e.target.value)}
            />
            <Grid rowSpacing={2} container>
              <Grid md={12} item>
                <Typography variant="body2" fontWeight={500}>
                  Dates Attended
                </Typography>
              </Grid>

              <Grid md={6} item>
                <Stack sx={{ marginLeft: "1rem" }}>
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
                    onChange={(e, value) => setFrom(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="From" />
                    )}
                  />
                </Stack>
              </Grid>
              <Grid md={6} item>
                <Stack sx={{ marginLeft: "1rem" }}>
                  <Autocomplete
                    size="small"
                    options={[
                      "2030",
                      "2029",
                      "2028",
                      "2027",
                      "2026",
                      "2025",
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
                    onChange={(e, value) => setTo(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="To" />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Stack>
              <Typography variant="body2" fontWeight={500} gutterBottom>
                Description
              </Typography>
              <TextField onChange={(e) => setDescription(e.target.value)} size="small" multiline rows={4} />
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
              onClick={handleAddEducation}
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Dialog>

      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Clients like to know what you know add your education here.
        </Typography>
        <Typography variant="body2" color="black.light">
          You don't have to have a degree. Adding any relevent education helps
          make your profile more visible.
        </Typography>
      </Container>
      <br />
      <Container maxWidth="sm">
        <Box>
          {educationAdded ? (
            <Grid container>
              <Grid md={2} item>
                <Stack alignItems="center" justifyContent="center">
                  <IconButton onClick={() => setAddEducation(true)}>
                    <Add />
                  </IconButton>
                </Stack>
              </Grid>
              <Grid md={10} item>
                <Stack spacing={2}>
                  {education.map((edu) => (
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
                            {edu.field}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            color="black.light"
                          >
                            {edu.degree}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            color="black.light"
                          >
                            {edu.school}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={400}
                            color="black.light"
                          >
                            {edu.from} - {edu.to}
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
                  Add your education
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => setAddEducation(true)}
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

    


    // <Box paddingTop="8rem" sx={{ height: "100vh" }}>
      

      
    //   <Container maxWidth="sm">
    //   {educationAdded ? (
    //         <Box
    //           sx={{
    //             border: "1px solid",
    //             padding: "1rem",
    //             borderColor: "light.dark",
    //             borderRadius: "6px",
    //           }}
    //         >
    //           <Stack direction="row" alignItems="center" spacing={4}>
    //             <WorkHistoryOutlined color="primary" />
    //             <Box>
    //               <Typography fontWeight={500} variant="h6">
    //                 {field}
    //               </Typography>
    //               <Typography
    //                 variant="body2"
    //                 fontWeight={500}
    //                 color="black.light"
    //               >
    //                 {degree}
    //               </Typography>
    //               <Typography
    //                 variant="body2"
    //                 fontWeight={400}
    //                 color="black.light"
    //               >
    //                 {from} - {to}
    //               </Typography>
    //             </Box>
    //           </Stack>
    //         </Box>
    //       ) : (
    //     <Stack
    //       justifyContent="space-between"
    //       sx={{
    //         border: "2px dashed",
    //         padding: "1rem",
    //         borderColor: "light.dark",
    //         backgroundColor: "light.light",
    //         borderRadius: "6px",
    //         height: "14rem",
    //         width: "18rem",
    //       }}
    //     >
    //       <Box></Box>
    //       <Box>
    //         <Typography
    //           variant="h6"
    //           color="black.light"
    //           fontWeight={400}
    //           gutterBottom
    //         >
    //           Add your education
    //         </Typography>
    //         <Button
    //           variant="contained"
    //           onClick={() => setAddEducation(true)}
    //           sx={{ color: "#fff", borderRadius: "25px" }}
    //         >
    //           <Add />
    //         </Button>
    //       </Box>
    //     </Stack>
    //     )}
    //   </Container>
    //   <Box
    //     sx={{
    //       bottom: 0,
    //       position: "fixed",
    //       width: "100%",
    //       backgroundColor: "#fff",
    //       zIndex: 100,
    //       padding: "1rem 0",
    //       borderTop: "2px solid",
    //       borderTopColor: "primary.main",
    //     }}
    //   >
    //     <Container>
    //       <Stack direction="row" justifyContent="space-between">
    //         <Button variant="outlined" onClick={onPrev}>Back</Button>
    //         <Button variant="contained" onClick={returnData}>
    //           Next
    //           <NavigateNext />
    //         </Button>
    //       </Stack>
    //     </Container>
    //   </Box>
    // </Box>
  );
};

export default AddEducation;
