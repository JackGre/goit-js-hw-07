/*const ulCategoriesEl = document.querySelector('#categories');
const itemLinkEl = ulCategoriesEl.children.length;
console.log(`'В списке ${itemLinkEl} категории.'`);*/

const ulCategoriesEl = document.querySelector('#categories');
const itemLinkEl = ulCategoriesEl.children;

const ggg = elem => { return itemLinkEl.length;    
};
console.log(`'В списке ${ggg(itemLinkEl)} категории.'`)
ggg()


