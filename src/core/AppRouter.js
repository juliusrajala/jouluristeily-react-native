import React from 'react';
import LandingView from '../components/LandingView';
import CabinView from '../components/CabinView';

export default function AppRouter(view, props){
  switch(view){
    case 'CABIN_MEMO':
      console.log('Moving to cabin view');
      return <CabinView props />
    default:
      return <LandingView props />;
  }
}