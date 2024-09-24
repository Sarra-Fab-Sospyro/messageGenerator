const toWelcome = () => {
	console.log(
		"----HI---\nI'm the Console of Truth or Connie for friends. \n----Wait 5 seconds to get your message of truth!----"
	);
};

const toGenerateMessage = (user) => {
	return {
		_you: user,
		toGetMessage() {
			const subjects = ["You", "Your friend", "The universe"];
			const verbs = ["will find", "is about to discover", "will teach you"];
			const objects = [
				"the meaning of life.",
				"new opportunities.",
				"happiness.",
				"the secret of coding.",
				"the joy of debugging.",
			];

			// Randomly select one from each category
			const subject = subjects[Math.floor(Math.random() * subjects.length)];
			const verb = verbs[Math.floor(Math.random() * verbs.length)];
			const object = objects[Math.floor(Math.random() * objects.length)];

			// Combine the selected parts into a message
			const message = `${subject} ${verb} ${object}`;

			setTimeout(() => {
				console.log(
					`${this._you}, this is your truth for today: ${message.toUpperCase()}`
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
