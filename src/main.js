import {items} from './data.js';

items.forEach(function(el){
	let wishlist = document.getElementById('wish_block');
	let wish = document.createElement('li');
		wish.setAttribute('class', 'wish_el')
		wish.innerHTML = return_fancy_html(el);
	wishlist.appendChild(wish);  
});

function return_fancy_html(element) {
	let p = element.price;
	let _className = 'low_price';
	if (typeof(p) === 'number') {
		if (p >= 1000) {_className = 'medium_price';}
		if (p >= 3000) {_className = 'high_price';}
	}

	let html = `<a href="${element.url}" target="blank">
					<div class="wish_el_photo" style="background-image: url(${element.img})"></div>
					<div class="wish_el_text">
						<div class="wish_el_name">
							<span>${element.name}</span>
							<br>
							<span class="wish_el_price ${_className}">${element.price} ₽</span>
						</div>
						<div class="wish_el_person">
							${(element.person.includes(0)) ? '<div class="female_ph"></div>' : ''}
							${(element.person.includes(1)) ? '<div class="male_ph"></div>' : ''}
						</div>
					</div>
				</a>`;
	return html;
}