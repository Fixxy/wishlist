import {items} from './data.js';

console.log(items);

let test = items;

items.forEach(function(el){
	console.log(el);
	let wishlist = document.getElementById('wishlist_block');
	let wish = document.createElement('div');
		wish.setAttribute('class', 'wish_el')
		wish.innerHTML = return_fancy_html(el);
	wishlist.appendChild(wish);  
});

function return_fancy_html(element) {
	let html = `<div class="col-md-6 mb-4">
					<div class="card">
						<div class="view overlay">
							<a href="${element.url}" target="_blank">
								<img src="${element.img}" class="card-img-top" alt="">
							</a>
						</div>
						<div class="card-body">
							<h4 class="card-title">${element.name}</h4>
							<!--Text-->
							<p class="card-text">${element.description}</p>
							<a href="#" target="_blank" class="btn btn-primary btn-md waves-effect waves-light">Открыть</a>
						</div>
					</div>
				</div>`;
	return html;
}