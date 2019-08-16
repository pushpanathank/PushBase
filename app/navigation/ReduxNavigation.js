import React from "react";
import { BackHandler, ToastAndroid, Alert } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import { App } from "../store/store";
import { getCurrentRoute } from '../utils/common';
import { Screens } from "../constants";

// common statless class variable.
let backHandlerClickCount = 0;

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { state, dispatch } = this.props;
    const currentRoute = getCurrentRoute(state);
    // console.log("getCurrentRoute", currentRoute);
    backHandlerClickCount = 1;
    setTimeout(() => {
      backHandlerClickCount = 0;
    }, 600);
    if (currentRoute==Screens.Home.route || currentRoute==Screens.SignIn.route) {
      /*ToastAndroid.showWithGravity(
        'Press again to close',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );*/
      /*if(backHandlerClickCount==1){
        BackHandler.exitApp();
      }*/
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { state, dispatch } = this.props;

    return <App state={state.nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(ReduxNavigation);