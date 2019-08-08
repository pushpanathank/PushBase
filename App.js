// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// Imports: Navigation
import ReduxNavigation from './app/navigation/ReduxNavigation';

// Imports: Redux Persist Persister
import { store, persistor } from './app/store/store';

// React Native: App
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isReady: false,
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      // 'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
      // 'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      // 'OpenSans-Semibold': require('./assets/fonts/OpenSans-Semibold.ttf'),
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      // Redux: Global Store
      <Provider store={store}>
        <PersistGate 
          loading={<AppLoading />}
          persistor={persistor}
        >
          <ReduxNavigation />
        </PersistGate>
      </Provider>
    );
  }
};