import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { RootState } from '../store';
import { stat } from 'fs';
// Define a type for the slice state
export interface UserState {
  id: number;
  nama_lengkap: string;
  email: string;
  roleId: number;
}

// Define the initial state using that type
const initialState: UserState = {
  id: 0,
  nama_lengkap: '',
  email: '',
  roleId: 0,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.nama_lengkap = action.payload.nama_lengkap;
      state.email = action.payload.email;
      state.roleId = action.payload.roleId;
    },

    logoutAction: (state) => {
      state.id = 0;
      state.nama_lengkap = '';
      state.email = '';
      state.roleId = 0;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
