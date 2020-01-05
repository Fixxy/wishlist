import {items} from './data.js';

items.forEach(function(el){
	let wishlist = document.getElementById('wish_block');
	let wish = document.createElement('li');
		wish.setAttribute('class', 'wish_el')
		wish.innerHTML = return_fancy_html(el);
	wishlist.appendChild(wish);  
});

function return_fancy_html(element) {
	let html = `<a href="${element.url}" target="blank">
					<div class="wish_el_photo" style="background-image: url(${element.img})"></div>
					<div class="wish_el_text">
						<div class="wish_el_name">
							<span>${element.name}}</span>
							<br>
							<span class="wish_el_price">${element.price}</span>
						</div>
					</div>
				</a>`;
	return html;
}