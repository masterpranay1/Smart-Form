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

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const checkbox = document.querySelector('#checkbox');

export { name, email, password, confirmPassword, checkbox };

export const resetFields = () => {
    const wrappers = [name, email, password, confirmPassword];
    wrappers.forEach(wrapper => {
        wrapper.querySelector('input').value = '';
    })
    checkbox.querySelector('input').checked = false;
}

/* ******************************************* */
/* function to add or remove an array of class */
/* ******************************************* */

export const changeClass = (element, classesToAdd, classesToRemove) => {
  classesToAdd.forEach((className) => {
    element.classList.add(className);
  });
  classesToRemove.forEach((className) => {
    element.classList.remove(className);
  });
};