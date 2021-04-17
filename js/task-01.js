/*const ulCategoriesEl = document.querySelector('#categories');
const itemLinkEl = ulCategoriesEl.children.length;
console.log(`'В списке ${itemLinkEl} категории.'`);*/

const ulCategoriesEl = document.querySelector('#categories');
const itemLinkEl = ulCategoriesEl.children;

const counterLink = element => { return itemLinkEl.length;    
};
console.log(`'В списке ${counterLink(itemLinkEl)} категории.'`)
counterLink();


