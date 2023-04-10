import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INews } from './types';

interface IState {
  news: INews[];
}

const initialState: IState = {
  news: [],
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setNewsAC: (state: IState, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
  },
});

export const newsReducer = newsSlice.reducer;
export const newsActions = newsSlice.actions;
