import { useState } from "react";

export default function Movies() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(0, 255, 0)");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>Populära filmer</h1>
      <button
        disabled={checked}
        id="my-button"
        onClick={() => {
          const newBackgroundColor =
            backgroundColor === "rgb(0, 255, 0)"
              ? "rgb(255, 0, 0)"
              : "rgb(0, 255, 0)";
          setBackgroundColor(newBackgroundColor);
        }}
        style={{ backgroundColor: backgroundColor }}>
        {backgroundColor === "rgb(0, 255, 0)"
          ? "Gör till favorit"
          : "Ta bort favorit"}
      </button>
      <input
        onClick={() => {
          setChecked((prevState) => !prevState);
        }}
        type="checkbox"
        id="disable-button"
      />
      <label htmlFor="disable-button">Avaktivera favoritknappen</label>
    </>
  );
}
