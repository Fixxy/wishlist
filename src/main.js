import Wishlist from './Elements/Wishlist.js';
import DB from './Utilities/Database.js';

// initialize a new wishlist
const wishlist = new Wishlist(document.getElementById('wish_block'));

// load db and add entries to the wishlist
new DB('1WbMN5VnhXpO9ofOBdipI_WMlBiNacXJx4LXgZUCs9TE', {
	onLoad: (items) => {
		items.forEach((el) => {
			wishlist.addEntry({data:el})
		});
	}
});