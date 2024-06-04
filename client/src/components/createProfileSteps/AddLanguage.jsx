import { Add, NavigateNext } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";

const AddLanguage = ({ onNext, onPrev }) => {
  const [languages, setLanguages] = useState([
    {
      language: '',
      proficiency: ''
    }
  ]);

  const handleLanguageChange = (index, value) => {
    const newLanguage = languages
    newLanguage[index].language = value;
    setLanguages(newLanguage)
  };

  const handleProficiencyChange = (index, value) => {
    const newProficiency = languages
    newProficiency[index].proficiency = value;
    setLanguages(newProficiency)
  };

  const handleAddLanguage = () => {
    setLanguages([...languages, {
      language: '',
      proficiency: ''
    }]);
  };
  console.log(languages)

  const returnDate = () => {
    onNext({ languages })
  };
  console.log(languages)
  return (
    <Box paddingTop="8rem" sx={{ height: "100vh" }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Next, tell us which languages you speak.
        </Typography>
        <Typography variant="body2" color="black.light">
          Clients are often interested to know what languages you speak.
          English is a must, but do you speak any other?
        </Typography>
      </Container>
      <br />
      <Container maxWidth="sm">
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "light.main" }}>
              <TableCell variant="body2" sx={{ color: "black.light", fontWeight: 500 }} >
                Language
              </TableCell>
              <TableCell variant="body2" sx={{ color: "black.light", fontWeight: 500 }} >
                Proficiency
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {languages.map((language, i) => (<TableRow>
              <TableCell variant="body2" sx={{ color: "black.light" }}>
                <Autocomplete
                  sx={{ maxWidth: "10rem" }}
                  size="small"
                  options={[
                    "African",
                    "Arabic",
                    "Chiness",
                    "English",
                    "Japaness",
                    "Pashto",
                    "Persion",
                    "Russian",
                    "Urdu",
                  ]}
                  onChange={(e, value) => handleLanguageChange(i, value)}
                  renderInput={(params) => (
                    <TextField {...params} label="Language" />
                  )}
                />
              </TableCell>
              <TableCell variant="body2" sx={{ color: "black.light" }}>
                <Autocomplete
                  sx={{ maxWidth: "10rem" }}
                  size="small"
                  onChange={(e, value) => handleProficiencyChange(i, value)}
                  options={["Basic", "Conversational", "Fluent", "Native"]}
                  renderInput={(params) => (
                    <TextField {...params} label="My level" />
                  )}
                />
              </TableCell>
            </TableRow>)
            )}
          </TableBody>
        </Table>
        <br/>
        <Button onClick={handleAddLanguage} startIcon={<Add />}>Add a language</Button>
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
            <Button variant="contained" onClick={returnDate}>
              Next
              <NavigateNext />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AddLanguage;
