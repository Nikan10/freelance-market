import React, { useRef, useState } from "react";
import request from "../../utils/request";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "@tanstack/react-query";

import {
  Stack,
  Chip,
  Link,
  Typography,
  TextField,
  Container,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  FormControlLabel,
  Switch,
  Autocomplete,
  Divider,
  Avatar,
  InputAdornment,
} from "@mui/material";
import { SearchOutlined, StarRateRounded } from "@mui/icons-material";

import jason from "../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg";
import stormseeker from "../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg";

import Categories from "../../components/categories/Categories";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";

import GigCard from "../../components/gigCard/GigCard";
import Footer from "../../components/footer/Footer";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const cards2 = [1, 2, 3, 4, 5, 6, 8];

const Home = () => {
  const [sort, setSort] = useState("price");
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [search, setSearch] = useState("");

  let subCategory = "";
  let maxBudget = "";
  let delivery = "";

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () => {
      return request
        .get(
          `/users/all/gigs?search=${search}&subCategory=${subCategory}&max=${maxBudget}&delivery=${delivery}`
        )
        .then((res) => {
          return res.data;
        });
    },
  });

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchFor = () => {
    refetch();
  };
  const selectCategory = (cat) => {
    subCategory = cat;
    refetch();
  };
  const handleBudgetChange = (event, value) => {
    maxBudget = value;
    refetch();
  };
  const handleDeliverChange = (event, value) => {
    delivery = value;
    refetch();
  };

  return (
    <Box>
      <Categories selectCategory={selectCategory} />
      <br />
      <Container maxWidth="xl" className="home">
        <BreadCrumb />
        <br /> <br />
        <Container>
          <Stack direction="row" spacing={1}>
            <TextField
              size="small"
              onChange={handleSearch}
              placeholder="Search for service ..."
              type="text"
              sx={{
                width: "26rem",
                "& .css-1em6vxu-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  paddingRight: "5px",
                  paddingLeft: "4px",
                },
                "& .css-11snfn0-MuiButtonBase-root-MuiButton-root": {
                  borderRadius: "25px",
                  boxShadow: "none",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      size="small"
                      onClick={searchFor}
                      variant="contained"
                    >
                      <SearchOutlined />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Container>
        <br />
        {/* <Container>
        <Typography variant='h4' fontWeight={600}>Logo Design</Typography>
        <Typography>Stand out from the crowd with a logo that fits your brand personality.</Typography>
      </Container>
      <br/>
      <Container maxWidth="xl">
        <Typography variant='h6' maxWidth="lg" fontWeight={600} marginBottom="1rem">Select logo style</Typography>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Hand-drawn</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Minimalist</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Vintage</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >Cartoon</Button>
          <Button startIcon={<Avatar src={jason} />} variant="outlined" sx={{borderRadius: "25px", borderColor: "lightgray", fontSize: "0.8rem", color: "black", paddingLeft: "10px", textTransform: "capitalize", fontWeight: 600}} >3D</Button>
        </Stack>
      </Container> */}
        <br />
        <Container maxWidth="xl">
          <Divider />
        </Container>
        <br />
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Stack direction="row" spacing={1}>
            <Autocomplete
              size="small"
              sx={{ width: "9rem" }}
              options={["AFG", "IRN", "PAK"]}
              renderInput={(params) => (
                <TextField {...params} label="Logo options" />
              )}
            />
            <Autocomplete
              size="small"
              sx={{ width: "9rem" }}
              options={["AFG", "IRN", "PAK"]}
              renderInput={(params) => (
                <TextField {...params} label="Seller details" />
              )}
            />
            <Autocomplete
              size="small"
              onChange={handleBudgetChange}
              sx={{ width: "9rem" }}
              options={["5", "10", "15", "20", "30", "50", "70", "100"]}
              renderInput={(params) => <TextField {...params} label="$ budget" />}
            />
            <Autocomplete
              size="small"
              onChange={handleDeliverChange}
              sx={{ width: "9rem" }}
              options={["1", "2", "3", "4", "5", "6", "7"]}
              renderInput={(params) => (
                <TextField {...params} label="Delivery days" />
              )}
            />
          </Stack>

          <FormControlLabel label="Pro srvices" control={<Switch />} />
        </Container>
        <br /> <br />
        <Container maxWidth="xl">
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Typography color="gray" sx={{ flexGrow: 1 }}>
              250000+ services available
            </Typography>
            <Autocomplete
              size="small"
              sx={{ width: "11rem", border: 0 }}
              value="Best selling"
              options={["Best selling", "Online", "New"]}
              renderInput={(params) => (
                <TextField {...params} sx={{ border: 0 }} />
              )}
            />
          </Stack>
        </Container>
        <br />
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {isPending
              ? "loading"
              : error
              ? "Something went wrong"
              : data.map((gig, i) => (
                  <Grid
                    item
                    key={gig._id}
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2.4}
                    xl={2}
                  >
                    <GigCard gig={gig} />
                  </Grid>
                ))}
          </Grid>
        </Container>
        <br />
        {/* <Container
          maxWidth="xl"
          sx={{ backgroundColor: "#eee", padding: "4rem 0" }}
        >
          <Typography variant="h6" fontWeight={600}>
            Most popular gigs in <Link>Logo Design</Link>
          </Typography>
          <br />
          <Carousel responsive={responsive}>
            {data.map((gig) => {
              if(gig.subCategory === subCategory) {
                return (
                  <Box sx={{margin: "0.6rem"}}>
                    <GigCard gig={gig} />
                  </Box>
                )
              } else if (gig.subCategory === '66477a6c2a2f569ad8623dd1') {
                return (
                  <Box sx={{margin: "0.6rem"}}>
                    <GigCard gig={gig} />
                  </Box>
                )
              }
            })}
          </Carousel>
        </Container> */}
        <br />
        <Container maxWidth="xl">
          <Divider />
        </Container>
        <br />
        <Container maxWidth="md">
          <Stack sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Explore More Logo Design Services
            </Typography>

            <Box textAlign="center">
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="Logo animation"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="Modern logo design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="Vintage logo design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="Water color design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="PDF logo design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="SVG logo design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="PNG logo design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="PNG logo design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="PNG logo design"
              />
              <Chip
                sx={{ margin: "0.4rem", color: "gray" }}
                label="PNG logo design"
              />
            </Box>
          </Stack>
        </Container>
        <br />
        <Container maxWidth="xl">
          <Divider />
        </Container>
        <br /> <br />
        <Container maxWidth="xl">
          <Stack sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Logo Design FAQs
            </Typography>
          </Stack>
          <br />
          <Grid columnSpacing={8} rowSpacing={4} container>
            <Grid lg={6} sm={12} item>
              <Typography fontWeight={600}>What is logo dsign?</Typography>
              <Typography variant="body2" color="gray">
                ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws
                hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc
              </Typography>
            </Grid>
            <Grid lg={6} sm={12} item>
              <Typography fontWeight={600}>What is logo dsign?</Typography>
              <Typography variant="body2" color="gray">
                ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws
                hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc
              </Typography>
            </Grid>
            <Grid lg={6} sm={12} item>
              <Typography fontWeight={600}>What is logo dsign?</Typography>
              <Typography variant="body2" color="gray">
                ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws
                hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc
              </Typography>
            </Grid>
            <Grid lg={6} sm={12} item>
              <Typography fontWeight={600}>What is logo dsign?</Typography>
              <Typography variant="body2" color="gray">
                ajhsskahb xs sajb shb xhsbxb xhjcbisuwo jsih ush hsu shaiusgh ws
                hgzuisaijsb xsugxh sjhcvs hxguysai sj sgss hsyhygxc
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
