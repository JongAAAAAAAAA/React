import "./App.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Button from "./button";

const userInputStateA = atom({ key: "userInputStateA", default: "" });
const userInputStateB = atom({ key: "userInputStateB", default: "" });

const intCountState1 = selector({
  key: "intCountState1", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text1 = get(userInputStateA);
    return text1;
  },
});

const intCountState2 = selector({
  key: "intCountState2", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text2 = get(userInputStateB);
    return text2;
  },
});

function UserInput1() {
  const [text1, setText] = useRecoilState(userInputStateA);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text1} onChange={onChange} /> <br />
      test: {text1}
    </div>
  );
}

function UserInput2() {
  const [text2, setText] = useRecoilState(userInputStateB);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text2} onChange={onChange} /> <br />
      test: {text2}
    </div>
  );
}

// 당첨 번호 9개 숫자
function GetRandom9Ints() {
  const random9Ints = [];
  for (let i = 0; i < 9; i++) {
    random9Ints.push(Math.floor(Math.random() * 45) + 1 + " ");
  }

  random9Ints.sort(function compare(a, b) {
    return a - b;
  });

  return random9Ints;
}

// 사용자가 입력한 첫 번째 값
export function FirstInput() {
  const digit1 = useRecoilValue(intCountState1);

  return Number.parseInt(digit1);
}

// 사용자가 입력한 두 번째 값
export function SecondInput() {
  const digit2 = useRecoilValue(intCountState2);

  return Number.parseInt(digit2);
}

// 사용자 입력값 2개 + 난수 7개
function Numbers() {
  const NumberArr = [];
  // NumberArr.push(FirstInput(), SecondInput());
  NumberArr.push(FirstInput() + " ", SecondInput() + " ");

  for (let i = 2; i < 9; i++) {
    NumberArr.push(Math.floor(Math.random() * 45) + 1 + " ");
    for (let j = 0; j < i; j++) {
      if (NumberArr[i] == NumberArr[j]) {
        NumberArr.pop();
      }
    }
  }

  NumberArr.sort(function compare(a, b) {
    return a - b;
  });

  return NumberArr;
}

function App() {
  return (
    <>
      <RecoilRoot>
        <h1>Lotto</h1>
        <h3>난수 7개와 입력하신 2개의 값을 이용해 추첨합니다!</h3>
        <h5>1~45 까지의 자연수를 넣어주세요.</h5>
        첫 번째 번호 : <UserInput1 />
        두 번째 번호 : <UserInput2 />
        당첨 번호 : <GetRandom9Ints />
        <br />
        {/* 랜덤 7개 숫자 : <GetRandom7Ints /> */}
        입력 숫자 : <Numbers />
        <br />
        <Button />
      </RecoilRoot>
    </>
  );
}

export default App;
