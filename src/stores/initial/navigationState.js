import { fromJS } from 'immutable';

export default fromJS({
  tabs: {
    index: 0,
    routes: [
      {key: 'schedule', title: 'SCHEDULE', icon: 'clock'},
      {key: 'cabins', title: 'CABINS', icon: 'heart'},
      {key: 'map', title: 'MAP', icon: 'location'},
      {key: 'menu', title: 'MENU', icon: 'navicon'}
    ]
  },
  schedule: {
    key: 'schedule',
    index: 0,
    routes: [
      {key: 'scheduleView'},
      {key: 'openingHours'}
    ]
  },
  cabins: {
    key: 'cabins',
    index: 0,
    routes: [{key: 'cabinsView'}]
  },
  map: {
    key: 'map',
    index: 0,
    routes: [{key: 'mapView'}]
  },
  menu: {
    key: 'map',
    index: 0,
    routes: [{key: 'menuView'}]
  }
});