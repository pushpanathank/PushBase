import React from "react";
import { View } from "react-native";
import { Item, Input, Text } from 'native-base';
import { Layout, Colors } from '../constants';

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
}) => {
  let hasError= false;
  if(error !== undefined){
    hasError= true;
  }
  return(
    <Item style= {appStyles.itemInput} error= {hasError}>
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
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
    )
}
export default InputBox;