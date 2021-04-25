const imputEl = document.querySelector('input');
//console.log(imputEl);
const createBtn = document.querySelector('[data-action=render]');
//console.log(createBtn);
const clearBtn = document.querySelector('[data-action=destroy]');
//console.log(clearBtn);
const containerBoxes = document.querySelector("#boxes");
//console.log(containerBoxes);

let amount;

imputEl.addEventListener('input', inputEvent)
function inputEvent(event)  {
    amount = event.currentTarget.value;
}

createBtn.addEventListener('click', parametersBoxes )
function parametersBoxes()  {
    if(imputEl.value === '') {
        return
    }
    const elementsBoxes = Array.from({length: amount}, (element, index) => {
        const createBox = document.createElement('div');
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        createBox.style.backgroundColor = `rgb(
            ${getRandom(0, 255)},
            ${getRandom(0, 255)},
            ${getRandom(0, 255)}`;

            if (containerBoxes.lastChild !== null) {
                const lastWidth = parseInt(containerBoxes.lastChild.style.width);
                
                createBox.style.width = `${(index + 1) * 10 + lastWidth}px`;
                createBox.style.height = `${(index + 1) * 10 + lastWidth}px`;
                }
            else {
                createBox.style.width = `${(index + 3) * 10}px`;
                createBox.style.height = `${(index + 3) * 10}px`;
                }
                createBox.style.marginTop = "10px";
    
            return createBox;
    });
    return containerBoxes.append(...elementsBoxes);
}


clearBtn.addEventListener("click", clearElBox)
function clearElBox() {
    containerBoxes.innerHTML = '';
    imputEl.value = "";
}



