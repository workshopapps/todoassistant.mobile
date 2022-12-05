// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import React, { createContext, useState, useEffect } from 'react';
// import { Alert } from 'react-native';

// import { formValidation } from '../screens/Validation';
// import { BASE_URL } from '../utils/config';

// export const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
// //   const [isLoading, setIsLoading] = useState(false);

//   const newTask = async (title, description, end_time, va_option) => {
//     if (
//       formValidation(title) &&
//       formValidation(description) &&
//       formValidation(end_time) &&
//       formValidation(va_option)
//     ) {
//     //   setIsLoading(true);

//       const payload = {
//         title,
//         description,
//         start_time: new Date(),
//         repeat: 'daily',
//         end_time,
//         va_option,
//       };
//       console.log(payload);
//       axios
//         .post(`${BASE_URL}/task`, payload, {
//           headers: {
//             Authorization: `Bearer ${await AsyncStorage.getItem('userToken')}`,
//           },
//         })
//         .then((response) => {
//           console.log(response.data);
//           return true;
//         })
//         .catch((err) => {
//           console.log(err.response.data);
//           return false;
//         });

//     //   setIsLoading(false);
//     }
//   };

//   useEffect(() => {}, []);

//   return <TaskContext.Provider value={{ newTask }}>{children}</TaskContext.Provider>;
// };
