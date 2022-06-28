import { useState } from "react";

const HelloWorld_08 = () => {
  let data = new Date();
  let date = data.toLocaleDateString();
  const [x] = useState(true);
  return <div>{x && <p>Hello World! {date}</p>}</div>;
};

export default HelloWorld_08;
