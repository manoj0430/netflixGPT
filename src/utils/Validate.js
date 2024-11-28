export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // const isNameValid

  if (!isEmailValid || !isPasswordValid)
    return "Email or Password is incorrect";

  return null;
};
