/* ******************* */
/* username validation */
/* ******************* */

export const isValidUserName = (username) => {
  let returnString = "";
  if (username.length == 0) {
    returnString = "*Field Required";
  } else if (username.length > 12) {
    returnString = "*Username cannot be longer than 12 characters";
  }
  return returnString;
};

/* **************************** */
/* Email Validation Using Regex */
/* **************************** */

export const isValidEmail = (email) => {
  let returnString = "";
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.length == 0) {
    returnString = "*Email Required";
  } else if(!email.toLowerCase().match(re)) {
    returnString = "*Enter a valid Email";
  }
  return returnString;
};

/* ******************* */
/* Password Validation */
/* ******************* */

export const isValidPassword = (password) => {
  let returnString = "";
  let lower = 0,
    upper = 0,
    number = 0,
    special = 0;
  let size = password.length;
  const arr = password.split("");
  arr.forEach((i) => {
    if (i >= "a" && i <= "z") lower++;
    else if (i >= "A" && i <= "Z") upper++;
    else if (i >= 0 && i <= 9) number++;
    else special++;
  });

  if (size < 8) {
    returnString = "*Password should be atleast 8 character long";
  } else if (size > 12) {
    returnString = "*Password can be max 12 characters long";
  } else if (lower == 0) {
    returnString = "*Password must include a lowercase character";
  } else if (upper == 0) {
    returnString = "*Password must include a uppercase character";
  } else if (special == 0) {
    returnString = "*Password must include a special character";
  } else if (number == 0) {
    returnString = "*Password must include a number";
  }

  return returnString;
};

/* ***************** */
/* Matching Password */
/* ***************** */

export const isPasswordMatching = (password, confirmPassword) => {
    let returnString = "";
    if(confirmPassword.length == 0) {
        returnString = "*Field Required";
    } else if(confirmPassword !== password) {
        returnString = "*Password didn't match";
    }
    return returnString;
}