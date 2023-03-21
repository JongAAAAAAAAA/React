function Name(props) {
  return <h2>나는 {props.realName} 입니다.</h2>;
}

function University() {
  return (
    <>
      <h1>I'm Gachon</h1>
      <Name realName="지현종"></Name>
    </>
  );
}

export default University;
