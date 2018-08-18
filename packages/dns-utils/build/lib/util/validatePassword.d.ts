declare const validatePassword: (password: string) => {
    strong: boolean;
    medium: boolean;
    enough: boolean;
};
export default validatePassword;
