
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, SearchScreen } from '../screens';

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Search" component={SearchScreen} />
        </Drawer.Navigator>
    )
}