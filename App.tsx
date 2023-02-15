import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
>>>>>>> 4bde65a2b51603b95ef0896d112d1a2b831e9f49

import {Provider as PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Provider as PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function App(): JSX.Element {
  return (
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
  );
}

export default App;
