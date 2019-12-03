import React from "react";
import { RollDice } from "../../components/RollDice";
import { connect } from "react-redux";

const Game = props => {
  return (
    <div>
      <h3>Game View</h3>
      <p>It's {props.currentPlayer}'s turn!</p>
      <RollDice />
    </div>
  );
};

const mapStateToProps = state => ({
  currentPlayer: state.scoreboardReducer.allPlayers[0].name
});

export default connect(mapStateToProps)(Game);
