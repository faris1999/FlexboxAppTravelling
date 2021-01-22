import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Order from './screens/Order'
import Pesan from './screens/Pesan'
import Beranda from './screens/Beranda'
import Profile from './screens/Profile';



export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search-outline" color={tintColor} size={24} />
      )
    }
  },
  Order: {
    screen: Order,
    navigationOptions: {
      tabBarLabel: 'ORDER',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
  },
  Beranda: {
    screen: Beranda,
    navigationOptions: {
      tabBarLabel: 'Beranda',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Pesan: {
    screen: Pesan,
    navigationOptions: {
      tabBarLabel: 'PESAN',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFIL',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});