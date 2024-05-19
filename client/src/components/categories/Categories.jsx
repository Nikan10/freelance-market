import React, { useState } from "react";
import {
  Stack,
  Container,
  Link,
  Button,
  ListItemText,
  ListItem,
  List,
  MenuItem,
  Typography,
  Menu,
  Grid,
} from "@mui/material";

import request from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import { MailOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";

const Categories = ({ selectCategory }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.target);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return request.get(`/categories`).then((res) => {
        return res.data;
      });
    },
  });

  const handleCategoryChange = (category) => {
    selectCategory(category);
  };
 
  return (
    <Box
      sx={{
        marginTop: "4rem",
        borderBottom: "1px solid #eee",
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" spacing={1}>
          {data?.categories.map((category) => (
            <Box>
              <Button
                id={`${category.name}-button`}
                sx={{
                  textTransform: "capitalize",
                  color: "black.light",
                  fontWeight: 400,
                }}
                onClick={handleMenuClick}
                aria-controls={menuOpen ? "notifications-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
              >
                {category.name}
              </Button>
              <Menu
                id={`${category.name}-menu`}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                anchorEl={menuAnchorEl}
                open={menuOpen}
                MenuListProps={{ "aria-labelledby": "notifications-button" }}
                onClose={handleMenuClose}
              >
                <Stack
                  sx={{
                    width: "30rem",
                    maxHeight: "24rem",
                    padding: "0.6rem"
                  }}
                >
                  <Grid container>
                    {category?.subCategories.map((subCategory) => (
                      <Grid md={6} item>
                        <MenuItem
                          onClick={handleMenuClose}
                          sx={{
                            color: "black.main",
                            '&:hover': {
                              backgroundColor: "transparent",
                              color: "primary.main"
                            }
                          }}
                        >
                          <Typography variant="body2">{subCategory.name}</Typography>
                        </MenuItem>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Menu>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Categories;
