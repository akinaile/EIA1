console.log("hi");
var TicTacToe;
(function (TicTacToe) {
    var game = true;
    var cell;
    var cellState = []; //die einzelnen Zellen
    var cellArray = [];
    var boardValue = [];
    var easyDiv = document.getElementById("easy");
    var playersScore = document.getElementById("resultP");
    var compScore = document.getElementById("resultC");
    //Buttons
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var reloadButton = document.getElementById("reloadButton");
    var hiddenreloadbutton = document.querySelector(".hiddenbutton");
    //Player zeichen
    var playC = "X";
    var playP = "O";
    //Boolean für punkte
    var computerWin = false;
    var playerWin = false;
    //Punkte hinzufügen
    var countC = 0;
    var countP = 0;
    //score anzeigen
    var playersScroe = document.getElementById("scoreP");
    var computerScore = document.getElementById("scoreC");
    function handleLoad(_event) {
        easyGame();
    }
    function easyGame() {
        button1.addEventListener("click", function () {
            var buttons = document.getElementById("buttons");
            var board = document.getElementById("board");
            buttons.classList.add("hidden");
            board.classList.remove("hidden");
            var containerEasy = document.getElementById("containerEasy");
            var _loop_1 = function (index) {
                var cell_1 = document.createElement("div"); // div wird erstellt
                cell_1.classList.add("cell"); //wird zur klasse hinzugefügt
                containerEasy.appendChild(cell_1); //wird dem container untergeordnet
                console.log("cell");
                cell_1.addEventListener("click", function () {
                    console.log("clicked cell" + index);
                    if (game == true && cell_1.innerHTML == "") { //cell wird mit X und O ersetzt
                        cell_1.innerHTML = playP;
                        game = false;
                        console.log("playP");
                    }
                    if (game == false && cell_1.innerHTML == "") {
                        cell_1.innerHTML = playC;
                        game = true;
                        playerC();
                    }
                });
            };
            //create div Cells 
            for (var index = 0; index < 9; index++) {
                _loop_1(index);
            }
            playerC();
            checkWin();
        });
    }
    function playerC() {
        var fieldsEmpty = false;
        for (var iEasy = 0; iEasy < cellArray.length; iEasy++) {
            if (cellArray[iEasy].innerHTML == "") {
                fieldsEmpty = true;
            }
        }
        var x = Math.floor(Math.random() * 9);
        if (fieldsEmpty) {
            if (game == false && cell.innerHTML == "") {
                cell.innerHTML = playC;
                game = true;
                console.log("playC");
            }
            if (game == false && cell.innerHTML != "") {
                playerC();
            }
        }
        if (game == true) {
            setTimeout(function () {
                checkWin();
            }, 1500);
        }
    }
    //if (game == false && cellArray[x].innerHTML == "") {
    //Gewinnmölichkeiten 
    function checkWin() {
        console.log("check win");
        var winningCombi = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (var i = 0; i < winningCombi.length; i++) {
            var _a = winningCombi[i], a = _a[0], b = _a[1], c = _a[2];
            if (boardValue[a] && boardValue[b] === boardValue[b] && boardValue[c]) {
                return boardValue[a];
            }
            else {
                return null;
            }
        }
    }
    //funtion welche punkte für den Computer verteilt
    function pointsC() {
        //wenn der comp eine runde gewonnen hat, wird es dem score zugerechnet
        if (playerWin == true) {
            countC++;
            winner();
        }
        computerScore.innerHTML = countC + " Punkte";
    }
    //funktion welche dem Spieler punkte gibt
    function pointsP() {
        if (playerWin == true) {
            countP++;
            winner();
        }
        playersScore.innerHTML = countP + " Punkte";
    }
})(TicTacToe || (TicTacToe = {}));
//gewinn funtion mit alert
function winner() {
    console.log("winn alert");
    if (cellArray.length <= 0) { //wenn alle cell arrays verteilt sind und keiner mehr verfügbar ist
        //wenn die player punkte größer sind als die computer punkte
        if (countP > countC) {
            setTimeout(function () {
                alert("Du hast gewonnen!");
            }, 1000);
        }
        //falls computer mehr punkte hat
        else if (countP > countC) {
            setTimeout(function () {
                alert("Der Computer hat gewonnen!");
            }, 1000);
        }
    }
}
//Restart
reloadButton.addEventListener("click", function () {
    location.reload();
    console.log("restart");
});
//# sourceMappingURL=script.js.map