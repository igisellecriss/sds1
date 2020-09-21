import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./components/Header";

const Stack = createStackNavigator();
import Home from "./pages/Home";
import CreateRecords from "./pages/CreateRecord";
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#0B1F34",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateRecords" component={CreateRecords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
