import React from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { View } from "react-native";
import { connect } from "react-redux";
import { Form, Item, Input, Title, Button, Text } from 'native-base';
import { required, email } from 'redux-form-validators'
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

class SignInForm extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const { handleSubmit, onSubmit, language } = this.props;
    return (
      <Form onSubmit={handleSubmit(onSubmit)} style={styles.loginForm}>
        <Field 
          name="email" 
          component={InputBox} 
          placeholder={language.email}
          keyboardType={'email-address'}
          icon='user'
          iconStyle={{top:5,paddingLeft:15}}
          validate={[required({msg: `${language.email} ${language.required}`}), email({msg: `${language.email} ${language.notValid}`})]}
        />
        <Field 
          name="password" 
          component={InputBox} 
          placeholder={language.password}
          secureTextEntry={true}
          icon='lock'
          iconStyle={{top:5,paddingLeft:15}}
          validate={[required({msg: `${language.password} ${language.required}`})]}
        />
      </Form>
    )
  }
}


const signinform = reduxForm({
  form: 'signinForm',
})(SignInForm);

const mapStateToProps = (state) => {
  return {
    language: state.auth.language,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(signinform);