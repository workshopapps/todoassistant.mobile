import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { createContext, useEffect, useReducer } from 'react';

import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: JSON.stringify(AsyncStorage.getItem('user')) || null, //if the user had logged in before, the initial state when he comes back to the website will be the "user" jwt already stored in browser. Else, if he hadn't logged in, it'll be null.
  isFetching: false,
  error: false,
  errMessage: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  //storing the user object in the browser whenever it's generated after login
  useEffect(() => {
    AsyncStorage.setItem('user', JSON.stringify(state.user));
    AsyncStorage.setItem('userToken', JSON.stringify(state.user.access_token));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        errMessage: state.errMessage,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
