//Creating the Board
const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    //render the Board on DOM
    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })

        document.querySelector("#gameboard").innerHTML = boardHTML;
    }

    

    return {
        render,
    }


})();


//create Player
const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}


//Game Controller
const Game = (() => {
     let players = [];
     let currentPlayerIndex;
     let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O"),
        ]

        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    return {
        start,
    }
})();



//eventListener Start Button
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
    //alert("Start!");
})