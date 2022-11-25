import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

import { BASE_URL } from '../utils/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.access_token);

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userInfo.access_token);
      })
      .catch((err) => {
        console.log(err);
      });

    // setUserToken('fakdjfha');
    //
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');

      userInfo = JSON.parse(userInfo);

      if (userInfo && userToken) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }

      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
