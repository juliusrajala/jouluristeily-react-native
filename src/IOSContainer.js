import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform } from 'react-native';
import NavigationBar from './ui/components/NavigationBar';
import AppRouter from './core/AppRouter';
import { navigationActions } from './stores/ExperimentalNavigation';

const navigationActionsToProps = (dispatch, props) => ({

});

const IOSContainer = (props) => {
  const { navi } = props;
  const tabs = navi.get('tabs');
  const tabIndex = tabs.get('index', 0);

  const renderView = (currentItem) =>
    <View style={styles.sceneContainer}>
        {AppRouter(currentItem)}
    </View>;

  return (
    <View style={styles.container}>
      <NavigationBar
        tabs={tabs}
        currentTabIndex={tabIndex}
        switchTab={(tab) => console.log(tab)}
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
)(IOSContainer)
