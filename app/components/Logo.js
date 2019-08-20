import React from "react";
import { Text, Image } from 'react-native';
import { connect } from "react-redux";
import * as Animatable from 'react-native-animatable';

import appStyles from '../theme/appStyles';
import imgs from '../assets/images';

class Logo extends React.Component {
  render() {
    return (
        <Image 
          {...this.props} 
          style={[appStyles.rowXYcenter,appStyles.headerLogo, this.props.style]}
          source={imgs.logo}
          resizeMode="contain"
          />
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