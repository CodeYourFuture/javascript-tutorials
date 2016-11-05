# Javascript II
From previous session you should know what is:

- value
- variable
- expression

Today, we learn about:

- conditions - *if statements*
- functions
- loops
- object

## Exercises

### Conditions

#### Light switch program

- Use boolean variable to store information that the room is dark, or not.
- Write a condition which tells to switch the light on if the room is dark. You can print it to console using `console.log('Turn the light on')`


#### Buying a pizza program

- Store into variables: how much money you have, what is the cost of the pizza.
- Write a condition to find out whether you have enough money to buy a pizza. If user does not have enough money, tell them how much more do they need to buy a pizza.

#### Do not forget your size for shirts

- Store information about the sizes: S, M, L, XXL.

| name   | size (cm) |
---------|------------
| S      | 91        |
| M      | 96        |
| L      | 101       |
| XL     | 106       |


- Store your size
- Write program that calculate a name of the size.
- Hint: size S is between 91 and 96, but does not include 96.

### While Loop

#### Coin flipper
Keep flipping a coin until you get head.

Face of the coin is represented with number 1 for head and 0 for face. The **coin is flipped** by "randomly"  generating value 1 or 2. JavaScript build-in function can do this `Math.floor(Math.random() * 2)`. We will learn about functions soon, you don't have to understand what it means yet.

**instructions**

- Flip a coin and assign it to a variable
- Using a *while* loop to test whether the flip is face of tail. If it is tail, print the message telling user had no luck and flip coin again.
- The program is expected to finish when the user got head (flip function generated number 1). Print to the console message telling user that got head.

#### Food server
Don't let customers hungry.

- store number of customers
- use *while* loop to server food as many times as there is number of customers. Each time print to console message that you are serving and number of the customer.

### Functions
....


## Assignment
### Lets build a game - *Rock, Scissors, Paper*

#### Rules
User plays against computer. User and computer choose either rock, scissors, or paper. According to following rules user or computer wins a point.

- paper _beats_ rock
- rock _beats_ scissors
- scissors _beats_ paper

If both users have the same choice, the result is _tie_.


#### Instructions
Instructions should help with creating program. You do not have to follow them, because there are many ways to implement the game.

- Prompt user to make a choice and store it to the variable. You can use build-in `prompt("message");` function to do this.
- Computer makes a choice
  - Use `Math.random()` to "randomly" generate integer value between 0 and 1
  - We need to map this random number into a random choice. Lets see how it can be done in the table:

  | number (between) | choice  |
  -------------------|----------
  | 0 - 0.33         | rock    |
  | 0.34 - 0.66      | scissors|
  | 0.67 - 1         | paper   |
  
- Write a function that will compare user's choice with computer choice and say who is the winner.

#### Make it more interesting (optional)
Now, the player needs to win once to be the winner. It would be more interesting if there are 3 rounds and the player who wins at least 2 rounds is the winner.

**Hints**

- Use loop to repeat the rounds.
- Store users score and increment winner's score each round.

#### Remember Good Practices and Conventions
- **Variables are like camels** - In JavaScript, variables having multiple words such as _"favourite meal"_, follow a convention: the first word starts with lowercase latter and every other word with capital latter and no spaces or hyphens between words, e.g. _favouriteMeal_. Looks like a camel, right? :)

- **Be easy to understand** - programs are read and changed by many people, therefore it is important that they are easy to understand. Variable names play important role.
 
  _For example: variable to get current year:_
  - **bad:** `var y = myFunction();` - you can not guess what `y` mean without looking on place where it was defined.
  - **better:** `var year = myFunction();` - its better because its obvious what `year` means, but can be more specific.
  - **best:** `var currentYear = myFunction();` - no matter where you use `currentYear` you know what it stands for.