import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
<<<<<<< HEAD
<<<<<<< HEAD
import {Text, View} from 'react-native';
=======
import {StatusBar, Text, View} from 'react-native';
=======
import {StatusBar} from 'react-native';
>>>>>>> c9e20a54b1741d80fef0d8d7ebd6bb8c5639336c
import MainStackNavigator from './src/navigation/MainStackNavigator';
>>>>>>> 4bde65a2b51603b95ef0896d112d1a2b831e9f49

import {Provider as PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function App(): JSX.Element {
  return (
<<<<<<< HEAD
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
=======
    <PaperProvider
      // settings={{
      //   icon: props => [<IonIcon {...props} />, <Icon {...props} />],
      // }}
      >
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <MainStackNavigator />
      </NavigationContainer>
    </PaperProvider>
>>>>>>> c9e20a54b1741d80fef0d8d7ebd6bb8c5639336c
  );
}

export default App;
