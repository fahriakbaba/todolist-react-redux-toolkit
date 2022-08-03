import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: [
    { id: 1, title: "salad", isCompleted: true },
    { id: 2, title: "meat", isCompleted: false },
    { id: 3, title: "bananas", isCompleted: true },
    { id: 4, title: "kebap", isCompleted: true },
    { id: 5, title: "do homework", isCompleted: false },
    { id: 6, title: "make a cake", isCompleted: true },
  ]
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItemTodos: (state, action) => {
      const newItem = {
        id: Date.now().toString(),
        title: action.payload.title,
        isCompleted: false
      }
      state.items.push(newItem);
    },
    removeItemTodos: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id );
    },
  },
})

export const { addItemTodos, removeItemTodos } = todoSlice.actions
export default todoSlice.reducer
