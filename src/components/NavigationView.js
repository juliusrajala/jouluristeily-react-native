import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {NavigationExperimental, View, StyleSheet, BackAndroid} from 'react-native';
import {navigationActions} from '../stores/ExperimentalNavigation';
import AppRouter from '../core/AppRouter';
import NavigationBar from './NavigationBar';

const {
  CardStack: NavigationCardStack,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;

const NavigationView = ({navi, switchTab, pushRoute, onNavigateBack}) => {
  const tabs = navi.get('tabs');
  const tabKey = navi.getIn(['tabs', 'routes', navi.getIn(['tabs','index']), 'key']);
  const scenes = navi.get(tabKey);

  BackAndroid.addEventListener('hardwareBackPress', () => onNavigateBack())

  const renderScene = (sceneProps) =>{
    return (
      <View style={styles.sceneContainer}>
        {AppRouter(sceneProps)}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationBar 
        tabs={tabs}
        currentTabIndex={tabs.get('index')}
        switchTab={switchTab}
        />
      <NavigationCardStack
        key={'stack_' + tabKey}
        onNavigateBack={onNavigateBack}
        navigationState={scenes.toJS()}
        renderScene={renderScene}
        />
    </View>
  );
}

NavigationView.propTypes = {
  navi: PropTypes.object,
  switchTab: PropTypes.func,
  pushRoute: PropTypes.func,
  onNavigateBack: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1
  }
})

export default connect(
  (state, props) => ({
    navi: state.navi
  }),
  dispatch => ({
    switchTab(index) {
      dispatch(navigationActions.switchTab(index));
    },
    pushRoute(index) {
      dispatch(navigationActions.pushRoute(index));
    },
    onNavigateBack(){
      dispatch(navigationActions.popRoute());
    }
  }))(NavigationView);