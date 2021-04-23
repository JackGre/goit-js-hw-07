const inputEl = document.querySelector('#font-size-control');
console.log(inputEl)
const spanEl = document.querySelector('#text');
console.log(spanEl)

inputEl.addEventListener('input', inputFontSizeControl);
function inputFontSizeControl() {
    const size = inputEl.value;    
    spanEl.style.fontSize = size + "px";    
}



