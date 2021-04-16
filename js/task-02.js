const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



const ingredientsLinkEl = document.querySelector('#ingredients');

const ingredientsLinkElementEl = links => {
    return links.map(link => {
        const linkEl = document.createElement('li');
        linkEl.textContent = link;
        return linkEl;
    });
};
const elements = ingredientsLinkElementEl(ingredients)
ingredientsLinkEl.append(...elements);
console.log(elements)
