const convertMillisToTime = (millis: number) => {
  if (!millis) {
    return false;
  }
  const hours = Math.floor(millis / (1000 * 60 * 60) % 60);
  const minutes = Math.floor(millis / (1000 * 60) % 60);
  const seconds = Math.floor(millis / 1000 % 60);
  const hoursString = (hours < 10 ? '0' + hours : hours);
  const minutesString = minutes < 10 ? '0' + minutes : minutes;
  const secondsString = seconds < 10 ? '0' + seconds : seconds;
  return {
    hours: hoursString as string,
    minutes: minutesString as string,
    seconds: secondsString as string,
  };
};

export default convertMillisToTime;
