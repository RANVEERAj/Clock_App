import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Alarm from "../Screen/Alarm"
import Homescreen from '../Screen/Homescreen';
import Reminder from '../Screen/Reminder';
import WeatherScreen2 from '../Screen/WeatherScreen2';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Alarm"
        component={Alarm}
        options={{ tabBarLabel: 'Alarm' }}
      />
      <Tab.Screen
        name="Reminder"
        component={Reminder}
        options={{ tabBarLabel: 'Reminder' }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen2}
        options={{ tabBarLabel: 'Weather' }}
      />
    </Tab.Navigator>
  );
}
export default TopTabNavigator;