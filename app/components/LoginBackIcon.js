import React from "react";
import {
  Icon,
  Text,
  Button,
} from 'native-base';
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import appStyles from '../theme/appStyles';

class LoginBackIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button transparent full
        onPress={() => this.props.goBack()}
        style={appStyles.loginBack}
      >
        <Icon name="arrow-back" style={appStyles.loginBackIcon} />
      </Button> 
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      goBack: () => dispatch(NavigationActions.back()),
   };
};

// Exports
export default connect(null, mapDispatchToProps)(LoginBackIcon);