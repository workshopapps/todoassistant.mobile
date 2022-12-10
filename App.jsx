import { StripeProvider } from '@stripe/stripe-react-native';
import { Provider } from 'react-redux';

import { AuthProvider } from './src/context/userContext';
import Router from './src/router';
import { store } from './src/store';

const App = () => {
  return (
    <StripeProvider
      publishableKey=""
      merchantIdentifier="" // required for Apple Pay
    >
      <AuthProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </AuthProvider>
    </StripeProvider>
  );
};

export default App;
