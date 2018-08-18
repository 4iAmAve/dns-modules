const parseDateAndTimeToFixed = (dateString: string, from?: boolean) => {
  const date = new Date(dateString);

  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  const hours = from ? '00' : '23';
  const minutes = from ? '00' : '59';
  const seconds = from ? '00' : '59';

  if (year.length < 4) {
    return false;
  }

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export default parseDateAndTimeToFixed;
