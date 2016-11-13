export const getDateFromMilliseconds = (datetime) => {
  const date = new Date(datetime);
  return date.getUTCDay();
};

export const getTimeFromMilliseconds = (datetime) => {
  const date = new Date(datetime);
  const hours = date.getHours() < 10 ? `0${ date.getHours().toString() }` : date.getHours();
  return `${ hours }.${date.getMinutes() !== 0 ? date.getMinutes() : '00' }`;
};