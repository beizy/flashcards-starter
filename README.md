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

## Screenshot
![screenshot of game demo](https://user-images.githubusercontent.com/73845209/131056133-733ed868-733f-4a33-97d3-f5668d674872.gif)
