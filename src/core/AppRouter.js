import React from 'react';
import LandingView from '../components/LandingView';
import CabinView from '../components/CabinView';
import ScheduleView from '../components/ScheduleView';
import MapView from '../components/MapView';

export default function AppRouter(props){
  const key = props.scene.route.key;
  console.log('key', key)
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
    default:
      return <ScheduleView props />;
  }
}
