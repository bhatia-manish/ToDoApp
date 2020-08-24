import React from 'react';
// import MyTabs from './navigation/main_navigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import store from './store/create_store'
import { Provider } from 'react-redux';
import Navigation from './navigation/navigator'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render(){
   if (!this.state.isReady) {
    return <AppLoading />;
  }
  return (
    <Provider store = { store }>
      <Navigation/>
    </Provider>
  );
  }
}