import Player from "./Player.js";

// variabelen
const playerNameInputField = document.querySelector('.input-field-player-name');
const addPlayerButton = document.querySelector('.add-player-button');
const playerOneLabel = document.querySelector('.p1');
const playerTwoLabel = document.querySelector('.p2');
const players = [ ];
const currentPlayer = 0;

// Hier zijn alle buttons
const fields = document.querySelectorAll('.board > .fields');
const resetButton = document.querySelector(".reset-game-button");
const btn1 = document.querySelector('.btnL1')
const btn2 = document.querySelector('.btnM1')
const btn3 = document.querySelector('.btnR1')
const btn4 = document.querySelector('.btnL2')
const btn5 = document.querySelector('.btnM2')
const btn6 = document.querySelector('.btnR2')
const btn7 = document.querySelector('.btnL3')
const btn8 = document.querySelector('.btnM3')
const btn9 = document.querySelector('.btnR3')
const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]

function addPlayer() {
    if (players.length >= 2) {
        alert("There are 2 players (or more) already. Press Reset button to start a new game.");       
        return;
    }

    const playerName = playerNameInputField.value;
    
    const newPlayer = new Player(playerName, symbol);
    
    players.push(newPlayer); 

    
    printPlayers();
}

function printPlayers() {
    playerNameInputField.value = ("");

    console.log(players);

    let playersText = "";

    for(let i = 0; i < players.length; i++) {
        let player = players[i];
        let playersText = "Name: " + player.getName();
        let p = document.createElement("p");
        if (i == 0) { // Player One
            //Set text of player One label
            playerOneLabel.innerHTML = "";
            playerOneLabel.append (p) ;
            playerOneLabel = currentPlayer[0]
            p.textContent = `${playersText}` ;
            playerOneLabel.classList.add("p1");
        } else if (i == 1) {            
            //Set text of player One label
            playerTwoLabel.innerHTML = "";
            playerTwoLabel.append (p) ;
            playerTwoLabel = currentPlayer[1];
            p.textContent = `${playersText}` ;
            playerTwoLabel.classList.add("p2");
        } else {
            return; 
        }
    }
}

addPlayerButton.addEventListener("click", addPlayer);    



// Hier wordt een event listen toegevoegd aan de buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){

        if (currentPlayer == 0){
            buttons[i].innerHTML = "X"
            currentPlayer = 1;

        } else if (currentPlayer == 1){
            buttons[i].innerHTML = "O"
            currentPlayer = 0;

        }
        checkWinner();
})
}


function addSymbolToField(field) {
    const fieldContent = field.textContent;
    if (fieldContent === 'X' || fieldContent === 'O') {
        alert('This field can not be used');
    }

}

function checkWinner() {

    if (btn1.innerHTML == "X" && btn5.innerHTML == "X" && btn9.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }else if(btn1.innerHTML == "X" && btn2.innerHTML == "X" && btn3.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }else if(btn4.innerHTML == "X" && btn5.innerHTML == "X" && btn6.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }else if(btn7.innerHTML == "X" && btn8.innerHTML == "X" && btn9.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }else if(btn1.innerHTML == "X" && btn4.innerHTML == "X" && btn7.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }else if(btn2.innerHTML == "X" && btn5.innerHTML == "X" && btn8.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }else if(btn3.innerHTML == "X" && btn6.innerHTML == "X" && btn9.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }else if(btn3.innerHTML == "X" && btn5.innerHTML == "X" && btn7.innerHTML == "X"){
        alert("X Wins, reset the game")
        counter = 0;
    }
    
    if (btn1.innerHTML == "O" && btn5.innerHTML == "O" && btn9.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }else if(btn1.innerHTML == "O" && btn2.innerHTML == "O" && btn3.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }else if(btn4.innerHTML == "O" && btn5.innerHTML == "O" && btn6.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }else if(btn7.innerHTML == "O" && btn8.innerHTML == "O" && btn9.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }else if(btn1.innerHTML == "O" && btn4.innerHTML == "O" && btn7.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }else if(btn2.innerHTML == "O" && btn5.innerHTML == "O" && btn8.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }else if(btn3.innerHTML == "O" && btn6.innerHTML == "O" && btn9.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }else if(btn3.innerHTML == "O" && btn5.innerHTML == "O" && btn7.innerHTML == "O"){
        alert("O Wins, reset the game")
        counter = 0;
    }
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
    
        buttons[i].innerHTML = "-"
        currentPlayer = 0;

    }
    console.log("Resetting the game");
    players.splice(0, 2);
    console.log(players);
    playerOneLabel.innerHTML = "Player 1"; 
    playerTwoLabel.innerHTML = "Player 2"; 
}

resetButton.addEventListener("click", resetGame);