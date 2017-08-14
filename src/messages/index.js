class Message {
	constructor (message) {
		this.body = document.querySelector('body');
		this.content = document.createElement('div');
		this.close = document.createElement('p');
		this.messagePar = document.createElement('p');
		this.close.textContent = '✖';
		this.messagePar.textContent = message;

		this.content.style.cssText = "background-color: rgba(0, 255, 0, 0.8); \
		position: fixed; \
		z-index: 9999; \
		width: 100%; \
		right: 0px; \
		top: 0px; \
		display: table; \
		height: 130px; \ ";

		this.close.style.cssText = "color: #fff;	\
		font-size: 30px; \
		margin: 0px; \
		text-align: right; \
		margin-right: 9px; \
		cursor: pointer; \ ";

		this.messagePar.style.cssText = "color: #fff; \
		text-align: center; \
		font-size: 60px; \
		margin: 0px; \ ";
	}

	render () {
		this.content.appendChild(this.close);
		this.content.appendChild(this.messagePar);
		

		this.body.insertBefore(this.content, document.body.firstChild);
		this.destroy();
	}

	destroy () {
		let content = this.content;

		function closeDiv () {
			content.remove();
		}

		this.close.addEventListener('click', closeDiv);
	}
}

export default Message;