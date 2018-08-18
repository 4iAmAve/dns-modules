const parseDateHumanReadable = (obj: { date: string, withTime?: boolean, withoutOffset?: boolean }) => {
  const { date, withTime, withoutOffset } = obj;
  const dateObject = new Date(Date.parse(date));
  const now = new Date(Date.now());

  const parsedFullYear = dateObject.getFullYear();
  const curYear = now.getFullYear();

  if (parsedFullYear > curYear) {
    return false;
  }

  const readableDate = dateObject.toDateString();

  if (readableDate.indexOf('Invalid') >= 0) {
    return false;
  }

  let readableTime = '';

  if (withoutOffset) {
    const dateTimeString = dateObject.toUTCString();

    return `${dateTimeString}`;
  }

  if (withTime && !withoutOffset) {
    readableTime = dateObject.toLocaleTimeString();

    return `${readableDate} ${readableTime}`;
  }

  return `${readableDate}`;
};

export default parseDateHumanReadable;
