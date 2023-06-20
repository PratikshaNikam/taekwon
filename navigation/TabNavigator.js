import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";
import HomeScreen from '../screens/Home';
import SessionsScreen from '../screens/Sessions';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
     labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') 
          {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'Sessions') 
          {
            iconName = focused ? 'play' : 'play-outline';
          } else if (route.name === 'Settings') 
          {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Sessions"
        component={SessionsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "black",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;
