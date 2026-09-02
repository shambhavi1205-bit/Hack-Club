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

//Modal code for "interests"

//get the modal
let modal = document.getElementById("myModal");

//get the card element that opens the modal
let card = document.getElementById("myCard");

//get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

//when the user clicks on the card, open the modal
card.onclick = function() {
   modal.style.display = "block";
}

//when the user clicks on <span> (x), close the modal
span.onclick = function() {
   modal.style.display = "none";
}

//when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}