//Arrays für Pads
var pads = [];
pads[0] = new Audio("hihat.mp3");
pads[1] = new Audio("kick.mp3");
pads[2] = new Audio("snare.mp3");
pads[3] = new Audio("A.mp3");
pads[4] = new Audio("C.mp3");
pads[5] = new Audio("F.mp3");
pads[6] = new Audio("G.mp3");
pads[7] = new Audio("laugh-1.mp3");
pads[8] = new Audio("laugh-2.mp3");
//Sounds
document.querySelector(".pad0").addEventListener("click", function () {
    playSample(0);
    recSound(0);
});
document.querySelector(".pad1").addEventListener("click", function () {
    playSample(1);
    recSound(1);
});
document.querySelector(".pad2").addEventListener("click", function () {
    playSample(2);
    recSound(2);
});
document.querySelector(".pad3").addEventListener("click", function () {
    playSample(3);
    recSound(3);
});
document.querySelector(".pad4").addEventListener("click", function () {
    playSample(4);
    recSound(4);
});
document.querySelector(".pad5").addEventListener("click", function () {
    playSample(5);
    recSound(5);
});
document.querySelector(".pad6").addEventListener("click", function () {
    playSample(6);
    recSound(6);
});
document.querySelector(".pad7").addEventListener("click", function () {
    playSample(7);
    recSound(7);
});
document.querySelector(".pad8").addEventListener("click", function () {
    playSample(8);
    recSound(8);
});
//HTML Elemente (Buttons)
var playB = document.getElementById("play");
var stopB = document.getElementById("stop");
var recB = document.getElementById("rec");
var recBred = document.getElementById("recred");
var deleB = document.getElementById("delete");
var i = 0;
var x = 0;
//booleans
var boolRecord = false;
var boolPlayStop = false;
//toggle this please
function toggleThis(ONEHTMLELEMENT, TWOHTMLELEMENT) {
    ONEHTMLELEMENT.classList.add("isHidden"); //wird nicht angezeigt
    TWOHTMLELEMENT.classList.remove("isHidden"); //wird nach remove wieder angezeigt
    console.log("hide me");
}
//Funktion(Sounds abspielen)
function playSample(x) {
    pads[x].play();
}
//Sounds werden zum Beat
var intervallArray = [2, 1, 0];
function interval() {
    setInterval(function () {
        pads[1].play();
        pads[2].play();
        pads[1].play();
        pads[2].play();
        pads[0].play();
    }, 250);
}
//play and stop
document.getElementById("play").addEventListener("click", function () {
    toggleThis(playB, stopB);
    boolPlayStop = true;
    triggerSound();
    console.log("play");
});
stopB.addEventListener("click", function () {
    toggleThis(stopB, playB);
    boolPlayStop = false;
    triggerSound();
    console.log("stop");
});
//Rec + RecRed farb wechsel
document.getElementById("rec").addEventListener("click", function () {
    toggleThis(recBred, recB);
    boolRecord = true; //ist schwarz
});
document.getElementById("recred").addEventListener("click", function () {
    toggleThis(recBred, recB);
    boolRecord = false; //wird rot
});
function recSound(x) {
    if (boolRecord == true) {
        intervallArray.unshift(x);
    }
}
//Delete
deleB.addEventListener("click", function () {
    intervallArray = [];
    console.log("gelöscht");
});
//Sound play and stop Funktion, trigger
var intervallSound;
function triggerSound() {
    if (boolPlayStop == true) {
        intervallSound = setInterval(function () {
            if (i < intervallArray.length) {
                playSample(intervallArray[i]);
                i++;
            }
            else {
                i = 0;
            }
        }, 200);
    }
    else {
        clearInterval(intervallSound);
    }
}
//# sourceMappingURL=script08.js.map