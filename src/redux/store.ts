import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filesReducer from './slices/filesSlice';
import screenReducer from './slices/screenSlice';
import sidebarReducer from './slices/sidebarSlice';
import themeReducer from './slices/themeSlice';

export const reducers = combineReducers({
  files: filesReducer,
  screen: screenReducer,
  sidebar: sidebarReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
