import React from "react";

import { FirstInput, SecondInput } from "./App";

const Button = ({}) => {
  //input 검사, 중복검사
  function InputValid() {
    console.log("인풋검사 로그");
    return <></>;
  }

  //중복검사
  function DuplicateCheck() {
    console.log("중복검사 로그");
    console.log(FirstInput());
    if (FirstInput() === SecondInput()) {
      return <></>;
    }
  }

  // 2개 배열 비교함수
  function Compare() {
    console.log("버튼이 잘 눌렸다요");
    return <></>;
  }
  return (
    <button
      onClick={() => {
        InputValid();
        DuplicateCheck();
        Compare();
      }}
    >
      추첨
    </button>
  );
};

export default Button;
