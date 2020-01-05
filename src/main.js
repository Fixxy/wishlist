import {items} from './data.js';

items.forEach(function(el){
	console.log(el);
	let wishlist = document.getElementById('wish_block');
	let wish = document.createElement('li');
		wish.setAttribute('class', 'wish_el')
		wish.innerHTML = return_fancy_html(el);
	wishlist.appendChild(wish);  
});

function return_fancy_html(element) {


	let html = `<a href="${element.url}" target="blank">
					<div class="wish_el_photo" style="background-image: url(${element.img})"></div>
					<div class="wish_el_name">${element.name}</div>
				</a>`;
	return html;
}