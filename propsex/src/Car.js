import React from "react";

function Car(props) {
  return (
    <div>
      <ul>
        {props.things.id}&nbsp;
        {props.things.name}&nbsp;
        {props.things.money}&nbsp;
        {props.things.definition}&nbsp;
      </ul>
    </div>
  );
}

export default Car;
