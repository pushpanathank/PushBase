import React from "react";
import { Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";

import appStyles from '../theme/appStyles';

class Logo extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[appStyles.logo, this.props.style]}>
        {this.props.language.appName}
      </Text>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.auth.language,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Logo);