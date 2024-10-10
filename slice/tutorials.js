import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading : false,
    data: [],
    error: {}

}

const tutorials = createSlice({
  name: 'tutorials',
  initialState,
  reducers: {

    tutorialsRequest : (state,action)=>
    {
        state.isLoading = false;

    },
    tutorialSuc : (state,action)=>{
        state.data = action.payload;
        state.isLoading = false;
    },
    tutorialFail : (state,action)=>{

        state.error = action.payload;
        state.isLoading = false;
    }
  }
});

export const {tutorialsRequest,tutorialFail,tutorialSuc} = tutorials.actions

export default tutorials.reducer