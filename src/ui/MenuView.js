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
      hero: require('./images/leima.png'),
      loimu: require('./images/loimu.png')
  }

  return (
    <View style={ styles.menuView }>
      <View style={ styles.heroContainer }>
        <Image style={ styles.hero } source={ images.hero }/>
      </View>
      <ScrollView contentContainerStyle={ styles.container }>
        <TouchableOpacity
          style={ styles.instagram }
          onPress={() => Linking.openURL('https://www.instagram.com/explore/tags/jouluristeily/')}>
          <Text style={ styles.link }>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://jouluristeily.com/')}>
          <Text style={ styles.link }>Jouluristeily.com</Text>
        </TouchableOpacity>
        <Image style={ styles.loimu } source={ images.loimu }/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menuView: {
    backgroundColor: '#fff',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    padding: 30,
  },
  heroContainer: {
    height: 300,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECEFF1'
  },
  hero: {
    width: 232,
    height: 232,
    resizeMode: 'contain'
  },
  instagram: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkIcon: {
    fontSize: 40,
    color: 'indianred',
  },
  link: {
    fontWeight: '600',
    textAlign: 'center',
    width: 192,
    padding: 10,
    fontSize: 20,
    color: 'indianred',
    borderWidth: 1,
    borderColor: 'indianred',
    margin: 5,
    borderRadius: 20,
  },
  loimu: {
    marginTop: 18,
    width: 232,
    height: 100,
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
