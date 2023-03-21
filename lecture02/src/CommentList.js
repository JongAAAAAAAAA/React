import Comment from "./Comment";

function CommentList() {
  const users = [
    { id: 1, name: "JiHyeonJong", comment: "안녕하세요? 지현종이에요." },
    { id: 2, name: "CaCaoj", comment: "카카오 제이입니다." },
    { id: 3, name: "GaDol", comment: "가돌이입니다. 화이팅...!" },
  ];

  return (
    <>
      <ul>
        {users.map((user) => (
          <Comment key={user.id} name={user.name} comment={user.comment} />
        ))}
      </ul>
    </>
  );
}

export default CommentList;
