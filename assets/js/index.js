import {
  signInRoute,
  signUpRoute,
  formCon,
  changeClass,
  hero,
  resetFields,
  signInBtn,
  signUpBtn,
  prev,
  next,
  nameInput,
  emailInput,
  passwordInput,
  checkBoxInput,
  name,
  email,
  password,
  checkbox,
  confirmPassword,
  warn,
  confirmPasswordInput,
  success,
} from "./variables.js";
import {
  isValidUserName,
  isValidEmail,
  isValidPassword,
  isPasswordMatching,
} from "./validations.js";

const signUpStates = ["name", "email", "password", "checkbox"];
let currentState = 0;

/* ********************************** */
/* routing to sign in or sign up page */
/* ********************************** */

const routeSignIn = () => {
  // changeClass add the classes passed inside the first array and remove the classed passed inside the second array
  changeClass(hero, ["signIn"], ["signUp"]);
  changeClass(formCon, ["signin"], [...signUpStates, "signup"]);
  [name, email, password, confirmPassword].forEach(e => {
    changeClass(e, [], ["warn", "success"]);
  })
  resetFields();
  currentState = null;
};
const routeSignUp = () => {
  changeClass(hero, ["signUp"], ["signIn"]);
  changeClass(formCon, ["signup", "name"], ["signin"]);
  resetFields();
  currentState = 0;
};
signInRoute.addEventListener("click", routeSignIn);
signUpRoute.addEventListener("click", routeSignUp);

/* ******************** */
/* validating the input */
/* ******************** */

const handleUserValidation = () => {
  let message = isValidUserName(nameInput.value);
  if(message == "") {
    success(name);
    currentState++;
  } else {
    warn(name, message);
  }
};
const handleEmailValidation = () => {
  let message = isValidEmail(emailInput.value);
  if(message == "") {
    success(email);
    currentState++;
  } else {
    warn(email, message);
  }
};
const handleMatchPassword = () => {
  let message = isPasswordMatching(
    passwordInput.value,
    confirmPasswordInput.value
  );
  if(message == "") {
    success(confirmPassword);
    currentState++;
  } else {
    warn(confirmPassword, message);
  }
};
const handlePasswordValidation = () => {
  let message = isValidPassword(passwordInput.value);
  if (message == "") {
    success(password);
  } else {
    warn(password, message);
  }
};
const handleNext = () => {
  switch (currentState) {
    case 0:
      handleUserValidation();
      break;
    case 1:
      handleEmailValidation();
      break;
    case 2:
      handlePasswordValidation();
      handleMatchPassword();
      break;
    default:
  }
  changeClass(formCon, [signUpStates[currentState]], signUpStates);
};
next.addEventListener("click", handleNext);
prev.addEventListener("click", () => {
  currentState--;
  changeClass(formCon, [signUpStates[currentState]], signUpStates);
})

document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
