import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { addUser } from "../features/Users";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 30,
    display: "block",
  },
});

export default function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const classes = useStyles();
  return (
    <Box
      sx={{
        width: 100,
        maxWidth: "100%",
      }}
    >
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create new user
      </Typography>

      <form noValidate autoComplete="off">
        <TextField
          className={classes.field}
          fullWidth
          label="Name"
          variant="outlined"
          color="secondary"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></TextField>
        <TextField
          className={classes.field}
          fullWidth
          label="Username"
          variant="outlined"
          color="secondary"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></TextField>
      </form>
      <Button
        onClick={() => {
          dispatch(addUser({ id: nanoid(), name: name, username: username }));
        }}
        color="secondary"
        variant="contained"
        endIcon={<ArrowForwardIcon></ArrowForwardIcon>}
      >
        ADD
      </Button>
    </Box>
  );
}
