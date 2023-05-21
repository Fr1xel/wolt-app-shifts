import { createStackNavigator } from "@react-navigation/stack";
import MyShifts from "../myShifts/MyShifts";
import { NavigationContainer } from "@react-navigation/native";
import { headerNotShown } from "./settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AvailableShifts from "../availableShifts/AvailableShifts";
import BottomTab from "../components/BottomTab";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const Index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={headerNotShown} tabBar={BottomTab}>
        <Stack.Screen name="MyShifts" component={MyShifts} />
        <Stack.Screen name="AvailableShifts" component={AvailableShifts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Index;
