import React from 'react';
import LandingView from '../ui/LandingView';
import CabinView from '../ui/CabinView';
import ScheduleView from '../ui/ScheduleView';

export default function AppRouter(props){
  const key = props.scene.route.key;
  console.log('key', key)
  switch(key){
    case 'cabinsView':
      console.log('Moving to cabin view');
      return <CabinView props />
    case 'scheduleView':
      console.log('Moving to SCHEDULE');
      return <ScheduleView props />
    case 'map':
    default:
      return <ScheduleView props />;
  }
}