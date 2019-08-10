import React from "react";
import { Text, StyleSheet } from 'react-native';

import appStyles from '../theme/appStyles';

export default class Logo extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[appStyles.logo, this.props.style]}>
        PushBase
      </Text>
    );
  }
}
