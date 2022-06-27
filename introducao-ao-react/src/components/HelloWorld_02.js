const HelloWorld_02 = () => {
	let date = new Date();
	let fullDate = date.toLocaleDateString();

	let msg = 'Hello World!';

	let fullMsg = msg.length;

	for (let i = 0; i <= fullMsg; i++) {
		if (i == fullMsg) {
			fullMsg = msg;
			return (
				<div>
					{fullMsg} {fullDate}
				</div>
			);
		}
	}
};

export default HelloWorld_02;
