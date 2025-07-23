//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
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
