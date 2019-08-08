import React from "react";
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

class Login extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginBottom: 16 }}>Login Screen</Text>
        <Button
          onPress={this.props.loggedIn === false ? () => this.props.reduxLogin(true) : () => this.props.reduxLogin(false)}
          title="Go To Home Screen"
        />
      </View>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  console.log('State  1:', state);

  // Redux Store --> Component
  return {
    loggedIn: state.authReducer.loggedIn,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Login
      reduxLogin: (payload) => dispatch({
        type: 'LOGGED_IN',
        payload: payload,
      }),
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Login);