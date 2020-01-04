import {items} from './data.js';

console.log(items);

let test = items;

items.forEach(function(el){
	console.log(el);
	let wishlist = document.getElementById('wishlist_block');
	let wish = document.createElement('div');
		wish.setAttribute('class', 'wish_el');
		wish.innerHTML(`${el.name} ; ${el.url} ; ${el.img} ; ${el.description}`);
	wishlist.appendChild(wish);  
});