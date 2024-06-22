import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

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
