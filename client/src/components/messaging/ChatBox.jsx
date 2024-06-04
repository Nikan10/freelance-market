import React from "react";
import request from "../../utils/request";
import { useQueries } from "@tanstack/react-query";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ChatBox = ({ chat, currentUserId }) => {

  const result = useQueries({
    queries: [
    {
      queryKey: ["user"],
      queryFn: () => {
        return request.get(`/users/${currentUserId}`).then((res) => {
          return res.data;
        });
      },
    },
    {
      queryKey: ["messages"],
      queryFn: () => {
        return request.get(`/message/${chat?._id}`).then((res) => {
          return res.data;
        });
      },
    },
  ]});
  const user = result[0].data
  const messages = result[1].data
  
  return (
    <Box sx={{}}>
      {messages &&
        messages.map((message) => (
          <Box sx={message.sender === currentUserId ? {backgroundColor: "primary.light", padding: "0.6rem", borderRadius: "8px 8px 0 8px", margin: "1rem 0", marginLeft: "40%", borderBottom: "1px solid lightgray"} : {backgroundColor: "light.main", padding: "0.6rem", borderRadius: "8px 8px 8px 0", margin: "1rem 0", marginRight: "40%", borderBottom: "1px solid lightgray"} }>
            <Typography>{message.text}</Typography>
            <Typography variant="caption">{message.createdAt}</Typography>
          </Box>
        ))}
    </Box>
  );
};

export default ChatBox;
