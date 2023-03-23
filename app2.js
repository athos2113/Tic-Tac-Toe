//App2.js
//Add Click Property to Each Square


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
        //add an event listener to each square
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
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


    //handleClick -> on clicking each square
    const handleClick = (event) => {
        //alert("Square!");
        //console.log(event);
        console.log(event.target.id);

        let index = parseInt(event.target.id.split("-")[1]);
        //alert(index);

    }

    return {
        start,
        handleClick
    }
})();



//eventListener Start Button
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
})