import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import Loading from '../components/Loading';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabs from './navigator/bottomTab';
import {BackHandler} from 'react-native';
import BasketScreen from '../screens/BasketScreen';
import AccountScreen from '../screens/AccountScreen';
import CampaignScreen from '../screens/CampaignScreen';
import ProductListScreen from '../screens/ProductListScreen';
const RootStack = createNativeStackNavigator();

export const RootStackScreen: FC = () => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <RootStack.Navigator initialRouteName="Loading">
      <RootStack.Screen name="Loading" component={Loading} />
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="BasketScreen" component={BasketScreen} />
      <RootStack.Screen name="AccountScreen" component={AccountScreen} />
      <RootStack.Screen name="CampaignScreen" component={CampaignScreen} />
      <RootStack.Screen
        name="ProductListScreen"
        component={ProductListScreen}
      />
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
