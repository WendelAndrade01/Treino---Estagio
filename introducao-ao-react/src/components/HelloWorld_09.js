const HelloWorld_09 = () => {
  let hello = ["Hello", "Hello World!", "Hi"];

  const helloCorrect = hello.indexOf("Hello World!");

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  let date = new Date();
  let formattedDate =
    date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

  if (helloCorrect <= 1) {
    return (
      <div>
        <p>Hello World! {formattedDate}</p>
      </div>
    );
  } else {
    return <p>Sem retorno</p>;
  }
};

export default HelloWorld_09;
