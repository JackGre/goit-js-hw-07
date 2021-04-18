//const ulCategoriesEl = document.querySelector('#categories');
//const itemLinkEl = ulCategoriesEl.children.length;
//console.log(`'В списке ${itemLinkEl} категории.'`);
//console.log(ulCategoriesEl)

//************************************************** */


//******************************************************* */

/*const itenEl = document.querySelectorAll('.item');
const nameItem = itenEl[0].firstElementChild.textContent;
console.log(`☢ Категория: ${nameItem}`)


const quantityLinkEl = itenEl[0].querySelectorAll('li');
const hhhh = quantityLinkEl.firstElementChild;
console.log(`☣ Количество элементов: ${quantityLinkEl.length}`)*/

//************************************************ */

const ulCategoriesEl = document.querySelector('#categories');
const itemLinkEl = ulCategoriesEl.children;

const counterLink = element => { return itemLinkEl.length;    
};
console.log(`'В списке ${counterLink(itemLinkEl)} категории.'`)


const itenEl = document.querySelectorAll('.item');

for(let i = 0; i < itenEl.length; i += 1) {
    const nameItem = itenEl[i].firstElementChild.textContent;
    console.log(`☢ Категория: ${nameItem}`)
    const quantityLinkEl = itenEl[i].querySelectorAll('li');
    console.log(`☣ Количество элементов: ${quantityLinkEl.length}`)
}    







