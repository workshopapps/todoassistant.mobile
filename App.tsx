/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

import {Provider as PaperProvider} from 'react-native-paper';

import {store} from './src/app/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <MainStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
