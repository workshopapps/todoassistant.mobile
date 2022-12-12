
import { Provider } from 'react-redux';

import { AuthProvider } from './src/context/userContext';
import Router from './src/router';
import { store } from './src/store';

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
