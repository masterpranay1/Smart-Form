import {
  signInRoute,
  signUpRoute,
  formCon,
  changeClass,
  hero,
  resetFields
} from "./variables.js";

/* ********************************** */
/* routing to sign in or sign up page */
/* ********************************** */

const routeSignIn = () => {
  // changeClass add the classes passed inside the first array and remove the classed passed inside the second array
  changeClass(hero, ["signIn"], ["signUp"]);
  changeClass(
    formCon,
    ["signin"],
    ["name", "email", "password", "checkbox", "signup"]
  );
  resetFields();
};
const routeSignUp = () => {
  changeClass(hero, ["signUp"], ["signIn"]);
  changeClass(formCon, ["signup", "name"], ["signin"]);
  resetFields();
};
signInRoute.addEventListener("click", routeSignIn);
signUpRoute.addEventListener("click", routeSignUp);
