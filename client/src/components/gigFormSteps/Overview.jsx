import React, { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Card,
  Grid,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Box,
  TextField,
  Dialog,
  DialogContent,
  Stack,
  Autocomplete,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Chip,
  FormControlLabel,
} from "@mui/material";
import request from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import { CheckBox, Label } from "@mui/icons-material";

const Overview = ({ onNext, data, isPending, error }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  let categories = [];
  let categoriesList = [];
  let subCategories = [];
  let subCategoriesList = [];
  let attributes = [];
  let attributeName = "";
  let attributesList = [];

  if (data) {
    categories = data.categories;
    categoriesList = categories.map((cat) => cat.name);
  }

  if (category) {
    const selectedCategory = categories.filter(
      (cat) => cat._id === category
    )[0];
    console.log(selectedCategory);
    subCategories = selectedCategory.subCategories;
    subCategoriesList = subCategories.map((subCat) => subCat.name);
  }

  if (subCategory) {
    const selectedSubCategory = subCategories.filter(
      (subCat) => subCat._id === subCategory
    )[0];
    attributes = selectedSubCategory.attributes;
  }

  const handleCategoryChange = (event, categoryName) => {
    const categoryId = categories.filter((cat) => cat.name === categoryName)[0]
      ._id;
    setCategory(categoryId);
  };

  const handleSubCategoryChange = (event, subCategoryName) => {
    const subCategoryId = subCategories.filter(
      (subCat) => subCat.name === subCategoryName
    )[0]._id;
    setSubCategory(subCategoryId);
  };

  const handleAttributeChange = (event) => {
    attributesList = [...attributesList, {name: attributeName, value: event.target.value}];
    console.log(attributesList);
  };

  const returnData = (e) => {
    e.preventDefault();
    if (!title || !category || !subCategory || !attributesList) return;
    onNext({ title, category, subCategory, attributesList });
    window.scrollTo(0, 0);
  };

  return (
    <Box>
      <Typography variant="h4">Gig overview</Typography> <br />
      <Stack>
        <Typography variant="h6" fontWeight={600}>
          Title
        </Typography>
        <Typography color="gray" variant="body2">
          Tell the client what you will deliver and how it benefits them.
        </Typography>
        <br />
        <TextField
          size="small"
          name="title"
          sx={{ marginBottom: "1.2rem", minWidth: "22rem", maxWidth: "42rem" }}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Stack>
      <br />
      <Stack>
        <Typography variant="h6" fontWeight={600}>
          Category
        </Typography>
        <Typography color="gray" variant="body2">
          Select a category so it's easy for clients to find your project.
        </Typography>
        <br />
        {isPending ? (
          "loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <Autocomplete
            size="small"
            onChange={handleCategoryChange}
            sx={{ width: "14rem" }}
            options={categoriesList}
            renderInput={(params) => (
              <TextField {...params} placeholder="Category" />
            )}
          />
        )}
        <br />
        {category && (
          <Autocomplete
            size="small"
            onChange={handleSubCategoryChange}
            sx={{ width: "14rem" }}
            options={subCategoriesList}
            renderInput={(params) => (
              <TextField {...params} placeholder="subcategory" />
            )}
          />
        )}
      </Stack>
      <br />
      <Stack>
        <Typography variant="h6" fontWeight={600}>
          Gig attributes
        </Typography>
        <Typography color="gray" variant="body2">
          Select a category above to see options.
        </Typography>{" "}
        <br />
        {attributes &&
          attributes.map((attribute) => {
            let attriName = attribute.name
            return (
              <Stack>
                <Typography variant="h6" fontWeight={500} gutterBottom>{attribute?.name}</Typography>
                <Grid columnSpacing={2} rowSpacing={2} container>
                  {attribute.values.map((value, i) => (
                    <Grid sm={4} key={i} item>
                      <Stack spacing={1} alignItems="flex-end" direction="row">
                        <Input
                          name={value}
                          sx={{ width: "1rem" }}
                          value={value}
                          type="checkbox"
                          onChange={(e) => {attributeName = attriName; handleAttributeChange(e)}}
                        />
                        <label
                          htmlFor={value}
                          style={{ fontSize: "0.9rem", fontWeight: 500 }}
                        >
                          {value}
                        </label>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
                <br />
              </Stack>
            );
          })}
      </Stack>
      <br />
      {/* <Stack>
        <Typography variant='h6' fontWeight={600}>Search tags (optional)</Typography>
        <Typography color='gray' variant='body2'>Tell the client what you will deliver and how it benefits them.</Typography> <br/>
        <FormControl>
          <TextField fullWidth size="small" id='tag-input' value={inputValue} onKeyPress={handleInputKeyPress} onChange={handleInputChange} placeholder='Add tags ...' />
          <FormHelperText>Press enter to add a tag</FormHelperText>
        </FormControl>
        <Box>
          <Typography>chip</Typography>
          {tags.map((tag, i) => (
            <Chip key={i} label="salim" onDelete={handleDeleteTag(tag)} style={{margin: "0.4rem", color: "gray", width: "fit-content"}} />
          ))}
        </Box>
        <Chip label="Logo animation" onDelete={() => alert('delete')} size='small' sx={{width: "fit-content"}} />
      </Stack> */}
      <br /> <br />
      <Stack direction="row" justifyContent="flex-end">
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

export default Overview;
