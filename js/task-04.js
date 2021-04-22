const buttonDecrement = document.querySelector('[data-action="decrement"]')
console.log(buttonDecrement)
const buttonIncrement = document.querySelector('[data-action="increment"]')
console.log(buttonIncrement)

const valueEl = document.querySelector('#value')
console.log(valueEl)

const counterValue = {
    value: 0,
    dicrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
}

const decrement = () => {
    counterValue.dicrement();
    console.log('Кликнул Decrement')
    valueEl.textContent = counterValue.value;
}

const increment = () => {
    counterValue.increment();
    console.log('Кликнул Increment')
    valueEl.textContent = counterValue.value;
}

buttonDecrement.addEventListener('click', decrement)
buttonIncrement.addEventListener('click', increment)