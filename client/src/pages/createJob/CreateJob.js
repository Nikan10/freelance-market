import {
  Autocomplete,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import request from "../../utils/request";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const CreateJob = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = Cookies.get('token');
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [sellerLevel, setSellerLevel] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  let categories = [];
  let categoriesList = [];
  let subCategories = [];
  let subCategoriesList = [];

  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["categries"],
    queryFn: () => {
      return (request.get('/categories').then((res) => {
        return res.data
      }))
    }
  })

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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobDetails = { title, category, subCategory, budget, delivery, sellerLevel, description }
    const response = await request.post(`users/${currentUser._id}/jobs/create`, jobDetails, {
      headers: {
        "authorization": token
      }
    })
    if(response) navigate('/')
  };

  return (
    <Box padding="6rem 0">
      <Container>
        <form onSubmit={handleSubmit}>
          <Box>
            <Typography
              variant="h5"
              color="primary.dark"
              fontWeight={500}
              gutterBottom
            >
              Write a title for your job post
            </Typography>
            <Typography variant="body2" color="black.light">
              This helps your job post stand out to the right candidates. It's
              the first thing they will see, so make it count.
            </Typography>
            <br />
            <TextField
              placeholder="Ex: Web developer needed"
              size="small"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              sx={{ width: "80%", maxWidth: "40rem" }}
            />
          </Box>
          <br /> <br />
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
          <br /> <br />
          <Box>
            <Typography
              variant="h5"
              color="primary.dark"
              fontWeight={500}
              gutterBottom
            >
              Tell us about budget.
            </Typography>
            <Typography variant="body2" color="black.light">
              This will help us match you to talent within your range.
            </Typography>
            <br />
            <Typography
              variant="body2"
              fontWeight={500}
              color="black.light"
              gutterBottom
            >
              Maximum project budget (USD)
            </Typography>
            <TextField
              size="small"
              type="number"
              onChange={(e) => setBudget(e.target.value)}
            />
          </Box>
          <br /> <br />
          <Box>
            <Typography
              variant="h5"
              color="primary.dark"
              fontWeight={500}
              gutterBottom
            >
              Define delivery days
            </Typography>
            <Typography variant="body2" color="black.light">
              This will help us match you to talent within your range.
            </Typography>
            <br />
            <TextField
              size="small"
              type="number"
              onChange={(e) => setDelivery(e.target.value)}
            />
          </Box>
          <br /> <br />
          <Box>
            <Typography
              variant="h5"
              color="primary.dark"
              fontWeight={500}
              gutterBottom
            >
              Which level of talent is better for your job
            </Typography>
            <Typography variant="body2" color="black.light">
              This will help us match you to talent within your range.
            </Typography>
            <br />
            <Autocomplete
              size="small"
              sx={{ width: "12rem" }}
              options={["Entry level", "Intermediate", "Expert"]}
              onChange={(e, value) => setSellerLevel(value)}
              renderInput={(params) => (
                <TextField {...params} label="Seller details" />
              )}
            />
          </Box>
          <br /> <br />
          <Box>
            <Typography
              variant="h5"
              color="primary.dark"
              fontWeight={500}
              gutterBottom
            >
              Now let talents to know What you want
            </Typography>
            <br />
            <Typography variant="body2" fontWeight={500}>
              Talents are looking for:
            </Typography>
            <List>
              <ListItem>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color="black.light"
                >
                  Clear expectations about your tasks or deliverables
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color="black.light"
                >
                  The skills required for your work
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color="black.light"
                >
                  Good communication
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color="black.light"
                >
                  Details about how you or your team like to work
                </Typography>
              </ListItem>
            </List>
            <br />
            <Typography
              variant="body2"
              fontWeight={500}
              color="black.light"
              gutterBottom
            >
              Describe your Job
            </Typography>
            <TextField
              size="small"
              type="number"
              multiline
              rows={6}
              sx={{
                width: "80%",
                maxWidth: "40rem",
              }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <br />
          <Stack direction="row" justifyContent="flex-end">
            <Button
              variant="contained"
              type="submit"
              sx={{ textTransform: "capitalize" }}
            >
              &nbsp; Post job &nbsp;
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default CreateJob;
