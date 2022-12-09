import { Provider } from 'react-redux';
import { store } from './src/store';
import Router from './src/router';
import { AuthContextProvider } from './src/context/AuthContext/authContext';

const App = () => {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </AuthContextProvider>
  );
};

export default App;
