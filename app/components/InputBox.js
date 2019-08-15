import React from "react";
import { View } from "react-native";
import { Item, Input, Text, Icon } from 'native-base';
import { Layout, Colors } from '../constants';
import { getFontIcon } from '../utils/common';

import appStyles from '../theme/appStyles';

const InputBox = ({
  input,
  meta:{ touched, error, warning },
  disabled = false,
  placeholder="Please Enter",
  placeholderTextColor= Colors.white,
  keyboardType='default',
  autoCapitalize="none",
  maxLength=100,
  numberOfLines=1,
  spellCheck=false,
  autoCorrect=false,
  secureTextEntry=false,
  style={},
  labelType='regular',
  icon='',
  iconStyle={},
}) => {
  let hasError= false;
  let iconImg = getFontIcon(icon,iconStyle)||<Icon/>;
  if(touched && error){
    hasError= true;
  }
  if(disabled){

  }else{
    return(
      <Item style= {appStyles.itemInput} error= {hasError}>
      {iconImg}
        <Input 
          {...input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={[appStyles.textbox,style]}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          spellCheck={spellCheck}
          autoCorrect={autoCorrect}
          secureTextEntry={secureTextEntry}
          value={input.value}
        />
        {hasError ? <Text style={appStyles.inputError}>{error}</Text> : <Text />}
      </Item>
      )
  }
}
export default InputBox;