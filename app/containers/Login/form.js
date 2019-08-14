import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View } from "react-native";
import { connect } from "react-redux";
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { InputBox } from '../../components';

const validate = values => {
  const error= {};
  error.email= '';
  error.name= '';
  var ema = values.email;
  var nm = values.name;
  if(values.email === undefined){
    ema = '';
  }
  if(values.name === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }

  if(nm.length > 8){
    error.name= 'max 8 characters';
  }
return error;
};

class LoginForm extends React.Component {
  constructor(props){
    super(props);
  }
  onSubmit(values){
    console.log("values", values);

  }
  render(){
     const { handleSubmit, reset } = this.props;
    return (
      <View padder>
        <Field 
          name="email" 
          component={InputBox} 
          placeholder="Email"
          keyboardType={'email-address'}
        />
        <Field 
          name="name" 
          component={InputBox} 
          placeholder="Password"
          secureTextEntry={true}
        />
        {/* <Button style= {{ margin: 10 }} block primary onPress= {handleSubmit(this.onSubmit)}>
                <Text>Submit</Text>
                </Button> */}
      </View>
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