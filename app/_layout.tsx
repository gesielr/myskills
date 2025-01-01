import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import SkillScreen from './SkillScreen';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MainScreen} />
      <Tab.Screen name="Habilidades" component={SkillScreen} />
    </Tab.Navigator>
  );
}
