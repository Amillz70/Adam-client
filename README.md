[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Live Link to Tic Tac Toe Game

https://amillz70.github.io/Adam-client/

## My Tic Tac Toe Story
To start my journey creating a working Tic Tac Toe game I decided the best place to start would be to make the back end API. It was the most recent subject we touched on in class and the one I had the most difficulty with. I wanted to get the sign-in, sign-up, sign-out, and change password functioning before I moved onto anything else. The process for setting them up was similar to what we had done in class so it was easy enough to set up. I started off with the curl scripts for each and made sure that they worked in the terminal. From there I went into my HTML file and made a button and submit forms for each. After connecting them with proper id's and a proper class, I went on and made an api.js, event.js, and ui.js files. From there I connected the app.js file to the event.js file and then attached the api.js and ui.js files through the event.js file. That made me able to connect my website through the sever and gave me access to sign in, sign out, sign up, and change password.

Next I wanted to make a game board to visually see what was happening. I decided to use bootstrap because I wanted a challenge, have never used it before, and we were just taught it in class. I found a site online and went off their format. It was easy enough to follow along and I had a game board made.

From there I started on game logic for the front-end. For starters I made an array to store the cells of the board. I then linked those cells to my store function as a way of connecting the front and back end of the game. Then I made a function that would allow each click to alternate between 'x' and 'o'. From there I decided to make a game board win/lose/draw scenario. It was an if statement that ran through every possible win scenario, checked the board for them, and then continued on unless the game was won or there were no more boxes left to click.

I then hooked up the logic to the back-end with nine of id click events that would allow the player to click on each square of the board. This was done in the same app.js file as the sign-in, sign-out, change-password, and sign-up app functions. Then I hooked it into the events.js file.

In the events.js file is where most of the magic of my game happens. In here is where the game knows when the board is clicked, which square id is affected by a click, how the board is cleared when the new game button is clicked, sets the location of the board, applies the switch logic and sends which player is switched move to the api, checks for the win, and prepares to send data to api. This togther with my game logic allows the game to function.

The ui.js didn't really need to be linked to my game logic because of what I put in my events.js. What I did need to do with it was put nine different calls with empty arrays so that on new game the board would clear. Before I did this the game board would remember what squares were clicked the previous game and would make those unclickable. It took some time to figure out, but I found a way through the issue. Then I used the api.js to send a 'PATCH' request to store the game data. With that my logic for playing the game was pretty much set.

I then linked up the New Game button and Games Played button to go through a similar path as the game logic through the app.js, events.js, ui.js, and finally the api.js.After struggling with the game logic, hooking up these buttons wasn't nearly as challenging. The New Game needed a 'POST' request and the Games Played needed a 'GET' request. The only issue I had here was instead of showing the number of games played, for a while I was showing the id of every game. I needed to change what I was receiving from my store file and the problem was resolved.

Overall this was one of the toughest challenges I've had to overcome in recent years. Most projects I've done with coding, I have been following along with someone or a program. This was the first time I was able to go off and approach the problem any way I wanted. I made a lot of mistake on the way and spent a lot of time working on features that weren't needed or didn't work, but I learned a lot from those mistakes. I feel better in my programing skill after this and look forward to adding more to this game in the future.

## User Stories
As a user, I want to see when I sign in and out so that I can know if I can play the game.

As a user, I want feedback when I change my password so that I know what password to use when I sign in next.

As a user, I want the board to appear on sign in and disappear on sign out so that I have more visual confirmation that the play is playable or not.

As a user, I want to not be able to click the board when a player wins or there is a draw so that I know when to start a new game.

As a user, I want a new game to start when I click the new game button so that I can play another game!


## Link to WireFrame
https://imgur.com/2h8a0EW
https://imgur.com/yv1YoMw
https://imgur.com/uU6IY8A

## Technology Used
-JavaScript
-HTML
-CSS
-Bootstrap
-JSON
-JQuery
-AJAX
-DOM

## Bibliography
https://www.reddit.com/r/learnprogramming/comments/6ty6f9/javascript_tic_tac_toe_win_condition_how_to_write/ - To help decide what win condition to use.

https://stackoverflow.com/questions/45777357/bootstrap-squared-columns-for-tic-tac-toe-board - To help format my bootstrap for game board.

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
# Adam-client
