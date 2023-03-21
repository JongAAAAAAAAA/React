import logo from "./logo.svg";
import "./App.css";
import Comment from "./Comment";
import LandingPage from "./LandingPage";
import CommentList from "./CommentList";

function App() {
  return (
    <div>
      {/* <Comment name ="KimGachon" comment="안녕하세요. 김가천입니다."/> */}
      <CommentList />
    </div>
    // <LandingPage />
  );
}

export default App;
