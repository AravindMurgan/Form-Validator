//DOMS//
// const form = document.querySelector('.form');
// const formcontrol = document.querySelector('.form-control');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const confirmpassword = document.querySelector('#password2');

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


///Event for submit///
form.addEventListener('submit',function(e){
   

    checkRequired([username,email,password,password2]);
    checkLength(username , 3 ,15);
    checkLength(password , 6 ,16);
    checkEmail(email);
    matchPasswords(password,password2);


    e.preventDefault();

});

 ///check all function///
 function checkRequired(inputArr){

    inputArr.forEach(function(input){
        console.log(input);
        if(input.value === ''){
            showError(input,`${getLabelName(input)} is Required`)
        }
    })
 }

 function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid')
    }
 }

 function checkLength(input,min,max){

    if(input.value.length < min){
        showError(input , `${getLabelName(input)} Should be more than ${min} Characters`);
    }
    else if(input.value.length > max){
            showError(input , `${getLabelName(input)} Should be less than ${max} Characters`);
        }else{
            showSuccess(input);
        }
    
    
 }

 function matchPasswords(input1,input2){
     if(input1.value !== input2.value){
         showError(input2,'Passwords dont match');
     }else{
         showSuccess(input2);
     }
 }

 function getLabelName(input){
      const label = input.parentElement.querySelector('label').textContent;
      return label;
 }


//Error//
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

///Success///
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}