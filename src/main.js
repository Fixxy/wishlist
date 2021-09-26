import {ITEMS} from './Data.js';
import Entry from './Elements/Entry.js';

let wishlist = document.getElementById('wish_block');
ITEMS.forEach((el) => {
	new Entry(wishlist, {data:el})
});