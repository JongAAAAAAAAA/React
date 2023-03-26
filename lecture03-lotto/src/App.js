import "./App.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useState } from "react";

const number1 = atom({
  key: "number1",
  default: "",
});

const number2 = atom({
  key: "number2",
  default: "",
});

const resultSet = atom({
  key: "resultSet",
  default: [13, 40, 42, 15, 9, 28, 19, 4, 20],
});

function InputNumber1() {
  const num1 = useRecoilValue(num1Selector);

  // return <>{num1}</>
  if (isNaN(num1)) {
    return <>{num1}</>;
  }
}

function InputNumber2() {
  const num2 = useRecoilValue(num2Selector);

  if (isNaN(num2)) {
    return <>{num2}</>;
  }
}

const num1Selector = selector({
  key: "num1Selector",
  get: ({ get }) => {
    const num = get(number1);
    if (num.length === 0) {
      return "";
    } else {
      if (isNaN(num)) {
        return "입력이 숫자가 아닙니다.";
      } else {
        return Number(num);
      }
    }
  },
});

const num2Selector = selector({
  key: "num2Selector",
  get: ({ get }) => {
    const num = get(number2);
    if (num.length === 0) {
      return "";
    } else {
      if (isNaN(num)) {
        return "입력이 숫자가 아닙니다.";
      } else {
        return Number(num);
      }
    }
  },
});

const resultSetSelector = selector({
  key: "resultSetSelector",
  get: ({ get }) => {
    const list = get(resultSet);
    return list;
  },
});

function TextInputNum1() {
  const [numberState1, setNumberState1] = useRecoilState(number1);

  const onChange = (event) => {
    setNumberState1(event.target.value);
  };

  return (
    <div>
      첫번째 입력 : &nbsp;
      <input type="text" value={numberState1} onChange={onChange} />
      <br />
    </div>
  );
}

function TextInputNum2() {
  const [numberState2, setNumberState2] = useRecoilState(number2);

  const onChange = (event) => {
    setNumberState2(event.target.value);
  };

  return (
    <div>
      두번째 입력 : &nbsp;
      <input type="text" value={numberState2} onChange={onChange} />
      <br />
    </div>
  );
}

function InitializeLottoNumber() {
  const num1 = useRecoilValue(number1);
  const num2 = useRecoilValue(number2);
  const resultSetVar = useRecoilValue(resultSetSelector);

  // 난수 생성
  if (!isNaN(num1) && !isNaN(num2)) {
    var tempList = [];
    for (var i = 0; i < 7; i++) {
      tempList.push(Math.floor(Math.random() * 45) + 1);
    }
    tempList.push(num1);
    tempList.push(num2);
    var sortedList = bubble_sort(tempList);
    var sortedResult = bubble_sort(resultSetVar);

    var count = 0;
    var resultStr = "꽝";
    for (var i = 0; i < 9; i++) {
      if (Number(tempList[i]) === Number(resultSetVar[i])) {
        count++;
      }
    }
    if (count >= 3 && count < 9) {
      resultStr = "보너스";
    } else if (count === 9) {
      resultStr = "1등 당첨";
    }

    return (
      <div>
        <br />
        응모 번호 : &nbsp;
        {/* {tempList.map((value, key) => (
          <u className="u_text">{value + " "}</u>
        ))} */}
        {sortedList.map((value3, key) => (
          <u className="u_text">{value3 + " "}</u>
        ))}
        <br />
        당첨 번호 : &nbsp;
        {sortedResult.map((value2, key) => (
          <u className="u_text">{value2 + " "}</u>
        ))}
        <br />
        <h4 className="u_text">
          {resultStr}, {count} 개 당첨
        </h4>
        {/* 리스트 정렬 : &nbsp;
        {sortedList.map((value3, key) => (
          <u className="u_text">{value3 + " "}</u>
        ))} */}
      </div>
    );
  }
}

function bubble_sort(original) {
  var list = [];

  for (var i = 0; i < 9; i++) {
    list.push(original[i]);
  }

  for (var i = 0; i < 9; i++) {
    for (var k = 0; k < i; k++) {
      if (list[i] < list[k]) {
        var temp = list[i];
        list[i] = list[k];
        list[k] = temp;
      }
    }
  }
  return list;
}

export default function Lotto() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="mainDiv">
      <div className="childrenDiv">
        <RecoilRoot>
          <div>
            <h1>Lotto</h1>
            <h3>난수 7개와 입력하신 2개의 값을 이용해 추첨합니다!</h3>
            <h5>1~45 까지의 자연수를 넣어주세요.</h5>
            <TextInputNum1 />
            <InputNumber1 />
            <TextInputNum2 />
            <InputNumber2 />
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                setFlag(!flag);
              }}
            >
              추첨
            </button>
          </div>
          {flag ? <InitializeLottoNumber /> : <></>}
        </RecoilRoot>
      </div>
    </div>
  );
}
