import React from 'react'
import { StyleSheet, View, ImageBackground, Image} from 'react-native'
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
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
import { submit } from 'redux-form';
import { bindActionCreators } from "redux";
import * as Animatable from 'react-native-animatable';

import { Layout, Colors, Screens } from '../../constants';
import { Logo, Statusbar, LoginBackIcon } from '../../components';
import imgs from '../../assets/images';
import * as userActions from "../../actions/user";
import {showToast} from '../../utils/common';
import appStyles from '../../theme/appStyles';
import styles from './styles';
import SignUpForm from './form';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      error: '',
    };
  }

  signup(values, dispatch, props){
    dispatch(userActions.signup(values))
      .then(res => {
        if(res.status == 200){
          showToast(res.msg,"success");
          dispatch(NavigationActions.navigate({ routeName: Screens.SignIn.route }));
          // this.props.navigation.navigate(Screens.SignIn.route)
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
    const { language } = this.props;
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
                  <Animatable.Text 
                    animation="fadeInDown"
                    style={appStyles.loginTitle}>{language.signup}</Animatable.Text>
                </View> 

                <Animatable.View 
                  animation="fadeInUp"
                  delay={500}
                  style={styles.loginBox}>
                  <SignUpForm onSubmit={this.signup} />
                </Animatable.View>
              </View>  
              <Animatable.View 
                animation="fadeIn"
                delay={1000}
                style={{flex: 0.2,height: 80,}}> 
                { this.props.isLoading ? 
                   <Spinner color={Colors.secondary} /> : 
                    <Button
                      full
                      primary
                      style={appStyles.btnSecontary}
                      onPress={() => this.props.pressSignup()}
                    >
                      <Text>{language.signup}</Text>
                    </Button>
                }
              </Animatable.View>  
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
    language: state.auth.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      pressSignup: () => dispatch(submit('signupForm')),
      signup: (user) => dispatch(userActions.signup(user)),
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
