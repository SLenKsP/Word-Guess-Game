# Word-Guess-Game

## Theme: Avengers

### Rules:
- This is simple word guessing game. Here you would guess a hero!
- Simply type letters on keyboard to guess Hero
- You have total 15 chances (right/wrong) available and each right or wrong key you press, chances will deduct by 1
- On each correct guess, letter word will reveal that letter on the blanks
- If you guess correct letter, you win and win will increment by 1
- If you were unable to guess letter in given chances, you will lose and losee will incement by 1

### Click on hint to find out interesting fact about Hero which gives you idea who it could be


### Technologies Used

- HTML 5
- CSS
- Bootstrap
- Javascript

### Problem 

-  Deduct remaining guesses if character was chosen earlier

  ```
    // Solution sample code
    if (keyStored.split(user).length - 1 === 1) {
    --guesses;
    remainingGuesses();
    guessHistory();
  }
    
  ```
