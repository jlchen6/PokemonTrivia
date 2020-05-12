import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick, value }) {
  return (
    <button onClick={onClick} value={value} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
