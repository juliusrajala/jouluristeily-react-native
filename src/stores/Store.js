import { createStore } from 'redux';

import Navigation from './Navigation';
import Cabins from './Cabins';

const store = createStore (
  Navigation,
  Cabins
)

export default store;