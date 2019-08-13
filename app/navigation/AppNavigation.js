import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import { Login, Register, Forgotpassword, Home, Drawer, Settings } from "../containers";
import { Colors, DrawerConfig } from "../constants";

const transitionConfig = () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const width = layout.initWidth;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    });

// drawer stack
const DrawerStack = createDrawerNavigator({
  homeScreen: { 
    navigationOptions: {
      drawerIcon: DrawerConfig.home.icon,
      drawerLabel: DrawerConfig.home.label
    },
    screen: Home 
  },
  settingScreen: { 
    navigationOptions: {
      drawerIcon: DrawerConfig.setting.icon,
      drawerLabel: DrawerConfig.setting.label
    },
    screen: Settings 
  },
}, {
  gesturesEnabled: true,
  // drawerBackgroundColor: 'rgba(255,255,255,.9)',
  drawerType: 'front',
  hideStatusBar: false,
  statusBarAnimation: 'slide',
  overlayColor: Colors.primaryDark,
  contentOptions: {
    activeTintColor: Colors.lightBlack,
    activeBackgroundColor: Colors.primaryLight,
  },
  contentComponent: (props) => <Drawer {...props} />,
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'none',
  transitionConfig: transitionConfig
});

// login stack
const LoginStack = createStackNavigator({
  signinScreen: { screen: Login },
  signupScreen: { screen: Register},
  forgotpasswordScreen: { screen: Forgotpassword },
}, {
  headerMode: 'none',
  initialRouteName: 'signinScreen',
  transitionConfig: transitionConfig
});

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  homeStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'PushBase',
  initialRouteName: 'loginStack',
});

export default PrimaryNav