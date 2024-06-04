import {
  Avatar,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import request from "../../utils/request";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const JobProposals = ({ job }) => {

  return (
    <Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell variant="body2" sx={{ color: "black.light" }}>
                  SELLER
                </TableCell>
                <TableCell variant="body2" sx={{ color: "black.light" }}>
                  COVER LETTER
                </TableCell>
                <TableCell variant="body2" sx={{ color: "black.light" }}>
                  SELLER LEVEL
                </TableCell>
                <TableCell variant="body2" sx={{ color: "black.light" }}>
                  RECIEVED ON
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {job?.proposals.map((proposal) => (
                <TableRow
                  key={proposal._id}
                  component={Link}
                  href={`/jobs/${job?._id}/proposals/${proposal?._id}`}
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      backgroundColor: "light.main",
                      cursor: "pointer",
                    },
                  }}
                >
                  <TableCell>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      fontWeight={500}
                    >
                      <Avatar src={proposal?.user?.profile?.photo} />
                      <Typography variant="body2" fontWeight={500}>
                        {proposal?.user?.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {proposal?.coverLetter}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {proposal?.user?.profile?.sellerLevel}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(proposal?.createdAt).toUTCString()}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default JobProposals;
