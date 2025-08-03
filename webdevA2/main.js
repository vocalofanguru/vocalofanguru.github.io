 /*   CHECK-LIST FOR SELF
 timed events - startup screen
 select DOM (document.queryselector) - usage of buttons
 conditions & loops - form, toggling, game etc.
 form data - pig life cycle quiz
 Ability to use audio - pigsnort.mp3 played when clicked
 Dynamic Content - adding an element
 Responsive Web menu for Mobile - hamburger icon 
 Interactivity thru moving objects around - Pigs can fly game
 reset status without refreshing - form & minigame,  etc
 */ 
 
 window.addEventListener("load", function () {
    var splash = document.getElementById("startup-screen");
    var mainContent = document.getElementById("main-content");

    // startup screen using timed events
    setTimeout(function () {
      splash.classList.add("fade-out");

      //hide it and show content after a second
      setTimeout(function () {
        splash.style.display = "none";
        mainContent.style.display = "block";
      }, 1000); 
    }, 1000); 
  });



//MAIN NAV BAR
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
page4btn.addEventListener("click", function () {
show(4);
});


//Responsive Web Menu for Mobile//
var hamburger = document.getElementById('hamburger');
var nav = document.querySelector('nav');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('show');
});



//This is for the onscroll transitions, thru classes
var faders = document.querySelectorAll('.fade-in-section');

var appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

// intersectionobserver is based off scroll distance. hence class
// will be added when a certain threshold is met
var appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

for (var i = 0; i < faders.length; i++) {
  appearOnScroll.observe(faders[i]);
}


// flipping card 
var cards = document.querySelectorAll('.card');

// Loop over all card elements
for (var i = 0; i < cards.length; i++) {
  addFlipHandler(cards[i]);
}

// Define the handler function outside the loop
function addFlipHandler(cardElement) {
  cardElement.addEventListener('click', function () {
    flipCard(cardElement);
  }, false);
}

// Flip function — also declared outside loop
function flipCard(cardElement) {
  if (cardElement.classList.contains('flip')) {
    cardElement.classList.remove('flip');
  } else {
    cardElement.classList.add('flip');
  }
}

// for pig snout to make a noise when clicked on
const pigNose=document.querySelector("#Hoverpig");
const pigSnortAudio = new Audio("audio/PigSnort.mp3");
pigNose.addEventListener("click", function () {
pigSnortAudio.play();
});

// pig quiz 
document.getElementById("pigquiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  var userGuess = parseInt(document.getElementById("pigquiz-guess").value);
  var correctAnswer = 4;
  var feedback = document.getElementById("pigquiz-feedback");

  // if else condition based on the difference of the user's input to the actual answer
  if (userGuess === correctAnswer) {
    feedback.innerHTML = "<p>Correct! There are 4 stages in a pig's life cycle: <br/> Piglet, Weaned pig, Sow, and Farrowing Sow!</p>";
    feedback.style.color = "green";
  } else if (Math.abs(userGuess - correctAnswer) === 1) {
    feedback.innerHTML = "<p>Very, VERY close! You were off by 1!</p>";
    feedback.style.color = "orange";
  } else if (Math.abs(userGuess - correctAnswer) <= 2) {
    feedback.innerHTML = "<p>Not bad! You were off by 2!</p>";
    feedback.style.color = "goldenrod";
  } else {
    feedback.innerHTML = "<p>Too far! There are only 4 stages!</p>";
    feedback.style.color = "red";
  }

  // Remove any previous image
  const oldImage = document.getElementById("pigquiz-image");
  if (oldImage) {
    oldImage.remove();
  }

  // Create new image element
  const pigImage = document.createElement("img");
  pigImage.src = "Images/pig_life_cycle.png";  
  pigImage.alt = "lifecycle";
  pigImage.id = "pigquiz-image";
  pigImage.className = "pigquiz-image";
  pigImage.style.maxWidth = "100%";

  // Append image to the feedback area
  feedback.appendChild(pigImage);

  // Reset the form
  document.getElementById("pigquiz-form").reset();
});

