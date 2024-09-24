const toWelcome = () => {
	console.log(
		"----HI---\nI'm the Console of Truth or Connie for friends. \n----Wait 5 second to get your message of truth!----"
	);
};

const toGenerateMessage = (user) => {
	return {
		_arrayMessage: [],
		_you: user,

		toGetMessage() {
			const messages = [
				"The only thing that never bugs out? The coffee break.",
				"Multitasking is the art of messing up multiple things at once.",
				"Patience is a virtue... and page loading is torture.",
				"Procrastination is like a bug: it always shows up at the wrong time.",
				"I'm not lazy, I'm just conserving energy... for the next update.",
				"If you can't find a bug in your code, congratulations: you've just created one.",
				"In life, as in code, the backup is never recent enough.",
				"Whoever said happiness can't be bought has never tried ordering pizza online.",
				"An error a day keeps the deploy away.",
				"The best ideas come in the shower... too bad the code doesn't follow.",
			];
			let message;
			for (let i = 0; i < messages.length; i++) {
				if (this._arrayMessage.length === 0) {
					message = messages[Math.floor(Math.random() * messages.length)];
					this._arrayMessage.push(message);
				}
			}
			setTimeout(() => {
				console.log(
					`${this._you} this is your truth for today: ${this._arrayMessage[0].toUpperCase()}`
				);
			}, 5000);
		},
	};
};

const main = () => {
    toWelcome();
	let you = "Fab";
	const objMessage = toGenerateMessage(you);
	objMessage.toGetMessage();
};

main();
