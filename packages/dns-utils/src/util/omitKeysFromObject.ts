const omitKeysFromObject = (object: any, omittables: any) => {
  return Object.keys(object).reduce(
    (result, key) => {
      if (omittables.indexOf(key) < 0) {
        result[key] = object[key];
      }
      return result;
    },
    {}
  );
};

export default omitKeysFromObject;
