import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground, TouchableOpacity } from "react-native";
import { NavigationActions, DrawerItems } from 'react-navigation'
import {
  Button, View,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Body,
  Left,
  Thumbnail,
  Footer
} from "native-base";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/user";
import imgs from '../../assets/images';
import appStyles from '../../theme/appStyles';
import { Screens } from '../../constants';
import styles from './styles';
// import { getCurrentRoute } from '../../utils/common';

class Drawer extends React.Component {
  test() {
    console.log("this.state");
  }

  logout(){
    this.props.logout();
    this.props.navigation.navigate(Screens.SignOutStack.route);
  }
  render() {
    const { navigation, user } = this.props;
    const userName = this.props.user == null ? '' : this.props.user.name;
    return (
      <Container>
        <Content>
          <ImageBackground
            source={imgs.bg}
            style={styles.headerBg}
          >
          <View style={[appStyles.rowXcenter]}>
              <View style={styles.profileIconContainer}>
                <Icon fontSize='12' type='AntDesign' name='user' style={styles.profileIcon} />
              </View>
              <Text style={[appStyles.fontRegular,{color: "#fff"}]} > { userName } </Text>
          </View>
          </ImageBackground>
          <DrawerItems {...this.props} />
        </Content>
        <Footer style={styles.logoutFooter}>
          <Button iconLeft transparent full style={styles.logoutBtn} onPress={() => this.logout()} >
            <Icon fontSize='12' type='AntDesign' name='logout' style={styles.white} />
            <Text style={styles.white}>Logout</Text>
          </Button>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(userActions.logoutUser()),
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);