import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import { Login, Register, Forgotpassword, Authenticate, Home } from "../containers";

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// drawer stack
const DrawerStack = createDrawerNavigator({
  homeScreen: { screen: Home },
  /*bookingScreen: { screen: BookingScreen},
  settingsScreen: { screen: Settings},
  aboutScreen: {screen: About},
  contactScreen: {screen: Contact},
  profileScreen: {screen: Profile},
  markFinishedScreen: { screen: MarkFinished}*/
}, {
  gesturesEnabled: true,
  // contentComponent: (props) => <DrawerContainer {...props} />
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {headerMode: 'none'})

// login stack
const LoginStack = createStackNavigator({
  authenticateScreen: { screen: Authenticate },
  signinScreen: { screen: Login },
  signupScreen: { screen: Register},
  forgotpasswordScreen: { screen: Forgotpassword },
}, {
  headerMode: 'none',
  initialRouteName: 'authenticateScreen',
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  homeStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'PushBase',
  initialRouteName: 'loginStack',
  // transitionConfig: noTransitionConfig
})

export default PrimaryNav