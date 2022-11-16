import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/MainStackNavigator";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <MainStackNavigator />
      </Provider>
    </NavigationContainer>
  );
}
