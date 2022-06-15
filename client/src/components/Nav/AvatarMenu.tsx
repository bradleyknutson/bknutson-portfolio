import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useUserContext } from "../../context/useUserContext";
import Auth from "../../utils/Auth";

export const AvatarMenu = () => {
  const [anchorEl, setAnchorEl]: any = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useUserContext();

  return (
    <>
      <IconButton
        aria-controls={open ? "avatar-menu" : undefined}
        aria-haspopup="true"
        area-expanded={open ? "true" : undefined}
        sx={{ ml: "auto" }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Avatar src="" sx={{ width: 50, height: 50 }}>
          {user.loggedIn ? `${user.firstName[0]}${user.lastName[0]}` : "NA"}
        </Avatar>
      </IconButton>
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={Auth.logout}>Logout</MenuItem>
      </Menu>
    </>
  );
};
