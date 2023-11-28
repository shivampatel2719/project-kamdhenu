// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SellScreen from '../screens/SellScreen';
import CommunityScreen from '../screens/CommunityScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SvgUri from 'react-native-svg';
import CowIconSVG from '../../assets/icons/cow-silhouette-svgrepo-com.svg';
import HomeScreenHeader from '../headers/HomeScreenHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => (
          <HomeScreenHeader navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );

const SellStack= () => (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => (
          <HomeScreenHeader navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="SellStack" component={SellScreen} />
    </Stack.Navigator>
  );

const Navigation = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Buy') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'Sell') {
                // return <SvgUri source={CowIconSVG} width={size} height={size} fill={color} />;
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Community') {
                iconName = focused ? 'people' : 'people-outline';
              }
  
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false
          })}
          tabBarOptions={{
            activeTintColor: '#3498db', // Color for the selected tab
            inactiveTintColor: 'gray', // Color for inactive tabs
            style: {
              backgroundColor: 'white', // Background color for the bottom tab bar
            }
          }}>
          <Tab.Screen name="Buy" component={HomeStack} />
          <Tab.Screen name="Sell" component={SellStack} />
          <Tab.Screen name="Community" component={CommunityScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

export default Navigation;
