import React from 'react';

import CabinView from '../ui/CabinView';
import ScheduleView from '../ui/ScheduleView';
import IosSchedule from '../ui/ios/iosSchedule';
import IosCabins from '../ui/ios/iosCabins';
import MapView from '../ui/MapView';
import MenuView from '../ui/MenuView';

export const iosRouter = (route, props) => {
  const key = route.get('key');
  switch (key) {
    case 'cabins': return <IosCabins props />;
    case 'map': return <MapView props />;
    case 'menu': return <MenuView props />;
    case 'schedule': return <IosSchedule props />; 
    default: return <IosSchedule props />;
  }
}

export default function AppRouter(props){
  const key = props.scene.route.key;
  switch(key){
    case 'cabinsView':
      return <CabinView props />
    case 'scheduleView':
      return <ScheduleView props />
    case 'mapView':
      return <MapView props />
    case 'menuView':
      return <MenuView props />
    default:
      return <ScheduleView props />;
  }
}
