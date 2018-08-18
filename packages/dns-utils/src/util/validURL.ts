const validURL = (str: string) => {
  const exp = /(\b(http|https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return exp.test(str);
};

export default validURL;
