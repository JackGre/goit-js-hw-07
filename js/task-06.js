const inputEl = document.querySelector('#validation-input');
const inputData = document.querySelector('[data-length]');


inputEl.addEventListener('focus', inputFocus);
function inputFocus() {
    inputEl.classList.remove("valid", "invalid");    
}

inputEl.addEventListener('blur', inputBlur);
function inputBlur(event) {   
    const counterInputEl = inputEl.value.length;  
    const counterData = inputData.dataset.length;    
   if(counterInputEl === parseInt(counterData)) 
   {
    event.currentTarget.classList.add('valid');
    return;
   }        
   event.currentTarget.classList.add('invalid');    
}



