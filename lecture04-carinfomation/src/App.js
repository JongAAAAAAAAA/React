import React, { useState } from "react";

import ButtonGet from "./button-get";
import ButtonPost from "./button-post";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <div align="left" style={{ margin: "20px" }}>
        <h2>Car Information</h2>
        ID: {user.id} <br />
        Brand: {user.brand} <br />
        Company: {user.company} <br />
        Price: {user.price} <br />
        <ButtonGet setUser={setUser} />
        <ButtonPost setUser={setUser} />
      </div>{" "}
    </div>
  );
}

export default App;
