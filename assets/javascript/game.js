// Setting color interval for heading

setInterval(function() {
  var colors = ["FAFAFA", "2600FD", "006B22", "424A02", "DA5504", "8F04DA"];
  var randomColor = Math.floor(Math.random() * colors.length).toString(16);
  document.getElementsByClassName(
    "colored"
  )[0].style.color = `#${colors[randomColor]}`;
}, 1000);

//replace character in string with different character
String.prototype.setCharAt = function(index, chr) {
  return this.substr(0, index) + chr + this.substr(index + 1);
};

// object for game assets
var avengers = {
  heroInfo: [
    {
      name: "DOCTORSTRANGE",
      heroImage: "assets/ images / dr_strange.png",
      hint: "He Lives in Greenwich Village, New York City"
    },
    {
      name: "IRONMAN",
      heroImage: "assets/images/iron_man.png",
      hint:
        "He graduated from MIT with multiple degrees when he was 21 years old"
    },
    {
      name: "ANTMAN",
      heroImage: "assets/images/ant_man.png",
      hint: "He does not lose any of his strength when he shrinks"
    },
    {
      name: "BLACKWIDOW",
      heroImage: "assets/images/black_widow.png",
      hint: "She was trained by Winter Soldier"
    },
    {
      name: "BLACKPANTHER",
      heroImage: "assets/images/black_panther.png",
      hint: "His Superpowers Come from a Heart-shaped Herb"
    },
    {
      name: "CAPTAINMARVEL",
      heroImage: "assets/images/captain_marvel.png",
      hint: "The strongest avenger"
    }
  ],
  hulkImageOnLoss: "assets/images/hulk_image.png",
  LossingThemes: "assets/audio/smash.mp3",
  winningTheme: "assets/audio/win_theme.mp3"
};

// variables

var win = 0;
var loss = 0;
var guesses = 15;
var tempHero = [];
var randomChoice = randomHeroSelect();
console.log(randomChoice.name); //for test
console.log(randomChoice.hint); //for test
var hero = randomChoice.name;
var hint = randomChoice.hint;
var imageOnWin = randomChoice.heroImage;
var imageOnLoss = avengers.hulkImageOnLoss;
var audioSourceOnLoss = avengers.LossingThemes;
var audioSourceOnWin = avengers.winningTheme;
var temp = hero;

// elements

var remainingGuesses = function() {
  document.getElementById("guesses_left").innerHTML = guesses;
};

var guessHistory = function() {
  document.getElementById("guess_history").innerHTML += user + ", ";
};
var clearGuess = function() {
  document.getElementById("guess_history").innerHTML = " ";
};
var heroSelected = function() {
  document.getElementById("hero_guess").innerHTML = hero;
};
var userChar = document.getElementById("key_pressed");
var clearUserChar = function() {
  document.getElementById("key_pressed").innerHTML = " ";
};
var totalWin = function() {
  document.getElementById("total_win").innerHTML = win;
};
var clearWinningNumbers = function() {
  document.getElementById("total_win").innerHTML = " ";
};

var totalLoss = function() {
  document.getElementById("total_loss").innerHTML = loss;
};

var clearLosingNumbers = function() {
  document.getElementById("total_loss").innerHTML = " ";
};
var showHint = function() {
  document.getElementById("hint").innerHTML = hint;
};

var showImageOnLoss = function() {
  document.body.style.backgroundImage = `url(${imageOnLoss})`;
};
var showImageOnWin = function() {
  document.body.style.backgroundImage = `url(${imageOnWin})`;
};
var playAudioOnLoss = function() {
  var lossAudio = document.getElementById("play_music");
  lossAudio.setAttribute("src", audioSourceOnLoss);
  lossAudio.play();
  return lossAudio;
};
var playAudioOnWin = function() {
  var winAudio = document.getElementById("play_music");
  winAudio.setAttribute("src", audioSourceOnWin);
  winAudio.play();
  return winAudio;
};

var winningLine = function() {
  document.getElementById("result_line").innerHTML = "YOU WON!";
  document.getElementById("result_line").setAttribute("style", "color: green");
};

var losingLine = function() {
  document.getElementById("result_line").innerHTML = "TRY AGAIN!";
  document.getElementById("result_line").setAttribute("style", "color: red");
};

function showModal() {
  $("#result").modal("show");
}

var showOriginalBackground = function() {
  document.body.style.setAttribute("src", "/assets/images/bg.png");
};

// calling functions

remainingGuesses();
showHint();
heroSetupOnScreen();

//select random Helo each time;
function randomHeroSelect() {
  if (tempHero.length === 0) {
    tempHero = avengers.heroInfo.slice();
  }
  var random = Math.floor(Math.random() * tempHero.length);
  var temp = tempHero.splice(random, 1);
  return temp[0];
}
//  function to set hero for the game
function heroSetupOnScreen() {
  for (var j = 0; j < hero.length; j++) {
    hero = hero.setCharAt(j, "_");
    heroSelected();
    // console.log(hero);
  }
}
// reset function
function reset() {
  randomChoice = randomHeroSelect();
  hero = randomChoice.name;
  hint = randomChoice.hint;
  console.log(hero);
  console.log(hint);
  guesses = 15;
  temp = hero;
  heroSetupOnScreen();
  showHint();
  clearGuess();
  remainingGuesses();
  clearUserChar();
  return temp;
}
//  this function will reset all stats on the page
function masterReset() {
  win = 0;
  loss = 0;
  tempHero = [];
  reset();
  clearWinningNumbers();
  clearLosingNumbers();
  return temp;
}
// not in use
function resetOnWin() {
  reset();
  showImageOnWin();
}
// not in use
function resetOnLoss() {
  reset();
  showImageOnLoss();
}

// main logic that includes user key press and compare with hero selected

document.onkeypress = function(event) {
  userChar.textContent = event.key;
  user = userChar.textContent.toUpperCase();
  --guesses;
  remainingGuesses();
  guessHistory();
  for (var k = 0; k < hero.length; k++) {
    if (user === temp[k]) {
      hero = hero.setCharAt(k, temp[k]);
      heroSelected();
      if (!hero.includes("_")) {
        win++;
        totalWin();
        playAudioOnWin();
        winningLine();
        showModal();
        reset();
      }
    }
  }
  if (guesses === 0) {
    loss++;
    totalLoss();
    playAudioOnLoss();
    losingLine();
    showModal();
    reset();
  }
};
