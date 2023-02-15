/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

import {Provider as PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <MainStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
