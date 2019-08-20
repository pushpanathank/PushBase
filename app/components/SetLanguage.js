import React from "react";
import {
  Icon,
  Text,
  Button, ListItem, Radio, List
} from 'native-base';
import { StyleSheet, View } from 'react-native';
import { connect } from "react-redux";
import Modal from 'react-native-modal';

import { ActionTypes, Strings, Colors } from '../constants';
import * as userActions from "../actions/user";
import appStyles from '../theme/appStyles';

class SetLanguage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <List style={{width:'100%'}}>
        {Strings.map((value, index) => {
          if(this.props.btnView){
            return (<Button 
              block
              key={index}
              style={[appStyles.introLangBtn,this.props.languageId === value.id ? appStyles.introLangBtnActive : {}]}
              onPress={() => {this.props.setLanguage(index)}}
              >
              <Text style={{color:Colors.black}}>{value.lang}</Text>
            </Button>);
          }else{
            return (
              <ListItem 
                button 
                full 
                key={index} 
                onPress={() => {this.props.setLanguage(index)}} 
                style={{borderBottomWidth: 0, width:'100%'}}>
                <Radio 
                  id={value.langCode}
                  selected={this.props.languageId === value.id} 
                />
                <Text style={{paddingLeft: 10}}>{value.lang}</Text>
              </ListItem>
            );
          }
        })}
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    languageId: state.auth.languageId || 0,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setLanguage: (value) => dispatch(userActions.setLanguage({id:value,set:1})),
    };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SetLanguage);