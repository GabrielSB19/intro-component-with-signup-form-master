"use strict";

let firstName = document.querySelector("#name");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const button = document.querySelector("#submit");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError);
    validateEmpty(lastName.value, lastName, lastNameError);
    validateEmpty(email.value, email, emailError);
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passwordError);
})

const validateEmpty = (value, divInput, divError) =>{
    if(value.length == 0){
        showError(divInput, divError);
    } else {
        hideError(divInput, divError);
    }
}

const validateEmail = (value, divInput, divError) => {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let confirmation = expReg.test(value);
    if(confirmation){
        divInput.style.border = '1px solid hsl(246, 25%, 77%)'
        divError.innerHTML = "";
    } else {
        divInput.style.border = '1px solid red';
        divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="Error">
        <p class="error">${divInput.placeholder} isn't correct</p>`
    }
}

const showError = (divInput, divError) =>{
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="Error">
    <p class="error">${divInput.placeholder} cannot be empty</p>`
}

const hideError = (divInput, divError) => {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)'
    divError.innerHTML = "";
}