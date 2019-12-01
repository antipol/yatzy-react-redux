import React from "react";

const InputName = props => {
  return (
    <>
      <label htmlFor="player">Player {parseInt(props.index) + 1}</label>
      <input id="player" type="text" placeholder="Name" required />
    </>
  );
};

export default InputName;
