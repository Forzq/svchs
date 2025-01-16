import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
};

const cactusSlice = createSlice({
  name: 'cactus',
  initialState,
  reducers: {
    addcactus(state, action) {
      state.items.push(action.payload);
    },
    updatecactus(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      } else {
        state.error = 'cactus item not found';
      }
    },
    removecactus(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addcactus, updatecactus, removecactus, setError } = cactusSlice.actions;
export default cactusSlice.reducer;