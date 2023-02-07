import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

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
