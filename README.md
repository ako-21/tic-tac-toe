# Tic Tac Toe Client Application

This is the classic tic tac toe game where a user can sign up, sign in, and play the classic tic tac toe game. The objective is to three X's or three O's in a row on a 3X3 game board. This app currently supports a two player challenge logged in under one user's account.

# Techologies Used
* javaScript
* HTML
* CSS
* bootstrap
* flexbox
* JQuery
* JSON
* ajax
* Bash

# Development Process

I wanted this application to have a clean and responsive interface in a single page manner. First, I conceptulized and designed wireframes that would put the minimal amount of html on the page at any given time during the authentication stages, game play stages, and game stats stages. Having the user see only what is absolutely neccessary was very important to achieve the user experience I desired. A part of my design concept was also creating user stories to define specific functionality, which influenced my app interface. Once I completed the design concept, I created curl scripts to make sure I understood exactly what the API was offering and how I could use it to structure my authentication, game, and stats. After understanding the API, I conceptualized the winning combinations of the game and the various actions it takes to get those winning combinations. From there, I wrote javaScript functions to:
1. Determine which player starts (X), and to switch turns after each player
2. Identify the winning combinations for X and O and to identify a tie
3. End the game after a win or tie is determined
After I developed the game engine, I wrote scripts to access game stats and to select and complete unfinished games. Lastly, I designed the game board via bootstrap, using col-4 for even spacing on the 3X3 board. The styling for the rest of the interface was primarily done with flexbox, and I finished off the css with media queries to make sure the game can be played on any sized device.

# Future Iterations

Currently, users can only play friends. In future iterations, I will add a feature for the user to have the option of playing a computer. The game stats feature also pulls up all unfinished games with the option to finish them, but in a future iteration, I will include the option to delete as well.

# Wireframes and User Stories
### Wireframes
[wireframes](https://imgur.com/a/ZZ1NLuu)
### User Stories
* As a user, I want to be able to play against someone.
* As a user, I want a display board so I can see if I won or lost.
* As a user, I want a log so I can see how many times I won or lost.
* As a user, I want to have an account so I can see my log at any time.
