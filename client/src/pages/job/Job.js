import {
  Button,
  Card,
  Dialog,
  Divider,
  IconButton,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import request from "../../utils/request";
import { useParams } from "react-router-dom";
import {
  Add,
  AttachFile,
  AttachFileOutlined,
  AttachMoneyOutlined,
  CloseOutlined,
  Done,
  LockClockOutlined,
  MoneyOutlined,
  NavigateNext,
  PriceChangeOutlined,
  PriceCheckOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const Job = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const token = Cookies.get('token');
  const [apply, setApply] = useState(false);
  const [coverLetter, setCoverLetter] = useState('')
  const [portfolioLink, setPortfolioLink] = useState('')
  const [images, setImages] = useState([]);
  const [sent, setSent] = useState(false)
  const {JobId} = useParams()
  // let applied = false

  const { id, jobId } = useParams();
  const photoInputRef = useRef(null);


  const handleClick = () => {
    photoInputRef.current.click();
  }

  const handleImagesChange = (event) => {
    setImages(Array.from(event.target.files));
  }

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["myProposals"],
  //   queryFn: () => {
  //     return request.get(`/users/${currentUser?._id}/proposals`, {
  //       headers: {
  //         "authorization": token
  //       }
  //     }).then((res) => {
  //       return res.data;
  //     });
  //   },
  // });

  // const queriesResults = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["myProposals"],
  //       queryFn: async () => {
  //         return await request.get(`/users/${currentUser?._id}/proposals`, {
  //           headers: {
  //             "authorization": token
  //           }
  //         }).then((res) => {
  //           return res.data;
  //         });
  //       },
  //     },
  //     {
  //       queryKey: ["job"],
  //       queryFn: async () => {
  //         return await request.get(`/users/${id}/jobs/${jobId}`).then((res) => {
  //           return res.data;
  //         });
  //       },
  //     }
  //   ]
  // });

  // const myProposals = queriesResults[0];
  // const job = queriesResults[1]


  // if(sent === false) {
  //   setSent(myProposals?.data.some(proposal => job.data.proposals.includes(proposal.id)))
  //   console.log(sent)
  // }

  const job = useQuery({
    queryKey: ["job"], 
    queryFn: () => {
      return request
        .get(
          `/users/${id}/jobs/${jobId}`,
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => {
          return res.data;
        });
    },
  });

  const myProposals = useQuery({
    queryKey: ["myProposals", job.data],
    queryFn: () => {
      return request
        .get(
          `/users/${currentUser?._id}/proposals`,
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => {
          return res.data;
        });
    },
    enabled: !!job.data
  });

  if(job.data && myProposals.data) {
    myProposals?.data.map((proposal) => {
      return job?.data?.proposals.map((jobProp) => {
        if(proposal._id === jobProp._id) console.log('true');
      })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataCollection = new FormData()

    dataCollection.append('coverLetter', coverLetter)
    dataCollection.append('link', portfolioLink)
    console.log(jobId)
    images.map((image) => (
      dataCollection.append('images', image)
    ))
    
    const response = await request.post(`/users/${currentUser?._id}/jobs/${jobId}/proposals/create`, dataCollection, {
      headers: {
        "Content-Type": 'multipart/form-data',
        "authorization": token
      }
    })
    if(response) setSent(true);
  }

  return (
    <Box padding="6rem 0">
      <Container>
        <Typography variant="h5" fontWeight={500}>
          {job?.data?.title}
        </Typography>
        <br />
        <Typography
          variant="body2"
          sx={{ color: "black.light" }}
          fontWeight={400}
        >
          Posted {new Date(job?.data?.startDate).getHours()} hours ago
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography sx={{ maxWidth: "48rem" }}>{job?.data?.description}</Typography>
        <br />
        <Divider />
        <br />
        <Stack direction="row" justifyContent="space-around">
          <Stack direction="row" spacing={1}>
            <AttachMoneyOutlined />
            <Stack>
              <Typography fontWeight={500}>${job?.data?.budget}.00</Typography>
              <Typography variant="body2" color="black.light">
                Fixed-price
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <LockClockOutlined />
            <Stack>
              <Typography fontWeight={500}>{job?.data?.sellerLevel}</Typography>
              <Typography variant="body2" color="black.light">
                Experience Level
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <br />
        <Divider />
        <br />
        <Typography variant="h6">About the client</Typography>
        <Typography variant="body2" font>
          United States
        </Typography>
        <Typography variant="body2">New York</Typography>
        <Typography variant="body2">Member since Apr 3, 2020</Typography>
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
          borderTopColor: "primary.main",
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Box></Box>
            {sent ? (<Button disabled variant="contained" sx={{textTransform: "capitalize"}} onClick={() => setApply(true)}>
              &nbsp; &nbsp; Applied &nbsp; &nbsp;
            </Button>)
            :
            (<Button variant="contained" sx={{textTransform: "capitalize"}} onClick={() => setApply(true)}>
              &nbsp; Apply Now &nbsp;
            </Button>)}
          </Stack>
        </Container>
      </Box>
      <Dialog maxWidth="md" open={apply} onClose={() => setApply(false)}>
        <Paper sx={{ minWidth: "38rem", maxWidth: "42rem" }}>
          <Stack direction="row" alignItems="center" padding="0.2rem" justifyContent="space-between">
            <Box></Box>
            <IconButton onClick={() => setApply(false)}>
              <CloseOutlined
                sx={{ color: "black.light" }}
                fontSize="0.6rem"
                justifyContent="center"
              />
            </IconButton>
          </Stack>
          {!sent ? (<form onSubmit={handleSubmit}>
            <Stack sx={{ padding: "1.6rem", paddingTop: 0 }} spacing={1}>
              <Typography variant="h6">Cover Letter</Typography>
              <TextField focused onChange={(e) => setCoverLetter(e.target.value)} helperText="Maximum 1000 words" multiline rows={7} />
              <Stack spacing={1}>
                <Typography fontWeight={500}>Attachments</Typography>
                <TextField onChange={(e) => setPortfolioLink(e.target.value)} size="small" placeholder="Portfolio link here..." type="text" />
                <input type='file' multiple accept="image/*" ref={photoInputRef} style={{display: "none"}} onChange={handleImagesChange} />
                <Button onClick={handleClick} variant='outlined' size="small" sx={{textTransform: "capitalize", width: "fit-content"}} startIcon={<AttachFileOutlined />}>Attach files</Button>
                <Typography variant="caption" maxWidth="22rem" color="black.main">You may attach up to 6 files under the size of 10MB each. Do not attach your resume your work profile is atomatically forwarded to the client with your proposal. </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Box></Box>
                <Button type="submit" sx={{textTransform: "capitalize"}} variant="contained" size="small">Send Proposal</Button>
              </Stack>
            </Stack>
          </form>)
          :
          (<Stack spacing={5} alignItems="center" padding="4rem 0">
            <Done sx={{backgroundColor: "primary.main", borderRadius: "100px", padding: "12px", fontSize: "8rem", color: "#fff"}} />
            <Button onClick={() => setApply(false)} variant="contained">&nbsp; Done &nbsp;</Button>
          </Stack>)}
        </Paper>
      </Dialog>
    </Box>
  );
}

export default Job;
