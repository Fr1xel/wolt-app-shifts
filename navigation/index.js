import { createStackNavigator } from "@react-navigation/stack";
import MyShifts from "../myShifts/MyShifts";
import { NavigationContainer } from "@react-navigation/native";
import { headerNotShown } from "./settings";

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerNotShown}>
        <Stack.Screen name="MyShifts" component={MyShifts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
