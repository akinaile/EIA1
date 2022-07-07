console.log("hi");

namespace TicTacToe {

let game: boolean = true;
let cell: HTMLDivElement;
let cellState: HTMLDivElement [] = []; //die einzelnen Zellen
let cellArray: HTMLElement [] = [];
let boardValue: any = [];


const easyDiv: HTMLElement = document.getElementById("easy");
const playersScore: HTMLElement = document.getElementById("resultP");
const compScore: HTMLElement = document.getElementById("resultC");

    //Buttons

let button1: HTMLElement = document.getElementById("button1");
let button2: HTMLElement = document.getElementById("button2");
let button3: HTMLElement = document.getElementById("button3");
const reloadButton: HTMLElement = document.getElementById("reloadButton");
const hiddenreloadbutton: HTMLElement = document.querySelector(".hiddenbutton");

 
    //Player zeichen
const playC: string = "X";
const playP: string = "O";

    //Boolean für punkte
var computerWin: boolean = false;
var playerWin: boolean = false;

    //Punkte hinzufügen
var countC: number = 0;
var countP: number = 0;

    //score anzeigen
const playersScroe: HTMLElement = document.getElementById("scoreP");
const computerScore: HTMLElement = document.getElementById("scoreC");

button1.addEventListener("click", function(): void { //Klick event für Easy Button
        let buttons: HTMLElement = document.getElementById("buttons"); 
        let board: HTMLElement = document.getElementById("board");
        buttons.classList.add("hidden");
        board.classList.remove("hidden");
        var containerEasy: HTMLElement = document.getElementById("containerEasy");
        //create div Cells 
        for (let index: number = 0; index < 9; index++) { // 9 felder
                let cell: HTMLDivElement = document.createElement("div"); // div wird erstellt
                cell.classList.add("cell"); //wird zur klasse hinzugefügt
                containerEasy.appendChild(cell); //wird dem container untergeordnet
                console.log("cell");
                cell.addEventListener("click", function(): void { //eventlistener bei Klick auf Cell
                    console.log("clicked cell" + index); 
                    if (game == true && cell.innerHTML == "") { //cell wird mit X und O ersetzt
                            cell.innerHTML = playP;
                            game = false;
                            console.log("playP");
                    }
                    if (game == false && cell.innerHTML == "") {
                        cell.innerHTML = playC;
                        game = true;
                        playerC();
                        }
                    });
                }
        playerC();
        checkWin();
            });
    
function playerC(): void {
    
    let fieldsEmpty: boolean = false;
    for (let iEasy: number = 0; iEasy < cellArray.length; iEasy++) {
                    if (cellArray[iEasy].innerHTML == "") {
                        fieldsEmpty = true;
                    }
                }
    let x: number = Math.floor(Math.random() * 9);
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
                    setTimeout(function (): void {
                        checkWin();

                    },         1500);
                }
             
            }
            //if (game == false && cellArray[x].innerHTML == "") {
        
            //Gewinnmölichkeiten 
function checkWin(): void {
    console.log("check win");
    let winningCombi: any = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                ];
    for (let i: number = 0; i < winningCombi.length; i++) {
                    let [a, b, c] = winningCombi[i];
                    if (boardValue[a] && boardValue[b] === boardValue[b] && boardValue[c]) {
                        return boardValue[a];
                    } else {
                        return null;
                    }
                }
            }       

//funtion welche punkte für den Computer verteilt
function pointsC(): void {
    //wenn der comp eine runde gewonnen hat, wird es dem score zugerechnet
    if (playerWin == true) {
        countC++;
        winner();
    }
    computerScore.innerHTML = countC + " Punkte";
}

//funktion welche dem Spieler punkte gibt
function pointsP(): void {
    if (playerWin == true) {
        countP++;
        winner();
    }
    playersScore.innerHTML = countP + " Punkte";
}

}

//gewinn funtion mit alert
function winner(): void {
    console.log("winn alert");
    if (cellArray.length <= 0) { //wenn alle cell arrays verteilt sind und keiner mehr verfügbar ist
        //wenn die player punkte größer sind als die computer punkte
        if (countP > countC) {
            setTimeout(() => {
                alert("Du hast gewonnen!");

            },         1000);
        }
        //falls computer mehr punkte hat
        else if (countP > countC) {
            setTimeout(() => {
                alert("Der Computer hat gewonnen!");

            },         1000);
        }
    }
}

    //Restart
reloadButton.addEventListener("click", function (): void {
        location.reload();
        console.log("restart");
    });

}

