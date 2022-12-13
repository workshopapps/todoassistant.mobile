import { Provider } from 'react-redux';

import { AuthContextProvider } from './src/context/AuthContext/authContext';
import TaskContextProvider from './src/context/TaskContext';
import Router from './src/router';
import { store } from './src/store';

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
