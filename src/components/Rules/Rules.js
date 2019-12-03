import React from "react";
import { useState } from "react";

const Rules = props => {
  //on click, rules will show / hide with help of a hook
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = e => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>Rules</button>
      {/* ternary statement to determine whether rules are visible */}
      {isOpen ? (
        <div>
          <p>
            For those who have seen the Earth from space, and for the hundreds
            and perhaps thousands more who will, the experience most certainly
            changes your perspective. The things that we share in our world are
            far more valuable than those which divide us.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Rules;
