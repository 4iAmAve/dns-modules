const deepClone = obj => {
  let newObj = {};

  if (typeof obj === 'object') {
    for (let i in obj) {
      if (obj[i] != null && typeof(obj[i]) === 'object') {
        newObj[i] = deepClone(obj[i]);
      } else {
        newObj[i] = obj[i];
      }
    }

    return newObj;
  } else {
    return obj;
  }
};

export default deepClone;
