import React from "react";

//creating one component that can be inserted many times
const InputName = props => {
  return (
    <>
      {/* parseInt since the state value is converted to a string */}
      <label htmlFor="player">Player {parseInt(props.index) + 1}</label>
      <input id="player" type="text" placeholder="Name" required />
    </>
  );
};

export default InputName;
