const HelloWorld_03 = () => {
	let date = new Date(2022, 6, 27, 14, 0, 0);
	let dateString = date.toDateString();

	let hello = 'Hello ';
	let world = 'World! ';

	let helloWorld = hello + world;

	return (
		<div>
			{helloWorld}
			{dateString}
		</div>
	);
};

export default HelloWorld_03;
