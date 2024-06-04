import { NavigateNext } from "@mui/icons-material";
import { Autocomplete, Button, Chip, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";

const AddSkills = ({ onNext, onPrev }) => {
  const [skillValue, setSkillValue] = useState('')
  const [skills, setSkills] = useState([])

  const handleAddSkill = (event) => {
    if(event.key === 'Enter' && skillValue) {
      event.preventDefault();
      if(!skills.includes(skillValue)) {
        setSkills((prevSkill) => [...prevSkill, skillValue]);
      }
      setSkillValue('')
    }
  }
  
  const returnData = () => {
    onNext({skills})
  }
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
          multiple
          freeSolo
          sx={{ maxWidth: "80%"}}
          size="small"
          value={skills}
          inputValue={skillValue}
          onChange={(event, newValue) => setSkills(newValue)}
          onInputChange={(event, newInputValue) => {
            setSkillValue(newInputValue);
          }}
          renderTags={(value, getTagProps) => 
            value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          options={[]}
          renderInput={(params) => (<TextField {...params}  label="Skills" placeholder="Add a tag" onKeyPress={handleAddSkill} />)}
        />
        <Stack>
          {/* {skills && skills.map((skill) => (
            <Chip>{skill}</Chip>
          ))} */}
        </Stack>
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

export default AddSkills;
