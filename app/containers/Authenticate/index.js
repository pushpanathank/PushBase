import React from 'react'
import { StyleSheet, View, ImageBackground, Image} from 'react-native'
import _ from 'lodash'; 
import { Layout, Colors } from '../../constants';
import { Logo, Statusbar } from '../../components';
import imgs from '../../assets/images';
import {
  Container,
  Content,
  Icon,
  Spinner
} from 'native-base';
import { connect } from "react-redux";
import appStyles from '../../theme/appStyles';
import styles from './styles';
class Authenticate extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(this.props.user==null){
      this.props.navigation.navigate('signinScreen');
    }else{
      this.props.navigation.navigate('homeStack');
    }
  }
  render(){
    return (
      <Container style={appStyles.container}>
        <ImageBackground 
            source={imgs.bg} 
            style={ { width: Layout.window.width, height: Layout.window.height }}>
          <Content enableOnAndroid>
            <View style={{flexDirection: 'column', flex:1}}>
              <View style={{flex: 1,height: Layout.window.height,}}>
                <View style={appStyles.rowXcenter}>
                  <Logo style={[appStyles.loginLogo,{paddingTop:Layout.sixIndent}]} />
                  <Spinner color={Colors.secondary} />
                </View> 
              </View>  
            </View>  
          </Content>
         </ImageBackground>
      </Container>
     
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Action
    return {};
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);