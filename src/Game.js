const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

// const Turn = require("./Turn");
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

  // startNew(){
  //   takes in a new deck of cards  starting from index of last played card, last played card 
  //   can be represented by this.playCount
  //   let startIndex = this.playCount 
  //   let endIndex = startIndex + 15
  //   let selection = prototypeQuestions.slice(startIndex, endIndex)
  //   let cardArr = selection.map((ele) => {
  //     return new Card(ele.id, ele.question, ele.answers, ele.correctAnswer);
  //   });
  //   let deck = new Deck(cardArr);
  //   let round = new Round(deck);
  //   this.currentRound = round;
  //   this.playCount += deck.length
  //   this.printMessage(deck, round);
  //   this.printQuestion(round);

  // }
  
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;