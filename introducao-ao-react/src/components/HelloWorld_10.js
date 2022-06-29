const HelloWorld_10 = () => {
  const greetings = [
    { id: 1, name: "Hello" },
    { id: 2, name: "World!" },
  ];

  const styles = { listStyle: "none" };

  let date = new Date();
  let fullDate = `${date.getUTCDay()}
  /${date.getUTCMonth()}
  /${date.getUTCFullYear()}`;

  return (
    <div>
      {greetings.length ? (
        <ul style={styles}>
          {greetings.map((hi) => (
            <li key={hi.id}>
              {hi.name} | {fullDate}
            </li>
          ))}
        </ul>
      ) : (
        <div>Sem nenhum resultado !</div>
      )}
    </div>
  );
};

export default HelloWorld_10;
