import { Provider } from 'react-redux';
import { store } from './src/store';
import Router from './src/router';
import { AuthContextProvider } from './src/context/AuthContext/authContext';
import TaskContextProvider from './src/context/TaskContext';

const App = () => {
  return (
    <AuthContextProvider>
      <TaskContextProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </TaskContextProvider>
    </AuthContextProvider>
  );
};

export default App;
