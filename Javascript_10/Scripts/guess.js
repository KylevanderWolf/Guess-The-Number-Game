
let name = prompt('Wat is your name?', '');

// greetings
alert('Welcome ' + name + " lets start the guessing game");
alert(`you have 5 guesses`);

let number = prompt("Choose a number from 0 to 25", '');

alert(`You have chosen number ` + number + " Click OK to check if its the right one");


let randomNumbers = Math.floor(Math.random() * 26);


for (i = 4; i >= 0; i--) {
    if (randomNumbers == number) {
        alert("Correct!")
        alert("Congratulations, you have won!")
    }
    else if (i == 0) {
        alert('Game over ' + name + " you have " + i + " tries left!")
    }
    else {
        prompt("You can try this " + i + " more time(s), Choose a number from 0 to 25", '');
    }
}





