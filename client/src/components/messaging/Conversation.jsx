import { Avatar, Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import request from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

const Conversation = ({ chat, currentUserId }) => {
  const token = Cookies.get("token");
  let base64String = "";

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const userId = chat?.members.find((id) => id !== currentUserId);
      return request
        .get(`/users/${userId}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          return res.data;
        });
    },
  });
  if (data) {
    base64String = btoa(
      String.fromCharCode(
        ...new Uint8Array(data?.profile?.photo?.img?.data?.data)
      )
    );
  }
  console.log(data)
  return (
    <Stack spacing={2} direction="row">
      <Avatar src={`data:image/jpeg;base64,${base64String}`} />
      <Stack alignItems="flex-start">
        <Typography fontWeight={500} color="black.dark">
          {data?.name} {data?.lastname}
        </Typography>
        <Typography variant="body2">
          {data?.isSeller === true ? "Seller" : "Buyer"}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Conversation;
