import React from "react";
import { rollDice } from "../../actions/rollDice";
import { keepDice } from "../../actions/keepDice";
import { connect } from "react-redux";

const RollDice = props => {
  const handleInputChange = e => {
    e.target.checked ? props.keepDice(e.target.id) : props.keepDice("");
  };

  const dice = props.diceArr;

  const handleClick = e => {
    return props.rollDice();
  };

  console.log(props.diceArr);

  return (
    <div>
      <div>
        <i className={dice[0]}></i>
        {props.rollsLeft < 3 ? (
          <input id="0" type="checkbox" onChange={handleInputChange} />
        ) : (
          ""
        )}
      </div>
      <div>
        <i className={dice[1]}></i>
        {props.rollsLeft < 3 ? <input type="checkbox" /> : ""}
      </div>
      <div>
        <i className={dice[2]}></i>
        {props.rollsLeft < 3 ? <input type="checkbox" /> : ""}
      </div>
      <div>
        <i className={dice[3]}></i>
        {props.rollsLeft < 3 ? <input type="checkbox" /> : ""}
      </div>
      <div>
        <i className={dice[4]}></i>
        {props.rollsLeft < 3 ? <input type="checkbox" /> : ""}
      </div>
      <h4>Rolls left: {props.rollsLeft} </h4>
      <button onClick={handleClick}>Roll</button>
    </div>
  );
};

const mapStateToProps = state => ({
  diceArr: state.rollDiceReducer.diceArr,
  rollsLeft: state.rollDiceReducer.rollsLeft
});

const mapDispatchToProps = dispatch => ({
  rollDice: () => dispatch(rollDice()),
  keepDice: diceToKeep => dispatch(keepDice(diceToKeep))
});

export default connect(mapStateToProps, mapDispatchToProps)(RollDice);
