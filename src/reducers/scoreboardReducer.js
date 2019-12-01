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

const initialState = { allPlayers: [new Player("test1"), new Player("test2")] };

const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      const numOfPlayers = action.payload.numOfPlayers;

      const players = [];

      for (let i = 0; i < numOfPlayers; i++) {
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
