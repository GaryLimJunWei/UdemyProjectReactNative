import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './screens/ComponentsScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';
import SquareScreenReducer from './screens/SquareScreenReducer';
import CounterWithReducer from './screens/CounterWithReducer';
import TextScreen from './screens/TextScreen';
import BoxScreen from './screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    List:ListScreen,
    Components: ComponentsScreen,
    Image : ImageScreen,
    Counter : CounterScreen,
    Color : ColorScreen,
    Square: SquareScreen,
    SquareReducer : SquareScreenReducer,
    CounterReducer : CounterWithReducer,
    Text : TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);


export default createAppContainer(navigator);