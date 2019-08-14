import React from 'react'
import { StyleSheet, View, ImageBackground, Image} from 'react-native'
import _ from 'lodash'; 
import { Layout, Colors } from '../../constants';
import { Logo, Statusbar, LoginBackIcon } from '../../components';
import imgs from '../../assets/images';
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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';
class Forgotpassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  reset(){

  }

  render(){
    return (
      <Container style={appStyles.container}>
        <ImageBackground 
            source={imgs.bg} 
            style={ { width: Layout.window.width, height: Layout.window.height }}>
          <Content enableOnAndroid>
            <View style={{flexDirection: 'column', flex:1}}>
              <View style={{flex: 0.8,height: Layout.window.height-80,}}>
                <View style={appStyles.row}>
                  <LoginBackIcon props={this.props} /> 
                  <Text style={appStyles.loginTitle}>Forgot Password</Text>
                </View> 

                <View style={styles.loginBox}>
                  <Text transparent style={styles.formMsg}>{this.state.error}</Text>
                  <Form>
                      <Item style={styles.itemStyle} floatingLabel >
                        <Input
                          placeholder="Email"
                          placeholderTextColor="#FFFFFF"
                          keyboardType={'email-address'}
                          autoCapitalize="none"
                          style={appStyles.textbox}
                          maxLength={100}
                          numberOfLines={1}
                          onChangeText={ (username)=> this.setState({username}) }
                          spellCheck={false}
                          autoCorrect={false}
                        />
                      </Item>
                  </Form>
                </View>
              </View>  
              <View style={{flex: 0.2,height: 80,}}> 
                { this.state.isLoading ? 
                   <Spinner color={Colors.secondary} /> : 
                    <Button
                      full
                      primary
                      style={appStyles.btnSecontary}
                      onPress={() => this.reset()}
                    >
                      <Text> Reset </Text>
                    </Button>
                }
              </View>  
            </View>          
          </Content>
         </ImageBackground>
      </Container>
     
    );
  }
}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      reset: (payload) => dispatch({
        type: 'LOGGED_IN',
        payload: payload,
      }),
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);