const getContrastYIQ = (hexcolor: string) => {
  let hex = hexcolor;
  if (hex.indexOf('#') === 0) {
    hex = hex.substring(1, hex.length);
  }
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'rgba(0, 0, 0, .9)' : 'rgba(255, 255, 255, 0.9)';
};

export default getContrastYIQ;
