// Setting color interval for heading
setInterval(function() {
  var colors = ["FAFAFA", "2600FD", "006B22", "424A02", "DA5504", "8F04DA"];
  var randomColor = Math.floor(Math.random() * colors.length).toString(16);
  document.getElementsByClassName(
    "colored"
  )[0].style.color = `#${colors[randomColor]}`;
}, 1000);

// object
var avengers = {
  heroNames: [
    "DOCTORSTRANGE",
    "IRONMAN",
    "ANTMAN",
    "BLACKWIDOW",
    "BLACKPANTHER",
    "CAPTAINMARVEL"
  ],
  heroImages: [
    "assets/images/dr_strange.png",
    "assets/images/iron_man.png",
    "assets/images/ant_man.png",
    "assets/images/black_widow.png",
    "assets/images/black_panther.png",
    "assets/images/captain_marvel.png"
  ],
  hints: [
    "He Lives in Greenwich Village, New York City",
    "He graduated from MIT with multiple degrees when he was 21 years old",
    "He does not lose any of his strength when he shrinks",
    "She was trained by Winter Soldier",
    "His Superpowers Come from a Heart-shaped Herb",
    "The strongest avenger"
  ],
  hulkImageOnLoss: "assets/images/hulk_image.png",
  LossingThemes: "assets/audio/smash.mp3",
  winningTheme: "assets/audio/win_theme.mp3"
};

// variable
var win = 0;
var loss = 0;
var guesses = 15;
var randomNumber = Math.floor(Math.random() * avengers.heroNames.length);
var hero = avengers.heroNames[randomNumber];
var hint = avengers.hints[randomNumber];
var imageOnWin = avengers.heroImages[randomNumber];
var imageOnLoss = avengers.hulkImageOnLoss;
var audioSourceOnLoss = avengers.LossingThemes;
var audioSourceOnWin = avengers.winningTheme;
var tempHero = hero;
var user;
// html elements
var remainingGuesses = document.getElementById("guesses_left");
var guessHistory = document.getElementById("guess_history");
var heroSelected = document.getElementById("hero_guess");
var userChar = document.getElementById("key_pressed");
var totalWin = document.getElementById("total_win");
var totalLoss = document.getElementById("total_loss");
var hintLine = document.getElementById("hint");
hintLine.innerHTML = hint; //gives hint for the avenger
var showImage = document.getElementById("show_hero");
var playAudio = document.getElementById("play_music");

// setting up element values
remainingGuesses.innerHTML = guesses;
// function to set char
String.prototype.setCharAt = function(index, chr) {
  return this.substr(0, index) + chr + this.substr(index + 1);
};
//
console.log(hero);
console.log(hero.length);
for (var j = 0; j < hero.length; j++) {
  hero = hero.setCharAt(j, "_");
  heroSelected.innerHTML = hero;
}
document.onkeyup = function(event) {
  userChar.textContent = event.key;
  user = userChar.textContent.toUpperCase();

  for (var k = 0; k < hero.length; k++) {
    console.log(tempHero[k]);
    if (user === tempHero[k]) {
      hero = hero.setCharAt(k, tempHero[k]);
      heroSelected.innerHTML = hero;
      if (!hero.includes("_")) {
        win++;
        totalWin.innerHTML = win;
        showImage.setAttribute("src", imageOnWin);
        playAudio.setAttribute("src", audioSourceOnWin);
        playAudio.play();
      } else {
        --guesses;
        remainingGuesses.innerHTML = guesses;
        guessHistory.innerHTML += user + ", ";
      }
    }
  }
  if (guesses === 0) {
    loss++;
    totalLoss.innerHTML = loss;
    showImage.setAttribute("src", imageOnLoss);
    playAudio.setAttribute("src", audioSourceOnLoss);
    playAudio.play();
  }
};

//  reset upon winning or losing function
function restart() {
  randomNumber = Math.floor(Math.random() * avengers.heroNames.length);
}
