// extract hours and minutes
// return hours*3600 + minutes*60

const dateToSeconds = (time: Date): number => {
  return time.getHours() * 3600 + time.getMinutes() * 60;
};

export default dateToSeconds;
