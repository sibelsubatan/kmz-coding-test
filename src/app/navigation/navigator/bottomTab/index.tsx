/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '@app/theme';
import {
  Bag,
  Home3,
  ProfileCircle,
  SearchNormal,
  Tag,
} from 'iconsax-react-native';
import HomeScreen from '@app/screens/HomeScreen';
import SearchScreen from '@app/screens/SearchScreen';
import BasketScreen from '@app/screens/BasketScreen';
import CampaignScreen from '@app/screens/CampaignScreen';
import AccountScreen from '@app/screens/AccountScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = (): React.JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.BOTTOM_NAV_COLOR,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Home3
              variant={focused ? 'Bold' : 'Linear'}
              color={theme.colors.BACKGROUND}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <SearchNormal
              variant={focused ? 'Bold' : 'Linear'}
              color={theme.colors.BACKGROUND}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Bag
              variant={focused ? 'Bold' : 'Linear'}
              color={theme.colors.BACKGROUND}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CampaignScreen"
        component={CampaignScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Tag
              variant={focused ? 'Bold' : 'Linear'}
              color={theme.colors.BACKGROUND}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <ProfileCircle
              variant={focused ? 'Bold' : 'Linear'}
              color={theme.colors.BACKGROUND}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
