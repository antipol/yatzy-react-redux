import React from "react";
import { playerNum } from "../../actions/playerNum";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const NumOfPlayers = props => {
  const inputRef = React.createRef();
  let players = 2;

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push("/players");
    players = inputRef.current.value;
    return props.playerNum(players);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>How many players? (2 to 10 possible)</h4>
      <input ref={inputRef} type="number" min="2" max="10" required />
      <button type="submit">Next</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  playerNum: players => dispatch(playerNum(players))
});

export default withRouter(connect(null, mapDispatchToProps)(NumOfPlayers));
