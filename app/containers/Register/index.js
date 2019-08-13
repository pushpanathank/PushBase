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
  Input,
  Spinner, Row, Col, Toast
} from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/user";
import {showToast} from '../../utils/common';
import appStyles from '../../theme/appStyles';
import styles from './styles';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      error: '',
    };
  }

  onSigninButtonPressHandler(){
    this.props.navigation.navigate('signinScreen')
  }

  signup(){
    const user = {
      name: this.state.name,
      email: this.state.username,
      password: this.state.password,
    }
    this.props.signup(user)
      .then(res => {
        if(res.status == 200){
          showToast(res.msg,"success");
          this.props.navigation.navigate('signinScreen')
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
                <View style={appStyles.row}>
                  <LoginBackIcon props={this.props} /> 
                  <Text style={appStyles.loginTitle}>Sign Up</Text>
                </View> 

                <View style={styles.loginBox}>
                  <Form>
                      <Item style={styles.itemStyle} floatingLabel >
                        <Input
                          placeholder="Name"
                          placeholderTextColor="#FFFFFF"
                          keyboardType={'default'}
                          autoCapitalize="none"
                          style={appStyles.textbox}
                          maxLength={100}
                          numberOfLines={1}
                          onChangeText={ (name)=> this.setState({name}) }
                          spellCheck={false}
                          autoCorrect={false}
                        />
                      </Item>
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
                        />
                      </Item>
                      <Item style={styles.itemStyle} floatingLabel >
                        <Input
                          placeholder="Confirm Password"
                          placeholderTextColor="#FFFFFF"
                          autoCapitalize="none"
                          style={appStyles.textbox}
                          maxLength={30}
                          numberOfLines={1}
                          secureTextEntry={true}
                          onChangeText={ (password)=> this.setState({password}) }
                          spellCheck={false}
                          autoCorrect={false}
                        />
                      </Item>
                  </Form>
                </View>
              </View>  
              <View style={{flex: 0.2,height: 80,}}> 
                { this.props.isLoading ? 
                   <Spinner color={Colors.secondary} /> : 
                    <Button
                      full
                      primary
                      style={appStyles.btnSecontary}
                      onPress={() => this.signup()}
                    >
                      <Text> Sign Up</Text>
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
    isLoading: state.common.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      signup: (user) => dispatch(userActions.signup(user)),
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Register);