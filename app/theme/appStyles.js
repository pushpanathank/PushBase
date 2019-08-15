import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../constants/';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  statusBar:{
    flex: 1,
    height:Layout.statusBarHeight
  },
  row: {
    flex: 1,
  },
  rowXYcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowXcenter: {
    flex: 1,
    alignItems: 'center'
  },
  rowYcenter: {
    flex: 1,
    justifyContent: 'center',
  },
  fontRegular:{
    fontFamily: 'Font-Regular',
  },
  btnSecontary:{
    backgroundColor: Colors.secondary,
    fontFamily: 'Font-Regular',
  },

  setLanguage: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius:0
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  logo: {
    fontSize:25,
    color: Colors.white,
  },
  loginLogo: {
    fontSize:40,
    marginTop: Layout.sixIndent,
    marginBottom: Layout.indent,
    fontFamily: 'Font-Regular',
  },
  loginMidText:{
    fontSize: 16,
    fontFamily: 'Font-Light',
    marginLeft: 40,
    marginRight: 40,
    color:Colors.lightWhite
  },
  loginTitle:{
    fontSize: 30,
    color:Colors.white,
    marginLeft: Layout.indent,
    textAlign:'center',
    fontFamily: 'Font-Regular',
  },
  loginBack:{
    marginTop:Layout.doubleIndent,
    justifyContent:'flex-start',
  },
  loginBackIcon:{
    color: Colors.white
  },
  itemInput:{

  },
  textbox:{
    marginTop:15,
    color: Colors.white,
    width:100,
    paddingLeft:Layout.indent,
    paddingRight:Layout.indent,
    fontFamily: 'Font-Regular',
    fontSize:14
  },
  inputError:{
    color: Colors.red,
    top:20,
  }
});