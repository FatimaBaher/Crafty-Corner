//grabbing elements
const createBtn = document.querySelector('#create-btn');
const loginBtn = document.querySelector('#signup-btn');
const loginFormWrapper =document.querySelector('.login-form-wrapper');
const signupFormWrapper =document.querySelector('.signup-form-wrapper');


//Adding Event Listeners
createBtn.addEventListener("click",()=>{
    loginFormWrapper.style.opacity = 0;
    signupFormWrapper.style.opacity = 1;
    loginFormWrapper.style.zIndex = 1;
    signupFormWrapper.style.zIndex = 2;
});

loginBtn.addEventListener("click",()=>{
    loginFormWrapper.style.opacity = 1;
    signupFormWrapper.style.opacity = 0;
    loginFormWrapper.style.zIndex = 2;
    signupFormWrapper.style.zIndex = 1;
});