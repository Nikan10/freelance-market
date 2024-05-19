import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Pricing = ({ onNext, onPrev, data, formData }) => {
  const [customeTitle, setCustomeTitle] = useState("");
  const [customeDescription, setCustomeDescription] = useState("");
  const [delivery, setDelivery] = useState(null);
  const [concepts, setConcepts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [optionsList, setOptionsList] = useState([])
  let options = [];
  // let optionsList = [];

  const category = data.categories.filter(
    (cat) => cat._id === formData.category
  )[0];
  const subCategory = category.subCategories.filter(
    (subCat) => subCat._id === formData.subCategory
  )[0];
  options = subCategory.options;

  const handleOptionChange = (event) => {
    setOptionsList(options.map((option) => {
      if(option === event.target.value) {
        return option = {name: option, status: true}
      } else {
        return {name: option}
      }
    }))
    console.log(optionsList)
  }
  console.log(optionsList)
  const returnData = (e) => {
    e.preventDefault();
    console.log(optionsList)
    if (
      !customeTitle ||
      !customeDescription ||
      !delivery ||
      !concepts ||
      !totalPrice ||
      !optionsList
    )
      return;
    onNext({
      customeTitle,
      customeDescription,
      delivery,
      concepts,
      totalPrice,
      optionsList,
    });
    window.scrollTo(0, 0);
  };
  return (
    <Box>
      <Typography variant="h4">Price & scope</Typography> <br />
      <Stack>
        <Typography variant="h6" fontWeight={500}>
          Create price tier
        </Typography>
        <Typography color="gray" variant="body2">
          Customize your gig with pricing tire.
        </Typography>{" "}
        <br />
        <Grid rowSpacing={2} container>
          <Grid md={3} item>
            <Typography color="gray" variant="body2" fontWeight={500}>
              Custome Title
            </Typography>{" "}
            <br />
          </Grid>
          <Grid md={9} item>
            <TextField
              variant="outlined"
              multiline
              rows={3}
              size="small"
              name="customeTitle"
              sx={{ marginBottom: "1.2rem", width: "26rem" }}
              onChange={(e) => setCustomeTitle(e.target.value)}
            />
          </Grid>

          <Grid md={3} item>
            <Typography color="gray" variant="body2" fontWeight={500}>
              Custome Description
            </Typography>{" "}
            <br />
          </Grid>
          <Grid md={9} item>
            <TextField
              variant="outlined"
              multiline
              rows={5}
              size="small"
              name="customeDescription"
              sx={{ marginBottom: "1.2rem", width: "26rem" }}
              onChange={(e) => setCustomeDescription(e.target.value)}
            />
          </Grid>

          <Grid md={3} item>
            <Typography color="gray" variant="body2" fontWeight={500}>
              Delivery Days
            </Typography>{" "}
            <br />
          </Grid>
          <Grid md={9} item>
            <Autocomplete
              onChange={(e, value) => setDelivery(value)}
              size="small"
              sx={{ width: "26rem" }}
              options={["1", "2", "3", "4", "5", "6", "7"]}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
          </Grid>

          <Grid md={3} item>
            <Typography color="gray" variant="body2" fontWeight={500}>
              Number of Concepts
            </Typography>
          </Grid>
          <Grid md={9} item>
            <TextField
              variant="outlined"
              size="small"
              name="concepts"
              sx={{ marginBottom: "1.2rem", width: "26rem" }}
              onChange={(e) => setConcepts(e.target.value)}
            />
          </Grid>
        </Grid>
      </Stack>
      <br />
      <Stack maxWidth="md">
        <Typography variant="h6" fontWeight={500}>
          Sevice Tire Options
        </Typography>
        <Grid columnSpacing={20} rowSpacing={2} container>
          {options &&
            options.map((option) => (
              <Grid md={6} item>
                <Stack justifyContent="space-between" direction="row">
                  <Typography color="gray" variant="body2" fontWeight={500}>
                    {option}
                  </Typography>
                  <Input
                    name={option}
                    sx={{ width: "1rem" }}
                    value={option}
                    type="checkbox"
                    onChange={handleOptionChange}
                  />
                </Stack>
              </Grid>
            ))}
        </Grid>
        <br /> <br />
        <Grid container>
          <Grid md={3} item>
            <Typography color="gray" variant="body2" fontWeight={500}>
              Total price
            </Typography>
          </Grid>
          <Grid md={9} item>
            <TextField
              variant="outlined"
              type="number"
              size="small"
              name="totalPrice"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              sx={{ marginBottom: "1.2rem", width: "20rem" }}
              onChange={(e) => setTotalPrice(e.target.value)}
            />
          </Grid>
        </Grid>
      </Stack>
      <br /> <br />
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={onPrev}
          sx={{ textTransform: "capitalize" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={returnData}
          sx={{ textTransform: "capitalize" }}
        >
          Save & Continue
        </Button>
      </Stack>
    </Box>
  );
};

export default Pricing;
