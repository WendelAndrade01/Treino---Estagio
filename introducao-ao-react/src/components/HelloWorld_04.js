const HelloWorld_04 = () => {
  const object = {
    hi: "hi",
    hello: "Hello World!",
    date: "2022/06/28",
  };

  return (
    <div>
      {object.hello}
      {object.date}
    </div>
  );
};

export default HelloWorld_04;
