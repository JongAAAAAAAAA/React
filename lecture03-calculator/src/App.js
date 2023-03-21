import "./App.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const textState1 = atom({ key: "textState1", default: "" });

const textState2 = atom({ key: "textState2", default: "" });

const charCountState1 = selector({
  key: "charCountState1", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text1 = get(textState1);
    return text1;
  },
});

const charCountState2 = selector({
  key: "charCountState2", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text2 = get(textState2);
    return text2;
  },
});

function TextInput1() {
  const [text1, setText] = useRecoilState(textState1);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text1} onChange={onChange} /> <br />
      {/* Echo: {text1} */}
    </div>
  );
}

function TextInput2() {
  const [text2, setText] = useRecoilState(textState2);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text2} onChange={onChange} /> <br />
      {/* Echo: {text2} */}
    </div>
  );
}

// function CharacterCount() {
//   const count = useRecoilValue(charCountState);
//   return <>Character Count: {count}</>;
// }

// function CharacterCounter() {
//   return (
//     <div>
//       <TextInput />
//       <CharacterCount />
//     </div>
//   );
// }

// function isNaN() { // 인풋박스에 들어온 값이 string 인지 int 인지 검사
//   let digit1 = useRecoilValue(charCountState1);
//   let digit2 = useRecoilValue(charCountState2);

//   if (isNaN(Number.parseInt(digit1)) || isNaN(Number.parseInt(digit1))) {
//     digit1 = 0;
//     digit2 = 0;
//   }
// }

function Add() {
  let digit1 = useRecoilValue(charCountState1);
  let digit2 = useRecoilValue(charCountState2);

  // if (isNaN(Number.parseInt(digit1)) || isNaN(Number.parseInt(digit2))) {
  //   digit1 = 0;
  //   digit2 = 0;
  // }

  if (isNaN(Number.parseInt(digit1))) {
    digit1 = 0;
  }

  if (isNaN(Number.parseInt(digit2))) {
    digit2 = 0;
  }

  return <>{Number.parseInt(digit1) + Number.parseInt(digit2)}</>;
}

function Sub() {
  let digit1 = useRecoilValue(charCountState1);
  let digit2 = useRecoilValue(charCountState2);

  if (isNaN(Number.parseInt(digit1))) {
    digit1 = 0;
  }

  if (isNaN(Number.parseInt(digit2))) {
    digit2 = 0;
  }

  return <>{Number.parseInt(digit1) - Number.parseInt(digit2)}</>;
}

function Mul() {
  let digit1 = useRecoilValue(charCountState1);
  let digit2 = useRecoilValue(charCountState2);

  if (isNaN(Number.parseInt(digit1))) {
    digit1 = 0;
  }

  if (isNaN(Number.parseInt(digit2))) {
    digit2 = 0;
  }

  return <>{Number.parseInt(digit1) * Number.parseInt(digit2)}</>;
}

function Div() {
  let digit1 = useRecoilValue(charCountState1);
  let digit2 = useRecoilValue(charCountState2);

  if (isNaN(Number.parseInt(digit1))) {
    digit1 = 0;
  }

  if (isNaN(Number.parseInt(digit2))) {
    digit2 = 0;
  }

  return <>{Number.parseInt(digit1) / Number.parseInt(digit2)}</>;
}

function InputBox() {
  return (
    <div>
      <div>
        Number 1 &nbsp;
        <TextInput1 />
      </div>
      <br />
      <div>
        Number 2 &nbsp;
        <TextInput2 />
      </div>
      <table>
        <tr>
          <td>Operator</td>
          <td>Result</td>
        </tr>
        <tr>
          <td>+</td>
          {/* <td bg><>{Number.parseInt(digit1) + Number.parseInt(digit2)}</></td> */}
          <td>
            {" "}
            <Add />{" "}
          </td>
        </tr>
        <tr>
          <td>-</td>
          <td>
            {" "}
            <Sub />{" "}
          </td>
        </tr>
        <tr>
          <td>*</td>
          <td>
            {" "}
            <Mul />{" "}
          </td>
        </tr>
        <tr>
          <td>/</td>
          <td>
            {" "}
            <Div />{" "}
          </td>
        </tr>
      </table>
      {/* <Add />
      <br />
      <Sub />
      <br />
      <Mul />
      <br />
      <Div /> */}
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1 id="h1">GCU Calculator</h1>
        {/* <h2>Hello Recoil</h2> */}
        {/* <h2>Add 10</h2> */}
        <InputBox />
      </div>
    </RecoilRoot>
  );
}

export default App;
