const validatePassword = (password: string) => {
  const strongRegex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/;
  const mediumRegex = /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
  const enoughRegex = /(?=.{6,}).*/;

  return {
    strong: strongRegex.test(password),
    medium: mediumRegex.test(password),
    enough: enoughRegex.test(password),
  };
};

export default validatePassword;
