import React from "react";
import Axios from "axios";

function getClick(setUser) {
  Axios.get("/api/carInfoGet").then((response) => {
    if (response.data) {
      setUser(response.data);
    } else {
      alert("failed to");
    }
  });
}

function ButtonGet({ setUser }) {
  return (
    <>
      <button onClick={() => getClick(setUser)}>Get</button>
    </>
  );
}

export default ButtonGet;
