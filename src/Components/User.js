import {
  Button,
  Grid,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import UsersData from "./ListOfUsers";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../features/Users";

console.log(UsersData);
const useStyles = makeStyles({
  field: {
    marginTop: 5,
    marginBottom: 5,
    display: "block",
  },
});

export default function User() {
  const dispatch = useDispatch();
  const UsersData = useSelector((state) => state.users.value);
  const [newUsername, setNewUsername] = useState("");

  const classes = useStyles();
  return UsersData.map((user) => {
    return (
      <>
        <ListItem key={user.id}>
          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <ListItemText primary={user.name} secondary={user.username} />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                className={classes.field}
                label="New username"
                variant="outlined"
                color="secondary"
                onChange={(e) => {
                  setNewUsername(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                onClick={() => {
                  dispatch(
                    updateUsername({
                      id: user.id,
                      username: user.newUsername,
                    })
                  );
                }}
                color="secondary"
                variant="contained"
              >
                Update
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <DeleteIcon
                disable
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                sx={{ color: red[500] }}
                onClick={() => dispatch(deleteUser({ id: user.id }))}
              ></DeleteIcon>
            </Grid>
          </Grid>
        </ListItem>
      </>
    );
  });
}
