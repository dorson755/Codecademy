const team = {
  _players: [
    {
      firstName: 'Pablo', 
      lastName: 'Sanchez', 
      age: 31
     }, 
     {
        firstName: 'Michael', 
        lastName: 'Jordan', 
        age: 26
      }, 
      {
        firstName: 'Blake', 
        lastName: 'Griffin', 
        age: 10
      }
        ],
  _games: [
      {
        opponent: 'Nuggets',
        teamPoints: 142,
        opponentPoints: 27
      },
      {
        opponent: 'Heat',
        teamPoints: 142,
        opponentPoints: 27
      },
      {
        opponent: 'Magics',
        teamPoints: 102,
        opponentPoints: 7
      }
  ],
  get games () {
    return this._games;
  },
  get players () {
    return this._players;
  },
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  addGame (oppName, myPoints, oppPoints) {
    let game = {
      opponent: oppName,
      teamPoints: myPoints,
      opponentPoints: oppPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(Object.entries(team._players))

team.addGame('Lakers', 124, 122);
team.addGame('Trailblazers', 75, 50);
team.addGame('Knicks', 120, 80);

console.log(Object.entries(team._games))