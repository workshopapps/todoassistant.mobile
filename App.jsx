import { Provider } from 'react-redux';
import { store } from './src/store';
import Router from './src/router';
import { AuthProvider } from './src/context/userContext';

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </AuthProvider>
  );
};

export default App;
