const HelloWorld_06 = () => {
  let datas = {
    date: "05/03/2022",
    data2: "28/06/2022",
    data3: "09/05/2022",
  };

  datas.date = Date();

  for (let dateList in datas) {
    let phrase = `Hello World!`;
    let phraseArray = (phrase) => phrase.split(` `);
    return (
      <div>
        {datas[dateList]}
        {phraseArray(phrase)}
      </div>
    );
  }
};

export default HelloWorld_06;
