import React from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { View } from "react-native";
import { connect } from "react-redux";
import { Form, Item, Input, Title, Button, Text } from 'native-base';
import { InputBox } from '../../components';
import styles from './styles';

const validate = values => {
  const error= {};
  error.email= '';
  error.password= '';
  var ema = values.email;
  var nm = values.password;
  if(values.email === undefined){
    ema = '';
  }
  if(values.password === undefined){
    nm = '';
  }
  if(ema == ''){
    error.email= 'Required';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  if(nm == ''){
    error.password= 'Required';
  }
  if(nm.length > 8){
    error.password= 'max 8 characters';
  }
return error;
};

class LoginForm extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const { handleSubmit, onSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(onSubmit)} style={styles.loginForm}>
        <Field 
          name="email" 
          component={InputBox} 
          placeholder="Email"
          keyboardType={'email-address'}
          icon='user'
          iconStyle={{top:5,paddingLeft:15}}
          value="push@gmail.com"
        />
        <Field 
          name="password" 
          component={InputBox} 
          placeholder="Password"
          secureTextEntry={true}
          icon='lock'
          iconStyle={{top:5,paddingLeft:15}}
          value="push"
        />
      </Form>
    )
  }
}


const loginform = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(loginform);