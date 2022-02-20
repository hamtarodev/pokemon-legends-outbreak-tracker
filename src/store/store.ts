import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import trackerSlice from '../components/tracker/trackerSlice';

const middlewares = [thunk];

const reducers = combineReducers({
  tracker: trackerSlice
});

export const store = createStore(
  reducers, composeWithDevTools(applyMiddleware(...middlewares))
);

export type Rootstate = ReturnType<typeof store.getState>;