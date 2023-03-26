import React, { useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { intCountState1, intCountState2, GetRandom9Ints, Numbers } from "./App";

const Button = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const digit11 = useRecoilValue(intCountState1);
  const digit22 = useRecoilValue(intCountState2);
  const digit1 = Number.parseInt(digit11);
  const digit2 = Number.parseInt(digit22);

  //input 자연수 검사
  function InputValid() {
    if (isNaN(digit1) || isNaN(digit2)) {
      setErrorMessage("1부터45의 자연수를 입력해주세요");
      return false;
    } else if (digit1 < 1 || digit1 > 45 || digit2 < 1 || digit2 > 45) {
      setErrorMessage("1부터45의 자연수를 입력해주세요");
      return false;
    }
    return true;
  }

  //중복검사
  function DuplicateCheck() {
    if (digit1 === digit2) {
      setErrorMessage("중복 값이 입력되었습니다. 다시 입력해주세요.");
      return false;
    } else {
      return true;
    }
  }

  function Compare() {
    const randomNumbers = GetRandom9Ints();
    const inputNumbers = [digit1, digit2, ...Numbers()];

    const matchedNumbers = randomNumbers.filter((num) =>
      inputNumbers.includes(num)
    );
    const matchedCount = matchedNumbers.length;

    let rank = "";
    switch (matchedCount) {
      case 6:
        rank = "1등";
        break;
      case 5:
        rank = "2등";
        break;
      case 4:
        rank = "3등";
        break;
      case 3:
        rank = "4등";
        break;
      default:
        rank = "꽝";
        break;
    }

    const result = `입력한 번호: ${inputNumbers.join(
      ", "
    )}\n당첨 번호: ${randomNumbers.join(
      ", "
    )}\n맞춘 개수: ${matchedCount}\n등수: ${rank}`;
    setErrorMessage(result);
  }

  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      <button
        onClick={() => {
          if (InputValid() && DuplicateCheck()) {
            Compare();
          }
        }}
      >
        추첨
      </button>
      <div>{errorMessage && <div>{errorMessage}</div>}</div>
    </div>
  );
};

export default Button;
