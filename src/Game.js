const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require("./Card");
const Deck = require("./Deck");
const Round = require("./Round");

class Game {
  constructor() {
    this.currentRound
    this.playCount = 0
  }

  start() {//deck size is 15
    let startIndex = this.playCount 
    let endIndex = startIndex + 15
    let selection = prototypeQuestions.slice(startIndex, endIndex)
    let cardArr = selection.map((ele) => {
      return new Card(ele.id, ele.question, ele.answers, ele.correctAnswer);
    });
    let deck = new Deck(cardArr);
    let round = new Round(deck);
    round.turns = this.playCount
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;