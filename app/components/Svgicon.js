import React from "react";
import { Text, Image } from 'react-native';
import { connect } from "react-redux";
import * as Animatable from 'react-native-animatable';
import SvgIcon from 'react-native-svg-icon';

import appStyles from '../theme/appStyles';
import svgs from '../assets/svgs';
import { Colors, Layout } from '../constants';

class Svgicon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <SvgIcon
          width={this.props.width || Layout.iconSize}
          height={this.props.height || Layout.iconSize}
          fill={this.props.color || Colors.icon}
          name={this.props.name}
          svgs={svgs}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Svgicon);