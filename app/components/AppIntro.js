import React from "react";
import { ImageBackground, View, Image } from 'react-native';
import { connect } from "react-redux";
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
import AppIntroSlider from 'react-native-app-intro-slider';

import appStyles from '../theme/appStyles';
import imgs from '../assets/images';
import { Layout, Colors, ActionTypes } from '../constants';


class AppIntro extends React.Component {
  constructor(props) {
    super(props);

    const { language } = this.props;
    this.slides = [
      {
        key: 'slide1',
        title: language.slide1Title,
        text: language.slide1Text,
        image: imgs.placeholder,
      },
      {
        key: 'slide2',
        title: language.slide2Title,
        text: language.slide2Text,
        image: imgs.placeholder,
      },
      {
        key: 'slide3',
        title: language.slide3Title,
        text: language.slide3Text,
        image: imgs.placeholder,
      }
    ];
  }
  renderItem = ({ item }) => {
    return (
      <View style={[appStyles.slide,appStyles.rowXYcenter,{padding:Layout.indent}]}>
        <Text style={appStyles.slideTitle}>{item.title}</Text>
        <Image source={item.image} style={appStyles.slideImage} resizeMode="contain"/>
        <Text style={appStyles.slideText}>{item.text}</Text>
      </View>
    );
  }
  onDone = () => {
    this.props.hideIntro();
  }
  renderNextButton = () => {
    return (
      <View style={appStyles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          size={24}
          style={appStyles.slideIcon}
        />
      </View>
    );
  };
  renderDoneButton = () => {
    return (
      <View style={appStyles.buttonCircle}>
        <Icon
          name="md-checkmark"
          size={24}
          style={appStyles.slideIcon}
        />
      </View>
    );
  };
  render() {
    return <AppIntroSlider 
      renderItem={this.renderItem} 
      slides={this.slides} 
      onDone={this.onDone}
      renderDoneButton={this.renderDoneButton}
      renderNextButton={this.renderNextButton}
      activeDotStyle={appStyles.activeDotStyle}
      />;
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.auth.language,
    showIntro: state.auth.showIntro
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      hideIntro: () => dispatch({ type: ActionTypes.SHOWINTRO, showIntro: false })
    };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(AppIntro);