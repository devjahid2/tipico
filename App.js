import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./screens/OnBoarding";
import Home from "./screens/Authenticated/Home";
import TabBarIcon from "./components/tabBarIcon";
import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeStack from "./navigations/authenticated/Home";
import SummaryStack from "./navigations/authenticated/SummaryStack";
import ProfileStack from "./navigations/authenticated/ProfileStack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = React.useState(true);
  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator screenOptions={ ({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <TabBarIcon focused={focused} name={route.name}/>
          },
          tabBarLabelStyle:{
            display:'none'
          }
        })} 
        
        >
          <Tab.Screen name="HomeStack" component={HomeStack}/>
          <Tab.Screen name="Scan" component={Home}/>
          <Tab.Screen name="SummaryStack" component={SummaryStack}/>
          <Tab.Screen name="Profile" component={ProfileStack}/>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="OnBoarding">
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
      <StatusBar backgroundColor="#362F74" style="light" />
    </NavigationContainer>
  );
};

export default App;
