import { AttachMoneyOutlined, LockClockOutlined } from "@mui/icons-material";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

const JobDescripiton = ({ job }) => {
  return (
    <Box>
        <Typography variant="h5" fontWeight={500}>
          {job?.title}
        </Typography>
        <br />
        <Typography
          variant="body2"
          sx={{ color: "black.light" }}
          fontWeight={400}
        >
          Posted {new Date(job?.startDate).getHours()} hours ago
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography sx={{ maxWidth: "48rem" }}>
          {job?.description}
        </Typography>
        <br />
        <Divider />
        <br />
        <Stack direction="row" justifyContent="space-around">
          <Stack direction="row" spacing={1}>
            <AttachMoneyOutlined />
            <Stack>
              <Typography fontWeight={500}>${job?.budget}.00</Typography>
              <Typography variant="body2" color="black.light">
                Fixed-price
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <LockClockOutlined />
            <Stack>
              <Typography fontWeight={500}>{job?.sellerLevel}</Typography>
              <Typography variant="body2" color="black.light">
                Experience Level
              </Typography>
            </Stack>
          </Stack>
        </Stack>
    </Box>
  );
};

export default JobDescripiton;
