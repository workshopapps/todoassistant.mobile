import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
<<<<<<< HEAD
import {Text, View} from 'react-native';
=======
import {StatusBar, Text, View} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
>>>>>>> 4bde65a2b51603b95ef0896d112d1a2b831e9f49

function App(): JSX.Element {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <View className="bg-white flex-1">
        <Text
          className="text-black text-4xl
      ">
          Hello
        </Text>
      </View>
=======
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
      />
      <MainStackNavigator />
>>>>>>> 4bde65a2b51603b95ef0896d112d1a2b831e9f49
    </NavigationContainer>
  );
}

export default App;
