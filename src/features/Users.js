import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../Components/ListOfUsers";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      //code
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      //code
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      //code
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
