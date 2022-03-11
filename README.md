# Pre-work - *Ron's Pattern Game*

**Ron's Pattern Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ron Villela**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/rons-pattern-game?path=README%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a pop up message notifying player of number of strikes

## Video Walkthrough (GIF)
You Win!<br>
![](https://github.com/ronvillela/Rons-Pattern-Game/blob/main/SITE%20You%20Win.gif)

Two Strikes!<br>
![](https://github.com/ronvillela/Rons-Pattern-Game/blob/main/SITE%202%20strikes.gif)

You Lose!<br>
![](https://github.com/ronvillela/Rons-Pattern-Game/blob/main/SITE%20You%20Lose.gif)

Faster!<br>
![](https://github.com/ronvillela/Rons-Pattern-Game/blob/main/SITE%20faster.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

For colors:<br>
https://www.quackit.com/css/css_color_codes.cfm

For randomizer algorithm:<br>
https://stackoverflow.com/search?q=math.random+javascript&s=4b58324a-1571-44df-ad89-aeafecaddf86

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

<p align='justify'>Initially, the game would not play the sequence.  It would only play the single clue.  I realiazed it was a misplaced curly brace.  Once I removed it, it played                        correclty.  Additioanlly, the randomizer function I used was not playing a random pattern.  This was due to an incorrect variable in the randomizer algorithm when switching from the current element to the random element in the pattern array within the randomizer function.  Next, the clueHoldTime variable was not speeding up.  I was not sure where in the playClueSequence function to place the clueHoldTime variable.  After much trial and error, I placed it before the for loop and it worked.  I also had to subtract the amount I wanted from the initial clueHoldTime value for each loop.  I also had to adjust the number of elements in the pattern array along with increasing the clueHoldTime since the game would hang because the clueHoldTime would reach 0 before the game was over.  I was able to add buttons and different frequencies for each.  The console.log method really helped every step of the way.  I was able to confirm whether what I was doing was working or not.  Finally and surpsingly, I was able to figure out the 3 strikes sequence function out fairly quickly.  I realized I needed to add a condition before calling the loseGame function.  I created three variables, strikes to keep a running count of strikes, totalStrikes which holds the total number of strikes allowed, and strikesLeft to hold the difference between totalStrikes minus strikes.  I kept a running count of strikes and added 1 for each incorrect guess.  If strikes reached 3, I called the loseGame method.  The if else allowed for deducting from totalStrikes and would add 1 to progress and call the playClueSequence method until totalStrikes reached 0.  At which time you get a toast, letting you know the game is over.</p>

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

<p align='justify'>I would like to know if you can implement the same features using other languages, like Java.  Does Java also work with HTML/CSS as Javascript.  Is Javascript also an object oriented language.  Additionally, what has to be implemented in order for a program/source code to work the same no matter which device you use (pc, mac, iPad, iPhone, android).  Lastly, how are security features implemented to make sure the site isn't exploited.</p>


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

<p align='justify'>I would spend time figuring out how to implenent the rest of the optional features.  For instance, adding a time clock to count down time left or a bar that starts full and decreases as time passes.  I would maybe try different color patterns along with button shapes/sizes.  Some type of animation if you win or lose to make it more exciting.  If you win, maybe you see fireworks or some type of gift box.  If you lose, a sad animation or something that laughs because you lost.  Maybe I could place the buttons in a circle and make it look like the original simon says game.</p>


## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/o1Pr337JG3o)


## License

    Copyright [Ron Villela]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
