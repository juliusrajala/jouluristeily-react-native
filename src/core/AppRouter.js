import React from 'react';
import LandingView from '../components/LandingView';
import CabinView from '../components/CabinView';
import ScheduleView from '../components/ScheduleView';

export default function AppRouter(view, props){
  switch(view){
    case 'CABINS':
      console.log('Moving to cabin view');
      return <CabinView props />
    case 'SCHEDULE':
      console.log('Moving to SCHEDULE');
      return <ScheduleView props />
    case 'MAP':
    default:
      return <CabinView props />;
  }
}