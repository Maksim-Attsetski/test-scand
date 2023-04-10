import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsReducer } from 'widgets/News';

const rootReducer = combineReducers({
  news: newsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
