import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text } from 'native-base'
import { createBottomTabNavigator } from 'react-navigation'

import ExploreScreen from './ExploreScreen'
import LikesScreen from './LikesScreen'
import MissionsScreen from './MissionsScreen'
import ConversationsScreen from './ConversationsScreen'
import ProfileScreen from './ProfileScreen'


export default createBottomTabNavigator(
  {
    explore: {
      screen: ExploreScreen
    },
    likes: {
      screen: LikesScreen
    },
    mission: {
      screen: MissionsScreen
    },
    converasation: {
      screen: ConversationsScreen
    },
    profile: {
      screen: ProfileScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'explore') {
          iconName = `search`
        } else if (routeName === 'likes') {
          iconName = `heart${focused ? '' : '-outline'}`
          return <MaterialCommunityIcon name={iconName} size={25} color={tintColor} />
        } else if (routeName === 'mission') {
          iconName = `content-copy`
        } else if (routeName === 'converasation') {
          iconName = `chat-bubble${focused ? '' : '-outline'}`
        } else if (routeName === 'profile') {
          iconName = `person`
        }
  
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4C7BD9',
      inactiveTintColor: 'gray',
    }
  }
)