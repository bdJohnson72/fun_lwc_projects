/**
 * Created by Brooks Johnson on 3/12/2022.
 */

import {LightningElement} from "lwc";

const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";
export default class RockPaperScissors extends LightningElement {
  playerScore = 0;
  computerScore = 0;
  playerGuess;
  computerGuess;
  winner;

  handleClick(event) {
    this.playerGuess = event.target.name;
    this.generateComputerGuess();
    this.determineWinner();
  }

  generateComputerGuess() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      this.computerGuess = ROCK;
    } else if (random === 1) {
      this.computerGuess = PAPER;
    } else {
      this.computerGuess = SCISSORS;
    }
  }

  determineWinner() {
    if (this.playerGuess === this.computerGuess) {
      this.winner = "draw";
      return;
    }
    if (this.playerGuess === ROCK && this.computerGuess === SCISSORS) {
      this.winner = "You Win";
      this.playerScore++;
    } else if (this.playerGuess === ROCK && this.computerGuess === PAPER) {
      this.winner = "Computer";
      this.computerScore++;
    } else if (this.playerGuess === PAPER && this.computerGuess === SCISSORS) {
      this.winner = "Computer";
      this.computerScore++;
    } else if (this.playerGuess === PAPER && this.computerGuess === ROCK) {
      this.winner = "You Win";
      this.playerScore++;
    } else if (this.playerGuess === PAPER && this.computerGuess === SCISSORS) {
      this.winner = "Computer";
      this.computerScore++;
    } else if (this.playerGuess === SCISSORS && this.computerGuess === PAPER) {
      this.winner = "You Win";
      this.playerScore++;
    } else {
      this.winner = "Computer";
      this.computerScore++;
    }
  }
}
