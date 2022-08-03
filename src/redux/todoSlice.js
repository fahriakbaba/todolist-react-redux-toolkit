import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: [
    {id:1, title: "salad", isCompleted: true },
    {id:2, title: "meat", isCompleted: false },
    {id:3, title: "bananas", isCompleted: true },
    {id:4, title: "kebap", isCompleted: true },
    {id:5, title: "do homework", isCompleted: false },
    {id:6, title: "make a cake", isCompleted: true },
]
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  }
})

//export const { } = todoSlice.actions

export default todoSlice.reducer
// export const {} = todoSlice.actions;