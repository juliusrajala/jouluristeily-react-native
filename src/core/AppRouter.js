import React from 'react';

import LandingView from '../ui/LandingView';
import CabinView from '../ui/CabinView';
import ScheduleView from '../ui/ScheduleView';
import MapView from '../ui/MapView';
import MenuView from '../ui/MenuView';

export default function AppRouter(props){
  const key = props.scene.route.key;
  console.log('key', key, props.scene);
  switch(key){
    case 'cabinsView':
      console.log('Moving to cabin view');
      return <CabinView props />
    case 'scheduleView':
      console.log('Moving to schedule view');
      return <ScheduleView props />
    case 'mapView':
      console.log('Moving to map view');
      return <MapView props />
    case 'menuView':
      console.log('Moving to menu view');
      return <MenuView props />
    default:
      return <ScheduleView props />;
  }
}
