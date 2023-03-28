import React from "react";
import Axios from "axios";

function postClick(setUser) {
  Axios.post("/api/carInfoPost").then((response) => {
    if (response.data) {
      setUser(response.data);
    } else {
      alert("failed to");
    }
  });
}

function ButtonPost({ setUser }) {
  return (
    <>
      <button onClick={() => postClick(setUser)}>Post</button>
    </>
  );
}

export default ButtonPost;
