import React from "react";
import { playerNum } from "../../actions/playerNum";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const NumOfPlayers = props => {
  //using ref to target the input field
  //will optimize and see if ref is really necessary / other way to do it
  const inputRef = React.createRef();

  //default amount of players is 2
  let players = 2;

  //called when form is submitted
  const handleSubmit = e => {
    e.preventDefault();

    //push the router /players to the history in order to redirect / link
    props.history.push("/players");

    //get the number entered in input field
    players = inputRef.current.value;

    //create the playerNum action
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

//not necessary to subscribe to state changes, only updating state from this component
const mapDispatchToProps = dispatch => ({
  playerNum: players => dispatch(playerNum(players))
});

export default withRouter(connect(null, mapDispatchToProps)(NumOfPlayers));
