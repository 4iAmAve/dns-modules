const timeString2ms = (a: any) => {
  let time = a.split('.');
  const ms = time[1] * 1 || 0;
  time = time[0].split(':');
  const hms = time[0] * 3600 + time[1] * 60 + time[2] * 1;
  const hm = time[0] * 60 + time[1] * 1;
  return ms + (time[2] ? hms : time[1] ? hm : time[0] * 1) * 1e3;
};

export default timeString2ms;
