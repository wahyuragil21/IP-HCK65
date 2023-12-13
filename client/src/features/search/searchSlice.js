import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  search : ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    //   console.log(state.search);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearch  } = searchSlice.actions

export default searchSlice.reducer