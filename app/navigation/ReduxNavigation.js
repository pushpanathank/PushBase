import React from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import { App } from "../store/store";

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { nav, dispatch } = this.props;
    const idx = nav.routes[0].index || 0;
    if (idx === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { nav, dispatch } = this.props;

    return <App state={nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(ReduxNavigation);