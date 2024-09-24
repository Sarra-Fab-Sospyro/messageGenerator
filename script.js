const toWelcome = () => {
	console.log(
		"----HI---\nI'm the Console of Truth or Connie for friends. \n----Wait 5 seconds to get your message of truth!----"
	);
};

const toGenerateMessage = (user) => {
	return {
		_you: user,
		toGetMessage() {
			const subjects = ["You", "Your friend", "The universe", "Your cat"];
			const verbs = [
				"will find",
				"is about to discover",
				"will teach you",
				"will help you to enjoy",
			];
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
					`${
						this._you
					}, this is your truth for today: •• ${message.toUpperCase()} ••`
				), this.toGetASCIIArt();
			}, 5000);
		},
		toGetASCIIArt() {
			const animals = ["dog", "rabbit", "cat"];
			const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
			let asciiArt = "";

			if (randomAnimal === "dog") {
				asciiArt = `
      / \\__
     (    @\\__ 
     /         O
    /   (_____/
/_____/   U
				`;
			} else if (randomAnimal === "rabbit") {
				asciiArt = `
    (\\(\\ 
   ( -.-)
   o_(")(")
				`;
			} else if (randomAnimal === "cat") {
				asciiArt = `
    /\\_/\\  
   ( o.o ) 
    > ^ < 
				`;
			}

			console.log(asciiArt);
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
