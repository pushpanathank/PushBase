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
import {showToast} from '../../utils/common';
import appStyles from '../../theme/appStyles';
import styles from './styles';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'push@gmail.com',
      password: 'push',
      error: '',
    };
  }

  onSignupButtonPressHandler(){
    this.props.navigation.navigate('signupScreen')
  }

  onForgotpasswordPressHandler(){
    this.props.navigation.navigate('forgotpasswordScreen')
  }

  login(){
    const user = {
      email: this.state.username,
      password: this.state.password,
    }
    this.props.signin(user)
      .then(res => {
        if(res.status == 200){
          showToast(res.msg,"success");
          this.props.navigation.navigate('homeStack')
        }else{
          showToast(res.msg,"danger");
        }
      })
      .catch(error => {
        const messages = _.get(error, 'response.data.error')
        message = (_.values(messages) || []).join(',')
        if (message){
         showToast(message,"danger");
       }
       console.log(`
          Error messages returned from server:`, messages )
      });
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
                <View style={appStyles.rowXcenter}>
                  <Logo style={appStyles.loginLogo} />
                  <Text style={appStyles.loginMidText}>Login to Get Started!</Text>
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
                          value={this.state.username}
                        />
                      </Item>
                      <Item style={styles.itemStyle} floatingLabel >
                        <Input
                          placeholder="Password"
                          placeholderTextColor="#FFFFFF"
                          autoCapitalize="none"
                          style={appStyles.textbox}
                          maxLength={30}
                          numberOfLines={1}
                          secureTextEntry={true}
                          onChangeText={ (password)=> this.setState({password}) }
                          spellCheck={false}
                          autoCorrect={false}
                          value={this.state.password}
                        />
                      </Item>
                  </Form>
                  <Row>
                    <Col>
                      <Button transparent full  
                        onPress={() => this.onSignupButtonPressHandler()}
                        style={[styles.linkTextBtn,{justifyContent:'flex-start'}]}
                      >
                        <Text style={[styles.linkText,appStyles.textLeft]} > Create Account </Text>
                      </Button> 
                    </Col>
                    <Col>
                      <Button transparent full  
                        onPress={() => this.onForgotpasswordPressHandler()}
                        style={[styles.linkTextBtn,{justifyContent:'flex-end'}]}
                      >
                        <Text style={[styles.linkText,appStyles.textRight]} > Forgot Password </Text>
                      </Button>
                    </Col>
                  </Row>
                </View>
              </View>  
              <View style={{flex: 0.2,height: 80,}}> 
                { this.props.isLoading ? 
                   <Spinner color={Colors.secondary} /> : 
                    <Button
                      full
                      primary
                      style={styles.button}
                      onPress={() => this.login()}
                    >
                      <Text> Log in</Text>
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
  // Redux Store --> Component
  return {
    isLoading: state.common.isLoading,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Login
      signin: (user) => dispatch(userActions.signin(user)),
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Login);