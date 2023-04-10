import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filesReducer from './slices/filesSlice';
import screenReducer from './slices/screenSlice';
import sidebarReducer from './slices/sidebarSlice';
import themeReducer from './slices/themeSlice';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';


export const reducers = combineReducers({
  files: filesReducer,
  screen: screenReducer,
  sidebar: sidebarReducer,
  theme: themeReducer,
});



const persistConfig = {
  key: 'files',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
