let userName=document.querySelector("#usrname");
let usrEmail=document.querySelector("#email");
let fullName=document.querySelector("#name");
let PhoneNumber=document.querySelector("#PhoneNumber");
let myPassword=document.querySelector("#mypassword");
let confirmpass=document.querySelector("#password-1");
let html=document.querySelector("#html");
let form=document.querySelector("#form");
var SName=document.querySelector(".SName");
var SEmail=document.querySelector(".SEmail");
var Suname=document.querySelector(".Suname");
var SNum=document.querySelector(".SNum");
var Spass=document.querySelector(".Spass");
var confirmPass=document.querySelector(".confirm");
var gender=document.querySelector(".gender");
function checkLength(value){
console.log(userName.value.length);
if (fullName.value.length <= 10){    
    fullName.style.borderColor="red";
    SName.innerHTML="not valid";
    SName.style.color='red';
    
}
// else{
//     SName.innerHTML=""; 
// }

if(!fullName.value)
{
    fullName.style.borderColor="red";
    SName.innerHTML="full name is required";
    SName.style.color='red';
}
}
function change(el){
        // el.style.border="none";
}
function pass(e){
    checkLength();
isValidEmail();
usrNmeLength();
passLength();
NumLength();
validatePass();
if(fullName.value && userName.value && usrEmail.value && PhoneNumber.value && myPassword.value && confirmpass.value)
{
    console.log(fullName.value , userName.value , usrEmail.value , PhoneNumber.value , myPassword.value , confirmpass.value);
     form.reset();
}}

function isValidEmail(val){
    // console.log(email.value.includes("@"));
    if(!usrEmail.value.includes("@")){
        usrEmail.style.borderColor="red";
        SEmail.innerHTML=" it must contains @";
        SEmail.style.color='red';
    }
if(!usrEmail.value){
    usrEmail.style.borderColor="red";  
    SEmail.innerHTML=" Email is Required";
    SEmail.style.color='red';
}
// else{
//     SEmail.innerHTML=""; 
// }
}
function changing(el){
    el.style.borderColor="lightgrey";
    SName.innerHTML="";
    SEmail.innerHTML="";
    Suname.innerHTML="";
    SNum.innerHTML="";
Spass.innerHTML="";
confirmPass.innerHTML="";
}
function usrNmeLength(value){
    if(userName.value.includes(' ')){
        userName.style.borderColor='red';
        Suname.innerHTML='not Valid';
        Suname.style.color="red";
    }
    if(!userName.value)
    {
        userName.style.borderColor='red';
        Suname.innerHTML='Required';
        Suname.style.color="red";
    }
}
function NumLength(value){
    if (PhoneNumber.value.length !== 11){
        PhoneNumber.style.borderColor='red';
        SNum.innerHTML="not valid";
        SNum.style.color="red";
    }
    if(!PhoneNumber.value){
        PhoneNumber.style.borderColor='red';
        SNum.innerHTML="field Required";
        SNum.style.color="red";
    }
}
function passLength(value){
    console.log(myPassword.value.length);
    console.log(myPassword.value.includes(' '));
    if(myPassword.value.length <=5 || myPassword.value.includes(' ')){
        myPassword.style.borderColor='red';
        Spass.innerHTML="not valid";
        Spass.style.color="red";
    }
    if(!myPassword.value){
        myPassword.style.borderColor='red';
        Spass.innerHTML="field Required";
        Spass.style.color="red";
    }
}
function validatePass(value){
    if (confirmpass.value.length !== myPassword.value.length)
    {
        confirmpass.style.borderColor='red';
        confirmPass.innerHTML="not valid";
        confirmPass.style.color="red";
    }
    if(!confirmpass.value){
        confirmpass.style.borderColor='red';
        confirmPass.innerHTML="field Required";
        confirmPass.style.color="red";
    }
}
function saveValue(value){
   console.log(html.value);
   gender.innerHTML="Gender Detected"; 
   gender.style.color="red";
}