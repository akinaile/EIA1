console.log("hallo");
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
                if (game == true && cell_1.innerHTML == "") { //einfügen fpr x und o
                    cell_1.innerHTML = playP;
                    game = false;
                    console.log("playerP" + index);
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
    function playerC() {
        console.log("computer game");
        var cellsEmpty = false;
        for (var index = 0; index < cellState.length; index++) {
            if (cellState[index].innerHTML == "") {
                cellsEmpty = true;
                console.log(this);
            }
        }
        var x = Math.floor(Math.random() * 9);
        if (cellsEmpty) {
            if (game == false && cellState[x].innerHTML == "") {
                cellState[x].innerHTML = playC;
                game = true;
                console.log(x);
            }
            if (game == false && cellState[x].innerHTML != "") {
                playerC();
            }
        }
    }
    function checkWin() {
        console.log("winning como");
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
        if (playerC == true)
            ;
    }
    //funktion welche dem Spieler punkte gibt
    function pointsP() {
        if (playerWin == true) {
            countP++;
            winner();
        }
        playersScore.innerHTML = countP + " Punkte";
    }
    //gewinn funtion mit alert
    function winner() {
        console.log("winn alert");
        if (cellState.length <= 0) { //wenn alle cell arrays verteilt sind und keiner mehr verfügbar ist
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
})(TicTacToe || (TicTacToe = {}));
//# sourceMappingURL=script.js.map