import { createSwitchNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import AuthLoadingScreen from './screens/AuthLoadingScreen'

export default createSwitchNavigator(
  {
    authLoading: {
      screen: AuthLoadingScreen
    },
    home: {
      title: 'Home',
      screen: HomeScreen
    },
    login: {
      title: 'Auth',
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'authLoading'
  }
)