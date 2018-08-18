const getContrast50 = (hexcolor: string) => {
  let hex = hexcolor;
  if (hex.indexOf('#') === 0) {
    hex = hex.substring(1, hex.length);
  }
  return (parseInt(hex, 16) > 0xffffff / 2) ? 'rgba(0, 0, 0, .9)' : 'rgba(255, 255, 255, 0.9)';
};

export default getContrast50;
