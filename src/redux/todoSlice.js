import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: JSON.parse(localStorage.getItem("items")) || [],
}

export const todoSlice = createSlice({
  name: 'todo',
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
    toggleItemTodos: (state, action) => {
      const findItem = state.items.find(item => item.id === action.payload.id );
      findItem.isCompleted = action.payload.isCompleted;
    }
  },
})

export const { addItemTodos, removeItemTodos, toggleItemTodos } = todoSlice.actions
export default todoSlice.reducer
