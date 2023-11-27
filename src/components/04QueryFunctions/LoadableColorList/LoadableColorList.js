import { useEffect, useState } from "react";

function fakeFechColors()  {
  return Promise.resolve(
    ['Red', 'Green', 'Blue']
  )
};

export function LoadableColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fakeFechColors()
    .then((data) => 
      setColors(data)
    )
  }, [])

  const renderColors = colors.map((c) => (
    <li key={c}>{c}</li>
  ));

  // Roles: list, listitem
  return (
    <ul>
      {renderColors}
    </ul>
  );
}