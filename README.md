# FlashCards Starter Kit

## Abstract

This small game is played through CLI (command-line-interface). Once launched, user is given a 'deck' of 15 'flashcards" to answer. Each question will return instant feedback. At the end of each round, user will receive the precentage of correct answers.

## Setup

Clone down this repo. Go to terminal and CD into the root folder and intall `npm`

``` npm install```

Run the `index` file on `node`.

``` node index.js```

## Technology used
- JavaScript
- mocha test library
- chai assertion library
- JSON

## Code architecture
- Application is launched through a single file
- Game logic and components are grouped in src folder
- Test files that are not related to game running are grouped in test folder

## Chanllenges
- The biggest challenge is how to make multiple rounds with a fresh deck of cards each round. 
- Our approach is to take a fixed number of cards each round and slice this much 'length' from the pool of data.js

## Author
Bei (owner of this repo)

### Iteration 4 contributors
- Natalia
- Nolan

## Screenshot
![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)
