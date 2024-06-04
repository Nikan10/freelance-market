import {
  Favorite,
  FavoriteOutlined,
  HeartBrokenOutlined,
  HeatPumpRounded,
  StarRateRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

import jason from "../../assets/images/categories/jason-blackeye-XbjM0as0nao-unsplash.jpg";
import cardImage from "../../assets/images/categories/CARD12-1.jpg";
import brochreImage from "../../assets/images/categories/Brochure1.jpg";
import logoImage from "../../assets/images/categories/logo4.jpg";

import { Link } from "react-router-dom";
import request from "../../utils/request";

const GigCard = ({ gig }) => {

    const base64String = btoa(
      String.fromCharCode(
        ...new Uint8Array(gig?.coverImage?.img?.data?.data)
      )
    );

  return (
    <Link to={`/users/${gig?.user?._id}/gigs/${gig?._id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          border: "1px solid #f0f0f0",
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={`data:image/jpeg;base64,${base64String}`}
          alt="Image title"
        />
        <CardContent sx={{ padding: "12px" }}>
          <Box
            sx={{
              marginBottom: "0.8rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar sx={{ width: "2rem", height: "2rem" }} src={jason} />
              <Typography variant="body2" fontWeight={500} sx={{textTransform: "capitalize"}}>
                {gig?.user?.name} {gig?.user?.lastname}
              </Typography>
            </Stack>
          </Box>
          <Typography
            variant="body2"
            fontWeight={400}
            color="black.main"
            sx={{ height: "2.6rem" }}
            gutterBottom
          >
            {gig.title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack
              spacing={0.6}
              direction="row"
              alignItems="flex-end"
            >
              <StarRateRounded sx={{ color: "orange", fontSize: "body2" }} />
              <Typography variant="body2" fontWeight={500}>
                {gig.ratingsAverage}
              </Typography>
            </Stack>
            <Typography fontWeight={500}>
              Price ${gig.price}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GigCard;
