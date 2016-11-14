import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {NavigationExperimental, View, StyleSheet} from 'react-native';
import navigationActions from '../stores/ExperimentalNavigation';
import AppRouter from '../core/AppRouter';

const {
  cardStack: NavigationCardStack,
  naviHeader: NavigationHeader,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;


const ExperimentalNavigation = ({navi, switchTab, }) => {

  const renderScene = (sceneProps) => {
    return (
      <NavigationHeader
        {...sceneProps}
        onNavigateBack={onNavigateBack}
        />
    )
  }

  return (
    <View>

    </View>
  );
}

ExperimentalNavigation.propTypes = {
  navi: PropTypes.object,
  switchTab: PropTypes.func,
  pushRoute: PropTypes.func,
  onNavigateBack: PropTypes.func
};

export default connect(
  (state, props) => ({
    navi: state.get('navi')
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
  }))(ExperimentalNavigation);