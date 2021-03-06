import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationExperimental, View, StyleSheet, BackAndroid } from 'react-native';
import { navigationActions } from './stores/ExperimentalNavigation';
import AppRouter from './core/AppRouter';
import NavigationBar from './ui/components/NavigationBar';

const {
  CardStack: NavigationCardStack,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;

const AndroidContainer = ({navi, loadView, pushRoute, onNavigateBack}) => {
  const switchTab = loadView;
  const tabs = navi.get('tabs');
  const tabIndex = navi.getIn(['tabs','index'], 0);
  const tabKey = navi.getIn(['tabs', 'routes', tabIndex, 'key']);
  const scenes = navi.get(tabKey);

  BackAndroid.addEventListener('hardwareBackPress', () => onNavigateBack())

  const renderScene = (sceneProps) =>
    <View style={styles.sceneContainer}>
      {AppRouter(sceneProps)}
    </View>

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

AndroidContainer.propTypes = {
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
  ({ navi }, props) => ({ navi }),
  dispatch => ({
    loadView: index => dispatch(navigationActions.loadView(index)),
    pushRoute: index => dispatch(navigationActions.pushRoute(index)),
    onNavigateBack: () => dispatch(navigationActions.popRoute()),
  })
)(AndroidContainer);
