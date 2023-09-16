import {createSlice} from '@reduxjs/toolkit'

const planesSlice = createSlice({
  name: 'planes',

  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: ''
  },

  // reducers: {
  //
  // }
})

export default planesSlice.reducer