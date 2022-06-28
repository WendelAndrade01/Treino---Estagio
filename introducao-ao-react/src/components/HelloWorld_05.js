const HelloWorld_05 = () => {
  let hello = "Hello World!";
  hello = hello.toUpperCase();

  let time = new Date("2022,06,28");
  let fullDate = new Date();

  fullDate.setFullYear(2022);
  fullDate.setMonth(0);
  fullDate.setDate(28);

  if (time <= fullDate) {
    return `${hello} ${time}`;
  } else {
    return `${hello} ${fullDate}`;
  }
};

export default HelloWorld_05;