const Breed1btn = document.querySelector("#breedbtn1");
const Breed2btn = document.querySelector("#breedbtn2");
const Breed3btn = document.querySelector("#breedbtn3");
const Breed4btn = document.querySelector("#breedbtn4");
const Breed5btn = document.querySelector("#breedbtn5");
const allBreedDivs = document.querySelectorAll(".breed");
const allBreedImageDivs = document.querySelectorAll(".breedImage");

// Hides all breed sections
function hideBreeds() {
  for (var i = 0; i < allBreedDivs.length; i++) {
    allBreedDivs[i].style.display = "none";
  }
}

function hideBreedImages() {
  for (var i = 0; i < allBreedImageDivs.length; i++) {
    allBreedImageDivs[i].classList.remove("visible");
  }
}
// Show the selected breed section
function showPig(pgno) {
  hideBreeds();
  hideBreedImages();
  const onepage = document.querySelector("#breed" + pgno);
  if (onepage) onepage.style.display = "block";

  const img = document.querySelector("#breedImage" + pgno);
  if (img) img.classList.add("visible");
}

// Event listeners
Breed1btn.addEventListener("click", function () {
  showPig(1);
});
Breed2btn.addEventListener("click", function () {
  showPig(2);
});
Breed3btn.addEventListener("click", function () {
  showPig(3);
});
Breed4btn.addEventListener("click", function () {
  showPig(4);
});
Breed5btn.addEventListener("click", function () {
  showPig(5);
});
show(1);
showPig(1);

//Enter and Exit fullscreen
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
document.documentElement.requestFullscreen();
}
function exitFullscreen() {
document.exitFullscreen();
}


//array for the divs that can be output
const pigUses = [
  { name: "Truffle Hunting", color: "pink" },
  { name: "Insulin Production", color: "lightgreen" },
  { name: "Weed grazing", color: "salmon" },
  { name: "Waste disposals", color: "lavender" },
  { name: "Household Pets", color: "lightblue" }
];

//dynamic content
const dynamicArea = document.querySelector("#dynamicArea");
let idCount = 0;

const addBtn = document.querySelector("#addBtn");
const remBtn = document.querySelector("#remBtn");

// click on add btn to add new pig usage
addBtn.addEventListener("click", addElement);

// Clear all pig tiles
remBtn.addEventListener("click", function () {
  dynamicArea.replaceChildren();
});

function addElement() {
  const pig = pigUses[idCount % pigUses.length]; // cycle through breeds

  const newDiv = document.createElement('div');
  newDiv.id = 'pig-id-' + (idCount++);
  newDiv.className = 'pig-tile';
  newDiv.style.background = pig.color;

  newDiv.innerHTML = `<strong>${pig.name}</strong><br>Click to remove!`;
  dynamicArea.appendChild(newDiv);
}

// Delegate clicks to remove pigs
dynamicArea.addEventListener("click", function (evt) {
  const sender = evt.target;
  if (sender.classList.contains("pig-tile")) {
    sender.remove();
  }
});


const flyingPig = document.getElementById("flyingpig");
const scoreDisplay = document.getElementById("score");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");

// Variables for game state
let flyingPigY = 250;
let gravity = 0.5;
let velocity = 0;
let isGameOver = false;
let score = 0;
let pipeGap = 150;
let gameStarted = false;
let pipes = [];
let pipeSpawnTimer = 0;
let lastFrameTime = null; // Track last frame timestamp

