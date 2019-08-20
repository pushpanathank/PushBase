import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import { SignIn, SignUp, Forgotpassword, Home, Drawer, Settings } from "../containers";
import { Colors, Screens } from "../constants";

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
  [Screens.Home.route]: { 
    screen: Home 
  },
  [Screens.Settings.route]: { 
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
  transitionConfig: transitionConfig,
  contentComponent: (props) => <Drawer {...props} />,
});

const DrawerNavigation = createStackNavigator({
  [Screens.DrawerStack.route]: { screen: DrawerStack }
}, {
  headerMode: 'none',
  transitionConfig: transitionConfig
});

// login stack
const LoginStack = createStackNavigator({
  [Screens.SignIn.route]: { screen: SignIn },
  [Screens.SignUp.route]: { screen: SignUp},
  [Screens.ForgotPassword.route]: { screen: Forgotpassword },
}, {
  headerMode: 'none',
  initialRouteName: Screens.SignIn.route,
  transitionConfig: transitionConfig
});

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  [Screens.SignOutStack.route]: { screen: LoginStack },
  [Screens.SignInStack.route]: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: Screens.Title,
  initialRouteName: Screens.SignOutStack.route,
});

export default PrimaryNav