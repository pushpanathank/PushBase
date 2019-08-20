import {Colors,Layout} from '../../constants/';
export default {
  header: {
    height: 140,
    paddingTop: Layout.doubleIndent,
    backgroundColor: Colors.primary
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
  }
};