import {
  Autocomplete,
  Avatar,
  Button,
  CircularProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import request from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JobDescripiton from "../../components/jobDetails/JobDescripiton";
import JobProposals from "../../components/jobDetails/JobProposals";
import Cookies from "js-cookie";

const JobDetails = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = Cookies.get('token');
  const [description, setDescription] = useState(true);
  const { jobId } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["job"],
    queryFn: () => {
      return request
        .get(`/users/${currentUser._id}/jobs/${jobId}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          return res.data;
        });
    },
  });

//   data?.proposals.map(async (proposal) => {
//     if (typeof proposal.user === "string") {
//       const response = await request.get(`/users/${proposal?.user}`, {
//         headers: {
//           authorization: token,
//         },
//       });
//       proposal.user = response?.data;
//     }
//   });
  console.log(data);
  return (
    <Box padding="6rem 0">
      {isLoading ? (
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        "Something went wrong"
      ) : (
        <Box>
          <Container>
            <Stack direction="row">
              <Button onClick={() => setDescription(true)}>description</Button>
              <Button onClick={() => setDescription(false)}>Proposals</Button>
            </Stack>
            <br />
            <Box>
              {description && <JobDescripiton job={data} />}
              {!description && <JobProposals job={data} />}
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default JobDetails;
