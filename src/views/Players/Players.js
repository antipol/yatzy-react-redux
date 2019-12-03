import React from "react";
import { InputName } from "../../components/InputName";
import { addPlayer } from "../../actions/addPlayer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Players = props => {
  const numOfPlayers = props.numOfPlayers;

  //create new array with the number of players
  const playerArray = [...Array(numOfPlayers).keys()];

  //again, check how to target form input
  const formRef = React.createRef();

  //name array to be used when creating action to add players
  const nameArr = [];

  const handleSubmit = e => {
    e.preventDefault();

    //push each name from input fields to nameArr
    for (let i = 0; i < numOfPlayers; i++) {
      nameArr.push(formRef.current[i].value);
    }

    //on submit, go to the game section
    props.history.push("/game");

    //call the action defined in mapDispatchToProps to update state on submit
    return props.addPlayer(nameArr, numOfPlayers);
  };

  return (
    <div>
      <h3>Players View</h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        {playerArray.map((el, i) => (
          <InputName key={i} index={i} name={nameArr[i]} />
        ))}
        <button type="submit">Play!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  numOfPlayers: state.playerNumReducer.numOfPlayers
});

const mapDispatchToProps = dispatch => ({
  addPlayer: (nameArr, numOfPlayers) =>
    dispatch(addPlayer(nameArr, numOfPlayers))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Players)
);
