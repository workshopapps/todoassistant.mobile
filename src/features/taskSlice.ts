// import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// const initTask = {
//   tasks: [],
// };

// export const taskSlice = createSlice({
//   name: 'task',
//   initialState: initTask,
//   reducers: {
//     // createTask: {
//     //   reducer(state, action) {
//     //     state.tasks.push(action.payload);
//     //   },
//     //   prepare(uid, title, desc, start, end) {},
//     // },
//     // getTasks: (state, action) => {
//     //   state.tasks = action.payload;
//     // },
//     editTask: (state, action) => {
//       state.tasks = state.tasks.filter((e) => e.id !== action.payload);
//       state.tasks.push(action.payload);
//     },
//     deleteTask: (state, action) => {
//       state.tasks = state.tasks.filter((e) => e.id !== action.payload);
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(newTask.fulfilled, (state, action) => {
//         state.tasks.push(action.payload);
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.tasks = action.payload;
//       });
//   },
// });

// const baseURL = 'http://api.ticked.hng.tech:2022/';

// export const fetchTasks = createAsyncThunk('task/fetchTasks', async () => {
//   try {
//     await axios.get(`$baseURL/search?q=t`).then((r) => {
//       console.log(r.data);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const newTask = createAsyncThunk('task/newTask', async (initTask) => {
//   try {
//     return await axios.post(`$baseURL/task`, initTask);
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const { createTask, getTasks, editTask, deleteTask } = taskSlice.actions;

// export default taskSlice.reducer;
