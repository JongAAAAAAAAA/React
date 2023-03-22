import "./App.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const userInputState1 = atom({ key: "userInputState1", default: "" });
const userInputState2 = atom({ key: "userInputState2", default: "" });

const intCountState1 = selector({
  key: "intCountState1", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text1 = get(userInputState1);
    return text1;
  },
});

const intCountState2 = selector({
  key: "intCountState2", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text2 = get(userInputState2);
    return text2;
  },
});

function UserInput1() {
  const [text1, setText] = useRecoilState(userInputState1);

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
  const [text2, setText] = useRecoilState(userInputState2);

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

// 난수 7개 숫자
function GetRandom7Ints() {
  const random7Ints = [];
  for (let i = 0; i < 7; i++) {
    random7Ints.push(Math.floor(Math.random() * 45) + 1 + " ");
  }

  return random7Ints;
}

// 사용자가 입력한 첫 번째 값
function FirstInput() {
  const digit1 = useRecoilValue(intCountState1);

  return Number.parseInt(digit1);
}

// 사용자가 입력한 두 번째 값
function SecondInput() {
  const digit2 = useRecoilValue(intCountState2);

  return Number.parseInt(digit2);
}

function Numbers() {
  const NumberArr = [];
  // NumberArr.push(FirstInput(), SecondInput());
  NumberArr.push(1, 2);
  for (let i = 2; i < 7; i++) {
    NumberArr.push(Math.floor(Math.random() * 45) + 1);
    for (let j = 0; j < i; j++) {
      if (NumberArr[i] == NumberArr[j]) {
        NumberArr.pop();
      }
    }
  }
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
        {/* <valid /> */}
      </RecoilRoot>
    </>
  );
}

export default App;
