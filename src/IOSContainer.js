import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform } from 'react-native';
import NavigationBar from './ui/components/NavigationBar';
import { iosRouter } from './core/AppRouter';
import { navigationActions } from './stores/ExperimentalNavigation';

const navigationActionsToProps = (dispatch, props) => ({

});

const IosContainer = (props) => {
  const { navi, switchTab } = props;
  const tabs = navi.get('tabs');
  const tabIndex = tabs.get('index', 0);
  const routes = tabs.get('routes');

  const renderView = (currentItem) =>
    <View style={styles.sceneContainer}>
        { iosRouter(currentItem) }
    </View>;

  return (
    <View style={styles.container}>
      { renderView(routes.get(tabIndex)) }
      <NavigationBar
        tabs={tabs}
        currentTabIndex={tabIndex}
        switchTab={switchTab}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1
  }
});

export default connect(
  ({ navi }, props) => ({ navi }),
  dispatch => ({
    switchTab: index => dispatch(navigationActions.loadView(index)),    
  })
)(IosContainer)
