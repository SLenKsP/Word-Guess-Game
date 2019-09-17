// Setting color interval for heading
setInterval(function() {
  var colors = ["FAFAFA", "2600FD", "006B22", "424A02", "DA5504", "8F04DA"];
  var randomColor = Math.floor(Math.random() * colors.length).toString(16);
  document.getElementsByClassName(
    "colored"
  )[0].style.color = `#${colors[randomColor]}`;
}, 1000);

// variable 
var wins = 0;
var loss = 0;
var guesses = 15;


// html elements

// object

var avengers = {
    heroNames:[ "DOCTORSTRANGE", "IRONMAN", "ANTMAN", "BLACKWIDOW", "BLACKPANTHER", "CAPTAINMARVEL" ],
    heroImages: ["../images/dr_strange.png", "../images/iron_man.png", "../images/ant_man.png", "../images/black_widow.png", "../images/black_panther.png", "../images/captain_marvel.png"],
    hints: [ "He Lives in New York City’s Greenwich Village", "He graduated from MIT with multiple degrees when he was 21 years old", "He doesn't lose any of his strength when he shrinks", "She was trained by Winter Soldier", "His Superpowers Come from a Heart-shaped Herb", "The strongest avenger" ],
    hulkImageOnLoss: "../images/hulk_image.png",
    LossingThemes: "../audio/smash.mp3",
    winningTheme: "../audio/win_theme.mp3"
};