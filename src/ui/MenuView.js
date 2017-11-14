import React, { PropTypes } from 'react';
import {
  View,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
// import { menuActions } from '../stores/Menu';

const MenuView = ({ menu }) => {
  // const readyMenu = menu.toJS();
  const images = {
      afterlecture: require('./images/afterlecture.png'),
      leima: require('./images/leima.png'),
      loimu: require('./images/loimu.png')
  }

  return (
    <View style={ styles.menuView }>
      <ScrollView style={ {flex: 1} } contentContainerStyle={ styles.container }>
        <Image style={ styles.leima } source={ images.leima }/>
        <TouchableOpacity
          style={ styles.instagram }
          onPress={() => Linking.openURL('https://www.instagram.com/explore/tags/jouluristeily/')}>
          <Text style={ styles.link }>#jouluristeily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://jouluristeily.com/')}>
          <Text style={ styles.link }>jouluristeily.net</Text>
        </TouchableOpacity>
        <Image style={ styles.loimu } source={ images.loimu }/>
        <Image style={ styles.afterlecture } source={ images.afterlecture }/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menuView: {
    backgroundColor: '#363636',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leima: {
    marginTop: 18,
    width: 192,
    height: 192,
    resizeMode: 'contain'
  },
  instagram: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkIcon: {
    fontSize: 40,
    color: 'gainsboro',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    textShadowColor: '#503a3a'
  },
  link: {
    fontWeight: '400',
    fontSize: 18,
    color: 'white',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    textShadowColor: '#503a3a'
  },
  loimu: {
    marginTop: 18,
    width: 256,
    height: 96,
    resizeMode: 'contain'
  },
  afterlecture: {
    marginTop: 14,
    width: 256,
    height: 48,
    resizeMode: 'contain'
  },
});

MenuView.propTypes = {
  // menu: PropTypes.object
};

export default connect(
  (state, props) => ({
    // menu: state.menu
  }),
  dispatch => ({})
)(MenuView);
