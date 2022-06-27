const HelloWorld = () => {
	const helloWorld = 'Hello World! ';
	let date = new Date();
	const fullDate = `${date.getDate()}
    ${date.getMonth()}
    ${date.getFullYear()}`;

	return (
		<div>
			{helloWorld}
			{fullDate}
		</div>
	);
};

export default HelloWorld;
