import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from 'types/card';

const positionSlice = createSlice({
  name: '@@position',
  initialState: [] as ICard[],
  reducers: {
    addPositions: (_, action: PayloadAction<ICard[]>) => action.payload
  }
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;
