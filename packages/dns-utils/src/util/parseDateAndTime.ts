const parseDateAndTime = (dateString: string, from?: boolean) => {
  const date = new Date(dateString);

  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();

  if (year.length < 4) {
    return false;
  }

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  if (hours.length < 2) {
    hours = `0${hours}`;
  }

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export default parseDateAndTime;
