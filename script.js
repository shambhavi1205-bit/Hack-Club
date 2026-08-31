//code for auto typing text using typed.js
const typed = new Typed(".auto-type", {
   strings: ["coding", "learning", "playing tennis", "a student", "an artist", "a musician", "traveling", "reading", "a clarinetist", "laughing", "studying", "a saxophonist"],
   typeSpeed: 150,
   backSpeed: 150,
   loop: true
});

//function for dark mode toggle
function myFunction() {
   let element = document.body;
   element.classList.toggle("dark-mode");
}