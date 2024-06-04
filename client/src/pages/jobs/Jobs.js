import { LocationOnOutlined, SearchOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Divider,
  FormControlLabel,
  InputAdornment,
  Link,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import request from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

const Jobs = () => {
  const token = Cookies.get('token');
  
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => {
      return request.get(`/users/all/jobs`, {
        headers: {
          "authorization": token
        }
      }).then((res) => {
        return res.data;
      });
    },
  });

  return (
    <Box marginTop="8rem">
      <Container>
        <Stack direction="row" spacing={1}>
          <TextField
            size="small"
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
                  <Button size="small" variant="contained">
                    <SearchOutlined />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Container>
      <br />
      <Container maxWidth="lg">
        <Divider />
      </Container>
      <br />
      <Container
        maxWidth="lg"
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
            sx={{ width: "9rem" }}
            options={["5", "10", "15", "20", "30", "50", "70", "100"]}
            renderInput={(params) => <TextField {...params} label="budget" />}
          />
          <Autocomplete
            size="small"
            sx={{ width: "9rem" }}
            options={["1", "2", "3", "4", "5", "6", "7"]}
            renderInput={(params) => (
              <TextField {...params} label="Delivery time" />
            )}
          />
        </Stack>
      </Container>
      <br /> <br />
      <Container>
        <Divider />
        {data &&
          data.map((job) => (
            <Box key={job._id}>
              <br />
              <Stack spacing={2}>
                <Typography
                  variant="body2"
                  sx={{ color: "black.light", fontWeight: 400 }}
                >
                  Posted 2 hours ago
                </Typography>
                <Link href={`users/${job.buyer._id}/jobs/${job._id}`}>
                  <Typography
                    variant="h5"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    fontWeight={400}
                  >
                    {job.title}
                  </Typography>
                </Link>
                <Stack direction="row" spacing={4}>
                  <Stack direction="row">
                    <Typography variant="body2" sx={{ color: "black.light" }}>
                      Seller level - &nbsp;
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black.light", fontWeight: 500 }}
                    >
                      {job.sellerLevel}
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <Typography variant="body2" sx={{ color: "black.light" }}>
                      Budget - &nbsp;
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black.light", fontWeight: 500 }}
                    >
                      ${job.budget}
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <Typography variant="body2" sx={{ color: "black.light" }}>
                      Days - &nbsp;
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black.light", fontWeight: 500 }}
                    >
                      {job.deliveryTime}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography>
                  {job.description}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <LocationOnOutlined fontSize="body2" />
                  <Typography
                    variant="body2"
                    sx={{ color: "black.light", fontWeight: 400 }}
                  >
                    United Kingdom
                  </Typography>
                </Stack>
              </Stack>
              <br />
              <Divider />
            </Box>
          ))}
        
      </Container>
    </Box>
  );
};

export default Jobs;
