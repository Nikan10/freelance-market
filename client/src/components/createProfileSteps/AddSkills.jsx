import { NavigateNext } from "@mui/icons-material";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

const AddSkills = ({ onNext, onPrev }) => {
  return (
    <Box paddingTop="8rem" sx={{ height: "100vh" }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={500} gutterBottom>
          What are the main skills you have?
        </Typography>
        <Typography variant="body2" color="black.light">
          Choose at least one skill that describes the type of work you do.
          This helps us match you with clients who need your unique expertise.
        </Typography>
      </Container>
      <br />
      <Container maxWidth="sm">
        <Autocomplete
          sx={{ maxWidth: "80%"}}
          size="small"
          options={["Basic", "Conversational", "Fluent", "Native"]}
          renderInput={(params) => <TextField {...params} label="Search for service" />}
        />
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
          borderTopColor: "primary.main"
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Button variant="outlined" onClick={onPrev}>Back</Button>
            <Button variant="contained" onClick={onNext}>
              Next
              <NavigateNext />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AddSkills;
