const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPassError = document.getElementById("confirm-pass-error");
const phoneError = document.getElementById("phone-error");


var greenIcon = '<i class="fa-solid fa-circle-check"></i>';

function validateName(){
    var name = document.getElementById("full-name").value

    if(name.length == 0){
        nameError.innerHTML = "Fill Fullname"
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        nameError.innerHTML = "Fill Fullname";
        return false;
    }
    else{
        nameError.innerHTML = greenIcon;
        return true;
    }
}

function validateEmail(){
    
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(email.match(emailRegex)){
        emailError.innerHTML = greenIcon;
        return true;
    }
    else{
        emailError.innerHTML = "Invalid email"
        return false;
    }
}

function validatePassword(){
    var password= document.getElementById("password").value;

    if(password.length == ""){
        passwordError.innerHTML = "required";
        return false; 
    }
    if(password.length < 8){
        passwordError.innerHTML = "required";
        return false; 
    }
    else{
        passwordError.innerHTML = greenIcon;
        return true;
    }       
}

function validateConfirmPassword(){
    var password= document.getElementById("password").value;
    var confirmPassword= document.getElementById("confirm-password").value;

    if(confirmPassword === password){
        confirmPassError.innerHTML = greenIcon;
        return true;
    }
    else{
        confirmPassError.innerHTML = "Enter same password";
        return false;
    }
}

function validatePhone(){
    var phone= document.getElementById("phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "required";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "required";
        return false;
    }
    else{
        phoneError.innerHTML = greenIcon;
    return true;
    }
}