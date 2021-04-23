const inputEl = document.querySelector('#name-input')
console.log(inputEl)

const spanEl = document.querySelector('#name-output')
console.log(spanEl)

inputEl.addEventListener('input', changeInputEl);


function changeInputEl(event) {

    if(inputEl.value === '') {
        return spanEl.textContent = 'незнакомец'
    }
    return spanEl.textContent = event.currentTarget.value 
}