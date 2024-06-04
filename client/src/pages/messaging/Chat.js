import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/system";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useSelector } from "react-redux";
import request from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Conversation from "../../components/messaging/Conversation";
import ChatBox from "../../components/messaging/ChatBox";

const Chat = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [currentChat, setCurrentChat] = useState(null)
  const token = Cookies.get("token");
  const [chats, setChats] = useState([]);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["chats"],
    queryFn: () => {
      return request
        .get(`/chat/${currentUser?._id}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          return res.data;
        });
    },
  });
  if(data) console.log(currentUser?._id);
  if(data) console.log(data);
  return (
    <Box sx={{ backgroundColor: "light.light" }}>
      <Stack
        direction="row"
        spacing={2}
        height="100vh"
        sx={{ padding: "1rem", paddingTop: "5rem" }}
      >
        <Stack
          sx={{
            width: "20rem",
            backgroundColor: "#fff",
            height: "100%",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" padding="2rem">
            Chats
          </Typography>
          <Box padding={2}>
            <Stack spacing={2}>
              {data && data.map((chat) => (
                  <Button
                    key={chat._id}
                    sx={{
                      textTransform: "capitalize",
                      color: "gray",
                      justifyContent: "flex-start",
                    }}
                    onClick={() => setCurrentChat(chat)}
                  >
                    <Conversation
                      chat={chat}
                      currentUserId={currentUser?._id}
                    />
                  </Button>
                ))}
            </Stack>
          </Box>
        </Stack>
        <Stack
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            height: "100%",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <Stack marginBottom="0.6rem">
            <Avatar />
          </Stack>
          <Divider />
          <Box sx={{ flex: 1 }}>
            <ChatBox chat={currentChat} currentUserId={currentUser?._id} />
          </Box>
          <Stack spacing={4} direction="row" padding="0.2rem">
            <Button>
              <Add />
            </Button>
            <TextField
              sx={{ flex: 1 }}
              placeholder="Type a message ..."
              size="small"
            />
            <Button variant="contained" sx={{ textTransform: "capitalize" }}>
              Send
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
