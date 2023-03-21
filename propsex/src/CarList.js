import React from "react";

import Car from "./Car";

export default function CarList() {
  const cars = [
    { id: "[1]", name: "GRANDEUR", money: 4500, definition: "Graceful design" },
    {
      id: "[2]",
      name: "BMW",
      money: 7800,
      definition: "Functional of high level",
    },
    { id: "[3]", name: "KIA", money: 5500, definition: "Korean Car" },
    { id: "[4]", name: "HYUNDAI", money: 7200, definition: "Dream Car" },
    { id: "[5]", name: "GENESIS", money: 6700, definition: "Popular Car" },
  ];
  return (
    <div>
      <h2 style={{ marginLeft: 80 }}>Car List</h2>
      <h4>
        <div style={{}}>
          <ul>
            {cars.map((car) => (
              <Car key={car.id} things={car} />
            ))}
          </ul>
        </div>
      </h4>
    </div>
  );
}
