const inputEl = document.querySelector('#validation-input');
//console.log(inputEl);
const inputData = document.querySelector('[data-length]');
//console.log(inputData);

inputEl.addEventListener('focus', inputFocus);
function inputFocus() {
    //console.log('Фокус включен');
}

inputEl.addEventListener('blur', inputBlur);
function inputBlur(event) {
    
    //console.log('Фокус выключин');
    const counterInputEl = inputEl.value.length;
    //console.log(counterInputEl);
    const counterData = inputData.dataset.length;    
   if(counterInputEl === Number(counterData)) {
    event.currentTarget.classList.add('valid')}   
   if(counterInputEl !== Number(counterData)) {   
   event.currentTarget.classList.add('invalid')}
    
}

