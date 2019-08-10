import React from "react";
import { View } from 'react-native';

import appStyles from '../theme/appStyles';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={appStyles.statusBar} />
    );
  }
}
