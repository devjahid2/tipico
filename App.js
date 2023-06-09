import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./screens/OnBoarding";
import TabBarIcon from "./components/tabBarIcon";
import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeStack from "./navigations/authenticated/Home";
import SummaryStack from "./navigations/authenticated/SummaryStack";
import ProfileStack from "./navigations/authenticated/ProfileStack";
import ScanStack from "./navigations/authenticated/ScanStack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

  export const AppContext = React.createContext({user:false});

const App = () => {
  const [user, setUser] = React.useState(false);
  return (
    <AppContext.Provider value={[user, setUser]}>
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
          <Tab.Screen name="ScanStack" component={ScanStack}/>
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
  </AppContext.Provider>
  );
};

export default App;
