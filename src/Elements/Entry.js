class Entry {
	constructor(block, props) {
		this.block = block;
		this.data = props.data;
		this.createElement();
	}
	/** create dom element */
	createElement() {
		this.element = document.createElement('li');
		this.element.setAttribute('class', 'wish_el')
		this.element.appendChild(this.generateContent());
		this.block.appendChild(this.element);
	}
	/** generate html content */
	generateContent() {
		/** hyperlink element */
		let hyperLink = document.createElement('a');
			hyperLink.href = this.data.url;
			hyperLink.target = '_blank';

		/** reference photo as a background */
		let backgroundPhoto = document.createElement('div')
			backgroundPhoto.className = 'wish_el_photo';
			backgroundPhoto.style.backgroundImage = `url(${this.data.img})`;
		

		/** block of text & price */
		let contentBlock = document.createElement('div')
			contentBlock.className = 'wish_el_content';

		/** title & price */
		let price = this.data.price;
		let priceClass = 'low_price';
		if (typeof(price) === 'number') {
			if (price >= 1000) {priceClass = 'medium_price';}
			if (price >= 3000) {priceClass = 'high_price';}
		}
		let itemTexts = document.createElement('div');
			itemTexts.className = 'wish_el_name';
			itemTexts.innerHTML = `
				<span>${this.data.name}</span>
				<br>
				${(this.data.price) ? `<span class="wish_el_price ${priceClass}">${this.data.price} ₽</span>` : ''}
			`;
		contentBlock.appendChild(itemTexts);

		/** me or marina */
		let itemOwner = document.createElement('div');
			itemOwner.className = 'wish_el_person';
			itemOwner.innerHTML = `
				${(this.data.person.includes(0)) ? '<div class="photo marina"></div>' : ''}
				${(this.data.person.includes(1)) ? '<div class="photo me"></div>' : ''}
			`;
		contentBlock.appendChild(itemOwner);

		hyperLink.appendChild(backgroundPhoto);
		hyperLink.appendChild(contentBlock);

		return hyperLink;
	}
}

export default Entry;