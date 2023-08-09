import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    sort: '',
    page: 1,
  },
  reducers: {
    setParams: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
});

export const { setParams, setPage } = userSlice.actions;
export default userSlice.reducer;