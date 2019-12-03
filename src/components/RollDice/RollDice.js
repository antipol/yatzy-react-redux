import React from "react";
import { rollDice } from "../../actions/rollDice";
import { keepDice } from "../../actions/keepDice";
import { connect } from "react-redux";

const RollDice = props => {
  //get the current dice array to decide which dice icon to show
  const dice = props.diceArr;

  //function to handle checkbox (to save the dice for later)
  const handleInputChange = e => {
    //get array with boolean values, one per dice
    let keepArr = props.keepArr;
    //change between true/false to decide which index dice is being kept
    keepArr[e.target.id] = e.target.checked;

    //call the action with the keep array as arg
    return props.keepDice(keepArr);
  };

  //on click of roll button call the action
  const handleClick = e => {
    return props.rollDice();
  };

  return (
    <div>
      {/* each div shows a dice and checkbox (to be optimized with one dice component and map through to avoid repeating) */}
      <div>
        {/* icons from fontawesome */}
        <i className={dice[0]}></i>
        {props.rollsLeft < 3 ? (
          <input id="0" type="checkbox" onChange={handleInputChange} />
        ) : (
          ""
        )}
      </div>
      <div>
        <i className={dice[1]}></i>
        {props.rollsLeft < 3 ? (
          <input id="1" type="checkbox" onChange={handleInputChange} />
        ) : (
          ""
        )}
      </div>
      <div>
        <i className={dice[2]}></i>
        {props.rollsLeft < 3 ? (
          <input id="2" type="checkbox" onChange={handleInputChange} />
        ) : (
          ""
        )}
      </div>
      <div>
        <i className={dice[3]}></i>
        {props.rollsLeft < 3 ? (
          <input id="3" type="checkbox" onChange={handleInputChange} />
        ) : (
          ""
        )}
      </div>
      <div>
        <i className={dice[4]}></i>
        {props.rollsLeft < 3 ? (
          <input id="4" type="checkbox" onChange={handleInputChange} />
        ) : (
          ""
        )}
      </div>
      <h4>Rolls left: {props.rollsLeft} </h4>
      {/* disable button after three rolls */}
      <button onClick={handleClick} disabled={props.rollsLeft <= 0}>
        Roll
      </button>
    </div>
  );
};

//declaring names for the states/subscribing to changes in state (will check if "state.rollDiceReducer.diceArr" etc is the correct way to target (e.g. what is then the point of the rootReducer?))
const mapStateToProps = state => ({
  diceArr: state.rollDiceReducer.diceArr,
  rollsLeft: state.rollDiceReducer.rollsLeft,
  keepArr: state.rollDiceReducer.keepArr
});

//updating the states when the actions are called
const mapDispatchToProps = dispatch => ({
  rollDice: () => dispatch(rollDice()),
  keepDice: keepArr => dispatch(keepDice(keepArr))
});

export default connect(mapStateToProps, mapDispatchToProps)(RollDice);
