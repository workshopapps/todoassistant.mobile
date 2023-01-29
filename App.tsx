import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, View} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
      />
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
