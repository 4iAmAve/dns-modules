const cleanObject = (obj: any): any => {
  const cleansed = {} as any;
  Object.keys(obj).forEach((key: string) => {
    if (obj[key] !== null) {
      cleansed[key] = obj[key];
    }
  });
  return cleansed;
};

export default cleanObject;
