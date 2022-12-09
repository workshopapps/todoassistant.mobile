import AuthReducer from './AuthReducer';
import { createContext, useEffect, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';

const INITIAL_STATE = {
  // user: JSON.parse(SecureStore.getItemAsync('user')) || null, //if the user had logged in before, the initial state when he comes back to the website will be the "user" jwt already stored in browser. Else, if he hadn't logged in, it'll be null.
  isFetching: false,
  error: false,
  errMessage: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  //storing the user object in the browser whenever it's generated after login
  useEffect(() => {
    const user = JSON.stringify(state.user);
    SecureStore.setItemAsync('user', user);
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
