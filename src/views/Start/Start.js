import React from "react";
import { Rules } from "../../components/Rules";
import { NumOfPlayers } from "../../components/NumOfPlayers";

const Start = props => {
  return (
    <div>
      <h3>Start View</h3>
      <Rules />
      <NumOfPlayers />
    </div>
  );
};

export default Start;
