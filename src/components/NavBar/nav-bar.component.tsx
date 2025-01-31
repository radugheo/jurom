import { SearchFileScreen } from "../../screens/search-file.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../../utils/theme";
import { Search, Calendar } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export const NavBar = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { 
        backgroundColor: theme.colors.dark.background,
        borderTopWidth: 0,
        elevation: 0,
        height: 60,
        paddingBottom: 8
      },
      tabBarActiveTintColor: theme.colors.dark.accent,
      tabBarInactiveTintColor: theme.colors.dark.text.primary
    }}
  >
    <Tab.Screen 
        name="Search"
        component={SearchFileScreen}
        options={{
          tabBarIcon: ({color}) => <Search color={color} />
        }}
      />
      <Tab.Screen 
        name="Calendar" 
        component={SearchFileScreen}
        options={{
          tabBarIcon: ({color}) => <Calendar color={color} />
        }}
      />
  </Tab.Navigator>
  );
};