import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import { Login, Register, Forgotpassword, Home } from "../containers";

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
  signinScreen: { screen: Login },
  // authenticateScreen: { screen: Authenticate },
  forgotpasswordScreen: { screen: Forgotpassword },
  signupScreen: { screen: Register},
}, {headerMode: 'none'})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  homeStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'PocketRent',
  initialRouteName: 'loginStack',
  // transitionConfig: noTransitionConfig
})

export default PrimaryNav