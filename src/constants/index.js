//@flow

const actionTypeGenerator = (name) => {
  const actionTypes = {[`${name}`]: `${name}`};
  ['SUCCESS', 'FAILURE'].map(suffix => actionTypes[`${name}_${suffix}`] = `${name}_${suffix}`);
  return actionTypes;
};

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = {
  ...actionTypeGenerator('WEATHER_GET'),
  ...actionTypeGenerator('FORECAST_GET'),
};

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
