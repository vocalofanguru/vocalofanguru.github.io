//target all elements to save to constants
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

//This is for the onscroll transitions, thru classes
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target); // Animate only once
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


function flipCard(cardElement) {
  cardElement.classList.toggle('flip');
}

const Breed1btn = document.querySelector("#breedbtn1");
const Breed2btn = document.querySelector("#breedbtn2");
const Breed3btn = document.querySelector("#breedbtn3");
const Breed4btn = document.querySelector("#breedbtn4");
const Breed5btn = document.querySelector("#breedbtn5");
const allBreedDivs = document.querySelectorAll(".breed");
const allBreedImageDivs = document.querySelectorAll(".breedImage");

// Hides all breed sections
function hideBreeds() {
  allBreedDivs.forEach(breed => {
    breed.style.display = "none";
  });
}

function hideBreedImages() {
  allBreedImageDivs.forEach(img => {
    img.classList.remove("visible");
  });
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

const flyingPig = document.getElementById("bird");
const scoreDisplay = document.getElementById("score");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");

let flyingPigY = 250;
let gravity = 0.5;
let velocity = 0;
let isGameOver = false;
let score = 0;
let pipeGap = 150;
let gameStarted = false;
let pipes = [];
let pipeSpawnTimer = 0;

// Create a new pair of pipes
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

function gameLoop() {
  if (!gameStarted || isGameOver) return;

  // Bird physics
  velocity += gravity;
  flyingPigY += velocity;
  flyingPig.style.top = flyingPigY + "px";

  // Spawn pipes at intervals
  pipeSpawnTimer++;
  if (pipeSpawnTimer > 90) {
    createPipePair();
    pipeSpawnTimer = 0;
  }

  // Move and manage pipes
  pipes.forEach((pipe, index) => {
    pipe.x -= 2;
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

    // Score update
    if (pipe.x === 80) {
      score++;
      scoreDisplay.textContent = score;
    }

    // Remove off-screen pipes
    if (pipe.x < -60) {
      gameContainer.removeChild(pipe.top);
      gameContainer.removeChild(pipe.bottom);
      pipes.splice(index, 1);
    }
  });

  // Check boundaries
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
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (gameStarted && !isGameOver) {
      e.preventDefault(); // only prevent scroll during game
      flap();
    }
  }
});

document.addEventListener("click", flap);

// Start button logic
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameStarted = true;
  gameLoop();
});

document.getElementById("restart-button").addEventListener("click", () => {
  // Reset game state
  pipes.forEach(pipe => {
    gameContainer.removeChild(pipe.top);
    gameContainer.removeChild(pipe.bottom);
  });
  pipes = [];
  flyingPigY = 250;
  velocity = 0;
  score = 0;
  scoreDisplay.textContent = 0;
  isGameOver = false;
  pipeSpawnTimer = 0;
  document.getElementById("game-over-screen").style.display = "none";
  gameLoop();
});