//code for auto typing text using typed.js
const typed = new Typed(".auto-type", {
   strings: ["coding", "learning", "playing tennis", "a student", "an artist", "a musician", "traveling", "reading", "a clarinetist", "laughing", "studying", "a saxophonist"],
   typeSpeed: 150,
   backSpeed: 150,
   loop: true
});

//function for dark mode toggle

//defines a function called myFunction
function myFunction() {
   //a variable called "element" stores the <body> element of the HTML document inside it
   let element = document.body;
   //
   element.classList.toggle("dark-mode");
}

//creates a variable named "darkmode"
let darkmode = 
//
localStorage.getItem("darkmode")
//creates a constant variable named "themeSwitch" 
const themeSwitch = 
//finds the HTML element on the page with id="theme-switch"
document.getElementById('theme-switch')

//defines a function called enableDarkmode
const enableDarkmode = 
//arrow syntax
() => {
   //adds the CSS class "darkmode" to the <body> element
   document.body.classList.add('darkmode')
   //saves darkmode with the value active
   localStorage.setItem('darkmode', 'active')
}


//defines a function called disableDarkmode
const disableDarkmode = () => {
   //removes the "darkmode" CSS class
   document.body.classList.remove('darkmode')
   //updates storage to clear the active state
   localStorage.setItem('darkmode', null)
}

//checks if the saved value equals "active"
if(darkmode === "active") enableDarkmode() //if "active", enableDarkmode () runs so the user can go back to dark mode

//code runs if the themSwitch is clicked
themeSwitch.addEventListener("click", () => {
   //gets latest saved status
   darkmode = localStorage.getItem('darkmode')
   //if dark mode is not active,
   if(darkmode!== "active"){
      //darkmode is enabled
      enableDarkmode()
   }
   //if dark mode is active,
   else{
      //darkmode is disabled
      disableDarkmode()
   }
})

//Modal code for "music"

//get the modal
let modalOne = document.getElementById("modalMusic");

//get the card element that opens the modal
let cardOne = document.getElementById("musicCard");

//get the <span> element that closes the modal
let spanOne = document.getElementById("closeMusic");

//when the user clicks on the card, open the modal
//when the user clicks on the card element, run the code inside the curly braces
cardOne.onclick = 
//a block of code that stays dormant until triggered by a click
function() {
   //gets the CSS styling of "modal" and changes it to a block so that the modal can be seen
   modalOne.style.display = "block";
}

//when the user clicks on <span> (x), close the modal
//when the user clicks on the x, run the code inside the curly braces
spanOne.onclick = function() {
   //the CSS display returns to none so that the modal is not seen
   modalOne.style.display = "none";
}

//when the user clicks anywhere outside of the modal, close it
//listens for a click anywhere on the entire browser window
window.addEventListener("click",
//gives us an event object that contains information about the click
function(event) {
   //"==" checks if the target of the click is the modal; if so, the modal closes
   if (event.target == modalOne) {
      modalOne.style.display = "none";
   }
});


//Modal code for "traveling"

//get the modal
let modalTwo = document.getElementById("modalTraveling");

//get the card element that opens the modal
let cardTwo = document.getElementById("travelingCard");

//get the <span> element that closes the modal
let spanTwo = document.getElementById("closeTraveling");

//when the user clicks on the card, open the modal
//when the user clicks on the card element, run the code inside the curly braces
cardTwo.onclick = 
//a block of code that stays dormant until triggered by a click
function() {
   //gets the CSS styling of "modal" and changes it to a block so that the modal can be seen
   modalTwo.style.display = "block";
}

//when the user clicks on <span> (x), close the modal
//when the user clicks on the x, run the code inside the curly braces
spanTwo.onclick = function() {
   //the CSS display returns to none so that the modal is not seen
   modalTwo.style.display = "none";
}

//when the user clicks anywhere outside of the modal, close it
//listens for a click anywhere on the entire browser window
window.addEventListener("click",
//gives us an event object that contains information about the click
function(event) {
   //"==" checks if the target of the click is the modal; if so, the modal closes
   if (event.target == modalTwo) {
      modalTwo.style.display = "none";
   }
});

//Modal code for "art"

//get the modal
let modalThree = document.getElementById("modalArt");

//get the card element that opens the modal
let cardThree = document.getElementById("artCard");

//get the <span> element that closes the modal
let spanThree = document.getElementById("closeArt");

//when the user clicks on the card, open the modal
//when the user clicks on the card element, run the code inside the curly braces
cardThree.onclick = 
//a block of code that stays dormant until triggered by a click
function() {
   //gets the CSS styling of "modal" and changes it to a block so that the modal can be seen
   modalThree.style.display = "block";
}

//when the user clicks on <span> (x), close the modal
//when the user clicks on the x, run the code inside the curly braces
spanThree.onclick = function() {
   //the CSS display returns to none so that the modal is not seen
   modalThree.style.display = "none";
}

//when the user clicks anywhere outside of the modal, close it
//listens for a click anywhere on the entire browser window
window.addEventListener("click",
//gives us an event object that contains information about the click
function(event) {
   //"==" checks if the target of the click is the modal; if so, the modal closes
   if (event.target == modalThree) {
      modalThree.style.display = "none";
   }
});

//Modal code for "books"

//get the modal
let modalFour = document.getElementById("modalBook");

//get the card element that opens the modal
let cardFour = document.getElementById("bookCard");

//get the <span> element that closes the modal
let spanFour = document.getElementById("closeBook");

//when the user clicks on the card, open the modal
//when the user clicks on the card element, run the code inside the curly braces
cardFour.onclick = 
//a block of code that stays dormant until triggered by a click
function() {
   //gets the CSS styling of "modal" and changes it to a block so that the modal can be seen
   modalFour.style.display = "block";
}

//when the user clicks on <span> (x), close the modal
//when the user clicks on the x, run the code inside the curly braces
spanFour.onclick = function() {
   //the CSS display returns to none so that the modal is not seen
   modalFour.style.display = "none";
}

//when the user clicks anywhere outside of the modal, close it
//listens for a click anywhere on the entire browser window
window.addEventListener("click",
//gives us an event object that contains information about the click
function(event) {
   //"==" checks if the target of the click is the modal; if so, the modal closes
   if (event.target == modalFour) {
      modalFour.style.display = "none";
   }
});

//scroll back to top btns

//finds the scrollable modal containing the btn
let topbutton1 = document.getElementById("topBtn1");
let modalContent1 = topbutton1.closest(".modal-content");

// When the user scrolls down 20px in the modal, show the button
modalContent1.onscroll = function() {scrollFunction1()};

function scrollFunction1() {
   if (modalContent1.scrollTop > 20) {
    topbutton1.style.display = "block";
  } else {
    topbutton1.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction1() {
   modalContent1.scrollTo({top: 0, behavior: "smooth"});
}

//scroll back to top btn #2

//finds the scrollable modal containing the btn
let topbutton2 = document.getElementById("topBtn2");
let modalContent2 = topbutton2.closest(".modal-content");

// When the user scrolls down 20px in the modal, show the button
modalContent2.onscroll = function() {scrollFunction2()};

function scrollFunction2() {
   if (modalContent2.scrollTop > 20) {
    topbutton2.style.display = "block";
  } else {
    topbutton2.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction2() {
   modalContent2.scrollTo({top: 0, behavior: "smooth"});
}

//scroll back to top btn #3

//finds the scrollable modal containing the btn
let topbutton3 = document.getElementById("topBtn3");
let modalContent3 = topbutton3.closest(".modal-content");

// When the user scrolls down 20px in the modal, show the button
modalContent3.onscroll = function() {scrollFunction3()};

function scrollFunction3() {
   if (modalContent3.scrollTop > 20) {
    topbutton3.style.display = "block";
  } else {
    topbutton3.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction3() {
   modalContent3.scrollTo({top: 0, behavior: "smooth"});
}

//scroll back to top btn #4

//finds the scrollable modal containing the btn
let topbutton4 = document.getElementById("topBtn4");
let modalContent4 = topbutton4.closest(".modal-content");

// When the user scrolls down 20px in the modal, show the button
modalContent4.onscroll = function() {scrollFunction4()};

function scrollFunction4() {
   if (modalContent4.scrollTop > 20) {
    topbutton4.style.display = "block";
  } else {
    topbutton4.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction4() {
   modalContent4.scrollTo({top: 0, behavior: "smooth"});
}

