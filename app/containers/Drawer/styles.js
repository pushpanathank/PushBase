import {Colors,Layout} from '../../constants/';
export default {
  headerBg: {
    height: 140,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Layout.doubleIndent
  },
  logoutFooter: {
    backgroundColor: Colors.secondary,
    padding:0,
    margin:0
  },
  logoutBtn: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Font-Regular',
  },
  white:{
    color: Colors.white
  },
  profileIconContainer:{
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width:60,
    height:60,
    borderRadius:30,
  },
  profileIcon:{
    color: Colors.primary,
    marginLeft:15
  }
};