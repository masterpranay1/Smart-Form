/* body selector */
export const body = document.querySelector("body");

/* hero section -> to toggle image */
export const hero = document.querySelector("#hero");

/* link to move between signin and signup page */
export const signInRoute = document.querySelector("#a-signin");
export const signUpRoute = document.querySelector("#a-signup");

/* Form Container for both signin and singup page ( same ) */
export const formCon = document.querySelector("#form-con");

/* ******************** */
/* Input field wrappers */
/* ******************** */

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const checkbox = document.querySelector("#checkbox");

export { name, email, password, confirmPassword, checkbox };

/* **************************************** */
/* selecting the input tag and their message Area in each wrappers */
/* **************************************** */

const nameInput = name.querySelector("input");
const emailInput = email.querySelector("input");
const passwordInput = password.querySelector("input");
const confirmPasswordInput = confirmPassword.querySelector("input");
const checkBoxInput = checkbox.querySelector("input");

const nameMessage = name.querySelector("p");
const emailMessage = email.querySelector("p");
const passwordMessage = password.querySelector("p");
const confirmPasswordMessage = confirmPassword.querySelector("p");
const checkBoxMessage = checkbox.querySelector("p");

export {
  nameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
  checkBoxInput,
};
export {
  nameMessage,
  emailMessage,
  passwordMessage,
  confirmPasswordMessage,
  checkBoxMessage,
};

/* ******************************** */
/* selecting the button in our form */
/* ******************************** */

const prev = document.querySelector("#btn-prev");
const next = document.querySelector("#btn-next");
const signInBtn = document.querySelector("#btn-signIn");
const signUpBtn = document.querySelector("#btn-signUp");

export { prev, next, signInBtn, signUpBtn };

/* function to reset all the input fields */
export const resetFields = () => {
  const wrappers = [name, email, password, confirmPassword];
  wrappers.forEach((wrapper) => {
    wrapper.querySelector("input").value = "";
    wrapper.querySelector("p").textContent = "";
  });
  checkbox.querySelector("input").checked = false;
};

/* ******************************************* */
/* function to add or remove an array of class */
/* ******************************************* */

export const changeClass = (element, classesToAdd, classesToRemove) => {
  classesToRemove.forEach((className) => {
    element.classList.remove(className);
  });
  classesToAdd.forEach((className) => {
    element.classList.add(className);
  });
};

/* *************************** */
/* function to check the class */
/* *************************** */

export const hasClass = (element, classes) => {
  let tmp = 0
  classes.forEach((className) => {
    if (element.classList.contains(className)) {
      tmp = 1;
    }
  });
  return tmp;
};

/* ********************************************************** */
/* fucntion to change styling of input and their message area */
/* ********************************************************** */

export const warn = (elem, message) => {
  elem.querySelector("p").textContent = message;
  changeClass(elem, ["warn"], ["success"]);
};
export const success = (elem) => {
  elem.querySelector("p").textContent = "";
  changeClass(elem, ["success"], ["warn"]);
};

/* feature section user */
export const user = document.querySelector('#user');

/* save user */
export const saveUser = () => {
  let User = {
    name : nameInput.value,
    email : emailInput.value,
    password : passwordInput.value
  }
  localStorage.setItem('User', JSON.stringify(User));
}