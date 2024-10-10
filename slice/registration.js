import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    data:{},
    isLoading:false,
    error: {},
    Logindata: {}
}

const registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {

    UserRequest : (state,action)=>{
      state.isLoading = true
    },

    UserSuc : (state,action)=>{
      state.isLoading = false,
      state.data = action.payload;

    },

    UserError : (state,action)=>{
      state.isLoading = false,
      state.error = action.payload;
    },

    LoginRequest: (state,action)=>{
      state.isLoading = true

    },

    LoginSuc : (state,action)=>{
      state.isLoading = false,
      state.Logindata = action.payload;

    },

    LoginError : (state,action)=>{
      state.isLoading = false,
      state.error = action.payload;
    },



  }
});

export const {UserRequest,UserSuc,UserError,LoginRequest,LoginSuc,LoginError} = registration.actions

export default registration.reducer