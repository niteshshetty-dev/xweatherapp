import { useState } from "react";
export default function WheatherApp() {
  const [city, setCity] = useState("");
  return (
    <>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button>Search</button>
    </>
  );
}
