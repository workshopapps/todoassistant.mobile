import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View className="bg-white flex-1">
        <Text
          className="text-black text-4xl
      ">
          Hello
        </Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
