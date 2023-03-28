import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: '@@filter',
  initialState: [] as string[],
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => []
  }
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
