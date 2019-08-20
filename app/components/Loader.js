import React from "react";
import { ImageBackground, View } from 'react-native';
import { connect } from "react-redux";
import {
  Container,
  Content,
  Icon,
  Text,
  Button,
  Form,
  Item,
  Label,
  Input,
  Spinner, Row, Col
} from 'native-base';   

import appStyles from '../theme/appStyles';
import imgs from '../assets/images';
import { Layout, Colors } from '../constants';
import Logo from './Logo';

class Loader extends React.Component {
  render() {
    return (
        <Container style={appStyles.container}>
          <ImageBackground 
              source={imgs.bg} 
              style={ { width: Layout.window.width, height: Layout.window.height }}>
            <Content enableOnAndroid>
              <View style={{flexDirection: 'column', flex:1}}>
                <View style={{flex: 1,height: Layout.window.height,}}>
                  <View style={appStyles.rowXYcenter}>
                    <Logo style={[appStyles.loaderLogo]} iterationCount={50} duration={1000} />
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
    language: state.auth.language,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Loader);