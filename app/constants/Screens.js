import React from 'react'
import { Icon } from 'native-base';

export default {
  Title: 'PushBase',
  SignInStack : {
    route: 'SignInStack'
  }, 
  DrawerStack : {
    route: 'DrawerStack'
  },
  Home : {
    route: 'Home',
    icon:(<Icon fontSize='12' type='AntDesign' name='home' />),
    label:"Home",
  },
  Settings : {
    route: 'Settings',
    icon:(<Icon fontSize='12' type='AntDesign' name='setting' />),
    label:"Settings",
  },

  SignOutStack : {
    route: 'SignOutStack'
  }, 
  SignIn : {
    route: 'SignIn'
  }, 
  SignUp : {
    route: 'SignUp'
  }, 
  ForgotPassword : {
    route: 'ForgotPassword'
  }, 
};