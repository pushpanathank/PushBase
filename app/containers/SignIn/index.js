import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback} from 'react-native'
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
  Label,
  Input,
  Spinner, Row, Col
} from 'native-base';
import { connect } from "react-redux";
import { submit } from 'redux-form';

import { Layout, Colors, Screens, ActionTypes } from '../../constants';
import { Logo, Statusbar, ModalBox, SetLanguage } from '../../components';
import imgs from '../../assets/images';
import * as userActions from "../../actions/user";
import { showToast } from '../../utils/common';
import appStyles from '../../theme/appStyles';
import styles from './styles';
import SignInForm from './form';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visibleModal: false,
    };
  }

  componentDidMount() {
    if(this.props.user!=null){
      this.props.navigation.navigate(Screens.SignInStack.route);
    }
    setTimeout(()=>{
      if(this.props.languageSet==0){
        this.props.showModal();
      }
    },2000);
  }

  onSignupButtonPressHandler(){
    this.props.navigation.navigate(Screens.SignUp.route)
  }

  onForgotpasswordPressHandler(){
    this.props.navigation.navigate(Screens.ForgotPassword.route)
  }

  signin(values, dispatch, props){
    dispatch(userActions.signin(values))
      .then(res => {
        if(res.status == 200){
          showToast(res.msg,"success");
          dispatch(NavigationActions.navigate({ routeName: Screens.SignInStack.route }));
          // this.props.navigation.navigate(Screens.SignInStack.route)
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
    if(this.props.user==null){
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
                    <TouchableWithoutFeedback onPress={() => this.props.showModal()}>
                      <Text style={appStyles.loginMidText}>{language.signinTitle}</Text>
                    </TouchableWithoutFeedback >
                  </View> 

                  <View style={styles.loginBox}>
                    <SignInForm onSubmit={this.signin} />
                    <Row>
                      <Col>
                        <Button transparent full  
                          onPress={() => this.onSignupButtonPressHandler()}
                          style={[styles.linkTextBtn,{justifyContent:'flex-start'}]}
                        >
                          <Text style={[styles.linkText,appStyles.textLeft]} > {language.createAcc} </Text>
                        </Button> 
                      </Col>
                      <Col>
                        <Button transparent full  
                          onPress={() => this.onForgotpasswordPressHandler()}
                          style={[styles.linkTextBtn,{justifyContent:'flex-end'}]}
                        >
                          <Text style={[styles.linkText,appStyles.textRight]} > {language.forgot} </Text>
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
                        style={appStyles.btnSecontary}
                        onPress={() => this.props.pressSignin()}
                      >
                        <Text> {language.signin} </Text>
                      </Button>
                  }
                </View>  
              </View>
              <ModalBox 
                visibleModal={this.state.visibleModal}
                content={<SetLanguage />} 
                style={appStyles.bottomModal}
                contentStyle={appStyles.setLanguage}
                />         
            </Content>
           </ImageBackground>
        </Container>
       
      );
    }else{
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
}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    isLoading: state.common.isLoading,
    user: state.auth.user,
    language: state.auth.language,
    languageSet: state.auth.languageSet || 0,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      pressSignin: () => dispatch(submit('signinForm')),
      setLanguage: () => dispatch(userActions.setLanguage({id:1,set:1})),
      showModal: () => dispatch({ type: ActionTypes.SHOWMODAL, showModal: true })
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);