// Create a pair of pipes
function createPipePair() {
  const topPipe = document.createElement("div");
  const bottomPipe = document.createElement("div");
  const pipeHeight = Math.floor(Math.random() * 200) + 100;

  topPipe.classList.add("pipe");
  bottomPipe.classList.add("pipe");

  topPipe.style.height = pipeHeight + "px";
  topPipe.style.top = "0px";
  topPipe.style.left = "400px";

  bottomPipe.style.height = (600 - pipeHeight - pipeGap) + "px";
  bottomPipe.style.bottom = "0px";
  bottomPipe.style.left = "400px";

  gameContainer.appendChild(topPipe);
  gameContainer.appendChild(bottomPipe);

  pipes.push({ top: topPipe, bottom: bottomPipe, x: 400, height: pipeHeight });
}

function gameLoop(timestamp) {
  if (!gameStarted || isGameOver) return;

  if (!lastFrameTime) lastFrameTime = timestamp;
  const deltaTime = timestamp - lastFrameTime; // ms elapsed since last frame
  lastFrameTime = timestamp;

  const deltaSeconds = deltaTime / 1000; // convert to seconds

  // Physics: update velocity and position
  velocity += gravity;
  flyingPigY += velocity;
  flyingPig.style.top = flyingPigY + "px";

  pipeSpawnTimer += deltaTime;

  // Spawn pipes every 1500ms
  if (pipeSpawnTimer > 1500) {
    createPipePair();
    pipeSpawnTimer = 0;
  }

  // Move pipes left at 120 px/sec
  const pipeSpeed = 120;

  for (let i = 0; i < pipes.length; i++) {
    let pipe = pipes[i];
    pipe.x -= pipeSpeed * deltaSeconds;
    pipe.top.style.left = pipe.x + "px";
    pipe.bottom.style.left = pipe.x + "px";

    // Collision detection
    if (
      pipe.x < 120 && pipe.x > 80 &&
      (flyingPigY < pipe.height || flyingPigY > pipe.height + pipeGap)
    ) {
      isGameOver = true;
      document.getElementById("final-score").textContent = score;
      document.getElementById("game-over-screen").style.display = "flex";
      return;
    }

    // Increase score when pipe crosses x = 80
    if (pipe.x <= 80 && pipe.x + pipeSpeed * deltaSeconds > 80) {
      score++;
      scoreDisplay.textContent = score;
    }

    // Remove pipes offscreen
    if (pipe.x < -60) {
      gameContainer.removeChild(pipe.top);
      gameContainer.removeChild(pipe.bottom);
      pipes.splice(i, 1);
      i--;
    }
  }

  // Pig out of bounds check
  if (flyingPigY < 0 || flyingPigY > 560) {
    isGameOver = true;
    document.getElementById("final-score").textContent = score;
    document.getElementById("game-over-screen").style.display = "flex";
    return;
  }

  requestAnimationFrame(gameLoop);
}

function flap() {
  if (gameStarted && !isGameOver) {
    velocity = -8;
  }
}

// Controls
document.addEventListener('keydown', function (kbEvt) {
  if (kbEvt.code === "Space") {
    if (gameStarted && !isGameOver) {
      kbEvt.preventDefault();
      flap();
    }
  }
});

document.addEventListener("click", flap);

// Start button logic
startButton.addEventListener("click", function () {
  startScreen.style.display = "none";
  gameStarted = true;
  lastFrameTime = null; // Reset timer when starting
  gameLoop(performance.now());
});

// Restart button logic
document.getElementById("restart-button").addEventListener("click", function () {
  // Remove pipes
  for (var i = 0; i < pipes.length; i++) {
    gameContainer.removeChild(pipes[i].top);
    gameContainer.removeChild(pipes[i].bottom);
  }
  pipes = [];

  // Reset variables
  flyingPigY = 250;
  velocity = 0;
  score = 0;
  scoreDisplay.textContent = 0;
  isGameOver = false;
  pipeSpawnTimer = 0;
  lastFrameTime = null;
  document.getElementById("game-over-screen").style.display = "none";
  
  gameLoop(performance.now());
});


// This isnt part of the rubrucs but i wanted to try it out
  const backToTopBtn = document.getElementById("backToTopBtn");

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });