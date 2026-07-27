// ==========================================
// 1. KEYBOARD PRESS LISTENER (Bottom Row Keys)
// ==========================================
document.addEventListener("keydown", function(event) {
  // Grab the physical key pressed (converted to lowercase)
  makeSound(event.key.toLowerCase());
  buttona(event.key.toLowerCase());
});

// ==========================================
// 2. CURSOR TAPPING LISTENER (Mouse Clicks)
// ==========================================
var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // Grab the inner HTML letter of the clicked button (converted to lowercase)
    var clickedLetter = this.innerHTML.toLowerCase();
    makeSound(clickedLetter);
    buttona(clickedLetter);
  });
}

// ==========================================
// 3. CENTRAL SOUND TRIGGER FUNCTION
// ==========================================
function makeSound(input) {
  switch(input) {
    case "z": // Keyboard Key
   // Mouse HTML Letter
      var crash = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/crash.mp3");
      crash.play();
      break;

    case "x": // Keyboard Key OR Mouse HTML Letter (Now cleanly mapped to your second button)
      var kick = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
      kick.play();
      break;

    case "c": // Keyboard Key
     // Mouse HTML Letter
      var snare = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/snare.mp3");
      snare.play();
      break;

    case "v": // Keyboard Key
   // Mouse HTML Letter
      var tom1 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "b": // Keyboard Key
    // Mouse HTML Letter
      var tom2 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "n": // Keyboard Key
    // Mouse HTML Letter
      var tom3 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "m": // Keyboard Key
     // Mouse HTML Letter
      var tom4 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log("Input not mapped: " + input);
      break;
  }
}
function buttona(ckey){
  var activeb=document.querySelector("."+ckey);
  activeb.classList.add("pressed");
  setTimeout(function(){
    activeb.classList.remove("pressed");
  },100);
}