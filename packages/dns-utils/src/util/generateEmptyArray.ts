const generateEmptyArray = (length: number) => {
  return Array.apply(null, { length }).map(
    (value: any, index: number) => {
      return index;
    }
  );
};

export default generateEmptyArray;
