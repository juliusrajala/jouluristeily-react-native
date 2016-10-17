import React from 'react';
import LandingView from '../components/LandingView';
import CabinView from '../components/CabinView';

export default function AppRouter(view, props){
  switch(view){
    case 'CABINS':
      console.log('Moving to cabin view');
      return <CabinView props />
    case 'SCHEDULE':
    case 'MAP':
    default:
      return <CabinView props />;
  }
}