import { Provider } from 'react-redux';
import { store } from './src/store';
import Router from './src/router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
