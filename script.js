//Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 5, 4, 6, 4, 3];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1300; //how long to hold each clue's light/sound
var strikes = 0;
var totalStrikes = 3;
var strikesLeft = 0;

function startGame(){
    //initialize game variables
    progress = 0;
    strikes = 0;
    totalStrikes = 3;
    clueHoldTime = 1300;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    randomize(pattern);
    playClueSequence();
    
}   

function randomize(pattern) {
  let currentIndex = pattern.length, randomIndex;
  while(currentIndex != 0){
    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
  
    //Swap it with the current element
    [pattern[currentIndex], pattern[randomIndex]] = 
    [pattern[randomIndex], pattern[currentIndex]]; 
  }
  console.log("random pattern: " + pattern);
  return pattern;

  
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime = clueHoldTime - 150;
  console.log("clueHoldTime = " + clueHoldTime);
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    
  }
  
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  
  // add game logic here
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    strikes++;
    console.log("Total Strikes: " + strikes);
    if(strikes == 3){
      //GAME OVER: LOSE!
    loseGame();
    } else{
      strikesLeft = totalStrikes - strikes;
      alert("You have " + strikesLeft + " strikes left out of 3!");
      progress++;
      playClueSequence();
    }
    
  }
  
}

function loseGame(){
  stopGame();
  alert("3 Strikes.  Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over.  You won!")
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 542
  
}
  
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)