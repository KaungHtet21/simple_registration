var firstName = document.getElementById("firstName");
var firstNameValidation = function() {
    firstNameValue = firstName.value.trim();
    validateFirstName = /^[A-Za-z]{3,30}$/;
    firstNameErr = document.getElementById("first-name-err");
    if (firstNameValue == ''){
        firstNameErr.innerHTML = 'First name must not be empty';
        console.log('empty');
    }else if(!validateFirstName.test(firstNameValue)){
        firstNameErr.innerHTML = 'First name must be between 3 and 30 words without white space';
        console.log('error');
    }else {
        firstNameErr.innerHTML = '';
        console.log('success');
        return true;
    }
}

firstName.oninput = function() {
    firstNameValidation();
}

var lastName = document.getElementById("lastName");
var lastNameValidation = function() {
    lastNameValue = lastName.value.trim();
    validateLastName = /^[A-Za-z]{3,30}$/;
    lastNameErr = document.getElementById("last-name-err");
    if (lastNameValue == ''){
        lastNameErr.innerHTML = 'Last name must not be empty';
        console.log('empty');
    }else if(!validateLastName.test(lastNameValue)){
        lastNameErr.innerHTML = 'Last name must be between 3 and 30 words without white space and numbers';
        console.log('error');
    }else {
        lastNameErr.innerHTML = '';
        console.log('success');
        return true;
    }
}

lastName.oninput = function() {
    lastNameValidation();
}

var email = document.getElementById('emailAddress');
var emailValidation = function() {
    emailValue = email.value.trim();
    validateEmail = /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    emailErr = document.getElementById('email-err');
    if (emailValue == '') {
        emailErr.innerHTML = 'Email must not be empty';
        console.log('empty');
    }else if(!validateEmail.test(emailValue)) {
        emailErr.innerHTML = 'Email must be valid without white space';
        console.log('error');
    }else {
        emailErr.innerHTML = '';
        console.log('success');
        return true;
    }
}

email.oninput = function() {
    emailValidation();
}

var phone = document.getElementById('mobileNumber');
var phoneValidation = function() {
    phoneValue = phone.value.trim();
    validatePhone = /^(?=[\.+])(?=.[95])[0-9+]{8,13}$/;
    phoneErr = document.getElementById('mobile-number-err');
    if (phoneValue == '') {
        phoneErr.innerHTML = 'Mobile number must not be empty';
        console.log('empty');
    }else if(!validatePhone.test(phoneValue)){
        phoneErr.innerHTML = 'Mobile number must be valid between 8 and 13 numbers';
        console.log('error');
    }else {
        phoneErr.innerHTML = '';
        console.log('success');
        return true;
    }
}

phone.oninput = function() {
    phoneValidation();
}

var password = document.getElementById('password');
var passwordValidation = function() {
    passwordValue = password.value.trim();
    validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    passwordErr = document.getElementById('password-err');
    if (passwordValue == ''){
        passwordErr.innerHTML = 'Password must not be empty';
        console.log('emptg');
    }else if(!validatePassword.test(passwordValue)) {
        passwordErr.innerHTML = 'Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters';
        console.log('error');
    }else {
        passwordErr.innerHTML = '';
        console.log('success');
        return true;
    }
}

password.oninput = function() {
    passwordValidation();
}

var confirmPass = document.getElementById('confirmPassword');
var confirmPasswordValidation=function(){
    confirmPasswordValue=confirmPassword.value.trim(); 
    
    confirmPasswordErr=document.getElementById('confirm-password-err');
    if(confirmPasswordValue==""){
        confirmPasswordErr.innerHTML="Confirm Password is required";
    }
   else if(confirmPasswordValue!=password.value){
      confirmPasswordErr.innerHTML="Confirm Password does not match";
    }
    else{
      confirmPasswordErr.innerHTML="";
      return true;
    }
 }

 confirmPass.oninput = function() {
     confirmPasswordValidation();
 }

 document.getElementById("registration_form").onsubmit=function(){
    firstNameValidation();
    lastNameValidation();
    emailValidation();
    phoneValidation();
    passwordValidation();
    confirmPasswordValidation();
    if(firstNameValidation()==true && 
      lastNameValidation()==true && 
      emailValidation() == true && 
      phoneValidation()==true && 
      passwordValidation()==true && 
      confirmPasswordValidation()==true){
      return true;
    }else{
      return false;
    }
  }

