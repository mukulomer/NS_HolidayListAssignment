import React from "react";
import "./styles.css";

export default function App() {
  const cities = ["Goa", "Darjeeling", "Lonavala"];

  return (
    <div>
      <ol>
        {cities.map((city, index) => (
          <li key={`location ${index + 1}`}>{city}</li>
        ))}
      </ol>
    </div>
  );
}
