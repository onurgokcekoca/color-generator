import React from "react";
import "./colors.css";

function colors({ item, color }) {
  let text = `hsl(${color}, 100%, ${item}%)`;

  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };
  return (
    <div
      onClick={copy}
      style={{ background: `hsl(${color}, 100%, ${item}%)` }}
      className="box"
    >
      <span className="hsl-code">Copy</span>
    </div>
  );
}

export default colors;
