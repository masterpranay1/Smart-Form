import {
  body,
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
  hasClass,
  saveUser,
  user,
  googleBtn,
} from "./variables.js";
import {
  isValidUserName,
  isValidEmail,
  isValidPassword,
  isPasswordMatching,
} from "./validations.js";
import { animateCircle, animateLine } from "./animations.js";
import {
  addUserNameAndId,
  fetchUser,
  getData,
  getUserName,
  googleSignIn,
} from "./firebase.js";

const signUpStates = ["name", "email", "password", "checkbox"];
let currentState = 0;
let notListening = [1, 1, 1, 1, 1];
animateCircle(0);

/* ********************************** */
/* routing to sign in or sign up page */
/* ********************************** */

const routeSignIn = () => {
  // changeClass add the classes passed inside the first array and remove the classed passed inside the second array
  changeClass(hero, ["signIn"], ["signUp"]);
  changeClass(formCon, ["signin"], [...signUpStates, "signup"]);
  [name, email, password, confirmPassword].forEach((e) => {
    changeClass(e, [], ["warn", "success"]);
  });
  resetFields();
  animateLine(0);
  animateCircle(0);
  currentState = null;
  notListening = [1, 1, 1, 1, 1];
  nameInput.removeEventListener("keyup", handleUserValidation);
  emailInput.removeEventListener("keyup", handleEmailValidation);
  passwordInput.removeEventListener("keyup", handlePasswordValidation);
  confirmPasswordInput.removeEventListener("keyup", handleMatchPassword);
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
  if (currentState == null) return -1;
  let message = isValidUserName(nameInput.value);
  if (message == "") {
    success(name);
    return 1;
  } else {
    warn(name, message);
    return 0;
  }
};
const handleEmailValidation = () => {
  if (currentState == null) return -1;
  let message = isValidEmail(emailInput.value);
  if (message == "") {
    success(email);
    return 1;
  } else {
    warn(email, message);
    return 0;
  }
};
const handleMatchPassword = () => {
  if (currentState == null) return -1;
  let message = isPasswordMatching(
    passwordInput.value,
    confirmPasswordInput.value
  );
  let message2 = isValidPassword(passwordInput.value);
  if (message == "" && message2 == "") {
    success(confirmPassword);
    return 1;
  } else {
    warn(confirmPassword, message);
    return 0;
  }
};
const handlePasswordValidation = () => {
  if (currentState == null) return -1;
  let message = isValidPassword(passwordInput.value);
  if (message == "") {
    success(password);
    return 1;
  } else {
    warn(password, message);
    return 0;
  }
};
const handleLiveChange = () => {
  if (hasClass(name, ["warn", "success"]) && notListening[0]) {
    nameInput.addEventListener("keyup", handleUserValidation);
    notListening[0] = 0;
  }
  if (hasClass(email, ["warn", "success"]) && notListening[1]) {
    emailInput.addEventListener("keyup", handleEmailValidation);
    notListening[1] = 0;
  }
  if (hasClass(password, ["warn", "success"]) && notListening[2]) {
    passwordInput.addEventListener("keyup", handlePasswordValidation);
    notListening[2] = 0;
  }
  if (hasClass(confirmPassword, ["warn", "success"]) && notListening[3]) {
    confirmPasswordInput.addEventListener("keyup", handleMatchPassword);
    notListening[3] = 0;
  }
};
const handleNext = () => {
  switch (currentState) {
    case 0:
      handleUserValidation() == 1 ? currentState++ : null;
      break;
    case 1:
      handleEmailValidation() == 1 ? currentState++ : null;
      break;
    case 2:
      handlePasswordValidation();
      handleMatchPassword() == 1 ? currentState++ : null;
      break;
    default:
  }
  animateLine(currentState);
  animateCircle(currentState);
  handleLiveChange();
  changeClass(formCon, [signUpStates[currentState]], signUpStates);
};
next.addEventListener("click", handleNext);
prev.addEventListener("click", () => {
  currentState--;
  animateLine(currentState);
  animateCircle(currentState);
  changeClass(formCon, [signUpStates[currentState]], signUpStates);
});

document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const handleSignUpButtonPress = () => {
  if (checkBoxInput.checked) {
    saveUser()
      .then((result) => {
        let { uid } = result.user;
        addUserNameAndId(uid, nameInput.value);
      })
      .catch((err) => {
        alert(err.message);
      });
    user.textContent = JSON.parse(localStorage.getItem("User")).name;
    changeClass(body, ["feature"], ["signup"]);
    changeClass(hero, ["feature"], ["signIn", "signUp"]);
  }
};
const handleSignInButtonPress = () => {
  const User = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  alert("Loading takes time. Please Wait!!");
  fetchUser(User)
    .then(async (result) => {
      let querySnapshot = await getUserName();
      querySnapshot.forEach((doc) => {
        if (doc.data().id == result.user.uid) {
          user.textContent = doc.data().name;
          changeClass(body, ["feature"], ["signup"]);
          changeClass(hero, ["feature"], ["signIn", "signUp"]);
        }
      });
    })
    .catch((err) => {
      alert(err.message);
    });
};
signInBtn.addEventListener("click", handleSignInButtonPress);
signUpBtn.addEventListener("click", handleSignUpButtonPress);
googleBtn.addEventListener("click", googleSignIn);
getData().then((userDetail) => {
  if (userDetail) {
    user.textContent = userDetail.displayName;
    changeClass(body, ["feature"], ["signup"]);
    changeClass(hero, ["feature"], ["signIn", "signUp"]);
  }
});
