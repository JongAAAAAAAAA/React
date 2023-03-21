import "./App.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const userInputState = atom({ key: "userInputState", default: "" });

const intCountState = selector({
  key: "intCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(userInputState);
    return text;
  },
});

function userInput() {
  const [text, setText] = useRecoilState(userInputState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} /> <br />
      test: {text}
    </div>
  );
}

function valid() {
  const digit = useRecoilValue(intCountState);

  return digit;
}

function GetRandom9Ints() {
  const randomInts = [];
  for (let i = 0; i < 9; i++) {
    randomInts.push(Math.floor(Math.random() * 45) + 1 + " ");
  }

  return randomInts;
}

function GetRandom7Ints() {
  const randomInts = [];
  for (let i = 0; i < 7; i++) {
    randomInts.push(Math.floor(Math.random() * 45) + 1 + " ");
  }

  return randomInts;
}

function App() {
  return (
    <>
      <h1>Lotto</h1>
      랜덤 9개 숫자 : <GetRandom9Ints />
      <br />
      랜덤 7개 숫자 : <GetRandom7Ints />
      <br />
      <valid />
    </>
  );
}

export default App;
