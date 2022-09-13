import React from "react";
import background from "./img/placeholder.png";

function Image() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div>
  );
}

export default Image;