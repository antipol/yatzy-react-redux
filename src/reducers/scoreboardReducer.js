//create constructor class to be used for each new player
class Player {
  constructor(name) {
    this.name = name;
    this.equals = {
      aces: "",
      twos: "",
      threes: "",
      fours: "",
      fives: "",
      sixes: ""
    };
    this.collections = {
      onePair: "",
      twoPairs: "",
      threeEqual: "",
      fourEqual: "",
      lowStraight: "",
      highStraight: "",
      fullHouse: "",
      chance: "",
      yatzy: ""
    };
    this.scores = {
      equalsTotal: 0,
      equalsBonus: 0,
      total: 0
    };
  }
}

//using initial state obj temporary while building web app
const initialState = { allPlayers: [new Player("test1"), new Player("test2")] };

const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      //get the amount of players that user has input
      const numOfPlayers = action.payload.numOfPlayers;

      //array to contain one new Player object per player
      const players = [];

      for (let i = 0; i < numOfPlayers; i++) {
        //push one object per player with name from payload.nameArr
        players.push(new Player(action.payload.nameArr[i]));
      }

      return {
        ...state,
        allPlayers: players
      };
    default:
      return state;
  }
};

export default scoreboardReducer;
