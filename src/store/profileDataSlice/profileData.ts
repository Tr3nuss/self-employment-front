import { createSlice } from "@reduxjs/toolkit";

interface IProfileDataState {
  boolState: boolean;
}

const initialState: IProfileDataState = {
  boolState: false,
};

const profileDataSlice = createSlice({
  name: "profileData",
  initialState,
  reducers: {
    setState: (state) => {
      state.boolState = !state.boolState;
    },
  },
});

export const { setState } = profileDataSlice.actions;
export default profileDataSlice.reducer;
