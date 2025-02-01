import { SearchFileScreen } from "../../screens/search-file.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search, Calendar } from 'lucide-react-native';
import { useTheme } from "../../hooks/use-theme";

const Tab = createBottomTabNavigator();

export const NavBar = () => {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { 
        backgroundColor: theme.colors.background,
        borderTopWidth: 0,
        elevation: 0,
        height: 60,
        paddingBottom: 8
      },
      tabBarActiveTintColor: theme.colors.accent,
      tabBarInactiveTintColor: theme.colors.text.primary
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