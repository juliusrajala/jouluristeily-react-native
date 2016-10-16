import React, { PropTypes } from 'react';

import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';

const LandingView = React.createClass({
  render(){
    return(
      <View>
        <Text style={styles.pageName}>Landing Page</Text>
        <Text style={styles.welcome}>
          Jouluristeily 2016 Ooooh yeah!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pageName: {
    position: 'absolute',
    top: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f2f2f'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default LandingView;