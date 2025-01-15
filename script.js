/* let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let error = document.getElementById('error');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validateInput();
})

let usernameValue = username.value.trim();
let passwordValue = password.value.trim();
let emailValue = email.value.trim();
let password2Value = password2.value.trim();

function isEmail(email) {
    let atSymbol = emailValue.indexOf('@');
    if (atSymbol < 1) {
        return false;
    }
    let dot = emailValue.lastIndexOf('.');
    if (dot <= atSymbol + 2) {
        return false;
    }
    if (dot == emailValue.length - 1){
        return false;
    }
    return true;
}


function validateInput(){
    if (usernameValue=="") {
        setError(username,"username cannot be empty");
    }
    else if (usernameValue.length <= 2) {
        setError(username,"username min 3 characters");    
    }
    else{
        setSuccess(username);
    }

    if (emailValue=="") {
        setError(email,"email cannot be empty");
    }
    else if (!isEmail(emailValue)) {
        setError(email,"invalid email");    
    }
    else{
        setSuccess(email);
    }
    if (passwordValue=="") {
        setError(password,"password cannot be empty");
    }
    else if (passwordValue.length < 7) {
        setError(password,"7 characters required for password");    
    }
    else{
        setSuccess(password);
    }
    if (password2Value==="") {
        setError(password,"password cannot be empty");
    }
    else if (password2Value.length < 7) {
        setError(password,"7 characters required for password");    
    }
    else{
        setSuccess(password2);
    }
}

function setError(element, message){
    let inputControl = element.parentElement;
    let errorMsg = inputControl.querySelector('.error');
    inputControl.className = "input-control error";
    errorMsg.innerHTML = message;
}
function setSuccess(element){
    let inputControl = element.parentElement;
    inputControl.className = "input-control success";
} */

    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        validateInputs();
    });
    
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }
    
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };
    
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
    
        if(usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }
    
        if(emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }
    
        if(passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8 ) {
            setError(password, 'Password must be at least 8 character.')
        } else {
            setSuccess(password);
        }
    
        if(password2Value === '') {
            setError(password2, 'Please confirm your password');
        } else if (password2Value !== passwordValue) {
            setError(password2, "Passwords doesn't match");
        } else {
            setSuccess(password2);
        }
    
    };
    