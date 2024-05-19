import { NavigateNext } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";

const AddTitle = ({ onNext }) => {
  const [title, setTitle] = useState('')

  const returnData = () => {
    console.log(title)
    onNext({title})
  }
  return (
    <Box paddingTop="8rem" sx={{ height: "100vh" }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Now add a title to tell the world what you do
        </Typography>
        <Typography variant="body2" color="black.light">
          It's the very first thing clients see, so make it count. Stand out by
          describing your expertise in your own words.
        </Typography>
        <br />
        <TextField
          placeholder="Ex: Web developer"
          size="small"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "80%" }}
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
            <Box></Box>
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

export default AddTitle;
