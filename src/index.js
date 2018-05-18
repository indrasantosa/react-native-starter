import { createStackNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import AuthLoadingScreen from './screens/AuthLoadingScreen'

export default createStackNavigator(
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
    initialRouteName: 'authLoading',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
)