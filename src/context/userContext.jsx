import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { validatePwd, validateEmail, formValidation } from '../screens/Validation';
import { BASE_URL } from '../utils/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (email, password) => {
    if (validateEmail(email) && formValidation(password)) {
      setIsLoading(true);

      console.log('logging in');

      axios
        .post(`${BASE_URL}/user/login`, {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          const userInfo = res.data;
          setUserInfo(userInfo);

          setUserToken(userInfo.access_token);

          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          AsyncStorage.setItem('userToken', userInfo.access_token);
          // setIsLoading(false);
        })
        .catch((err) => {
          Alert(err.response.data.error.error);
          // setIsLoading(false);
        });

      // setUserToken('fakdjfha');
      //
      setIsLoading(false);
    }
  };

  const register = (first_name, last_name, email, password, date_of_birth, phone, gender) => {
    if (
      first_name !== null &&
      last_name !== null &&
      email !== null &&
      phone !== null &&
      gender !== null &&
      date_of_birth !== null &&
      password !== null
    ) {
      if (validateEmail(email) && validatePwd(password)) {
        setIsLoading(true);
        axios
          .post(`${BASE_URL}/user`, {
            first_name,
            last_name,
            email,
            password,
            date_of_birth,
            phone,
            gender,
          })
          .then((res) => {
            console.log(res.data);
            Alert.alert('Success', res.data.message);

            const userInfo = res.data;

            setUserInfo(userInfo);
            setUserToken(userInfo.access_token);

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.access_token);

            setIsLoading(false);
          })
          .catch((err) => {
            Alert(err);
            setIsLoading(false);
          });
      }
    } else {
      alert('Some field are empty');
    }
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
      const userToken = await AsyncStorage.getItem('userToken');

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

  const newTask = async (title, description, end_time, va_option) => {
    if (
      formValidation(title) &&
      formValidation(description) &&
      formValidation(end_time) &&
      formValidation(va_option)
    ) {
      // setIsLoading(true);

      const payload = {
        title,
        description,
        start_time: new Date(),
        repeat: 'daily',
        end_time,
        va_option,
      };

      console.log(payload);

      axios
        .post(`${BASE_URL}/task`, payload, {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem('userToken')}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          // setIsLoading(false);

          return true;
        })
        .catch((err) => {
          console.log(err.response.data);
          // setIsLoading(false);

          return false;
        });

      return true;
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userInfo, register, newTask }}>
      {children}
    </AuthContext.Provider>
  );
};
