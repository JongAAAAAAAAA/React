import "./App.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const textState = atom({ key: "textState", default: "" });

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text;
  },
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} /> <br />
      Echo: {text}
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

function Add() {
  let digit = useRecoilValue(charCountState);

  const number = 10;

  if (isNaN(Number.parseInt(digit))) {
    digit = -number;
  }

  return (
    <>
      add {number}: {Number.parseInt(digit) + number}
    </>
  );
}

function Adder() {
  return (
    <div>
      <TextInput />
      <Add />
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Hello GCU-Kakao</h1>
        {/* <h2>Hello Recoil</h2> */}
        <h2>Add 10</h2>
        <Adder />
      </div>
    </RecoilRoot>
  );
}

export default App;
