import React from "react";
import {
  Icon,
  Text,
  Button,
} from 'native-base';
import { StyleSheet, View } from 'react-native';
import { connect } from "react-redux";
import Modal from 'react-native-modal';

import { ActionTypes } from '../constants';
import appStyles from '../theme/appStyles';

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    // onBackdropPress
  }
  render() {
    return (
      <Modal
          isVisible={this.props.showModal}
          backdropColor={ this.props.backdropColor || 'black' }
          backdropOpacity={ this.props.backdropOpacity || 0.5 }
          animationIn={ this.props.animationIn || 'slideInUp' }
          animationOut={ this.props.animationOut || 'slideOutDown' }
          animationInTiming={ this.props.animationInTiming || 300 }
          animationOutTiming={ this.props.animationOutTiming || 300 }
          onBackdropPress={ this.props.hideModal }
          onBackButtonPress={ this.props.hideModal }
          style={this.props.style}
        > 
        <View style={[appStyles.modalContent,this.props.contentStyle]}>
          {this.props.content}
        </View>
        </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.common.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      hideModal: () => dispatch({ type: ActionTypes.SHOWMODAL, showModal: false })
    };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);