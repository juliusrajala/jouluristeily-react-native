import { fromJS } from 'immutable';
const scheduleData = require('./scheduleData.json');
const hourData = require('./hourData.json');

const schedule = { "iteration": 1, "events": scheduleData };
const hours = { "iteration": 1, "hours": hourData };

export default fromJS({visible: 'schedule', schedule, hours});