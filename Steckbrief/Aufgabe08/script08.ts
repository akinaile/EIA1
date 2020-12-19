//Arrays für Pads
var pads: HTMLAudioElement [] = [];
pads[0] = new Audio ("hihat.mp3");
pads[1] = new Audio ("kick.mp3");
pads[2] = new Audio ("snare.mp3");
pads[3] = new Audio ("A.mp3");
pads[4] = new Audio ("C.mp3");
pads[5] = new Audio ("F.mp3");
pads[6] = new Audio ("G.mp3");
pads[7] = new Audio ("laugh-1.mp3");
pads[8] = new Audio ("laugh-2.mp3");


//Sounds
document.querySelector(".pad0").addEventListener("click", function (): void {
    playSample(0);
    recSound(0);
});
document.querySelector(".pad1").addEventListener("click", function (): void {
    playSample(1);
    recSound(1);
});
document.querySelector(".pad2").addEventListener("click", function (): void {
    playSample(2);
    recSound(2);
});
document.querySelector(".pad3").addEventListener("click", function (): void {
    playSample(3);
    recSound(3);
});
document.querySelector(".pad4").addEventListener("click", function (): void {
    playSample(4);
    recSound(4);
});
document.querySelector(".pad5").addEventListener("click", function (): void {
    playSample(5);
    recSound(5);
});
document.querySelector(".pad6").addEventListener("click", function (): void {
    playSample(6);
    recSound(6);
});
document.querySelector(".pad7").addEventListener("click", function (): void {
    playSample(7);
    recSound(7);
});
document.querySelector(".pad8").addEventListener("click", function (): void {
    playSample(8);
    recSound(8);
});




//HTML Elemente (Buttons)
const playB: HTMLElement = document.getElementById("play");
const stopB: HTMLElement = document.getElementById("stop");
const recB: HTMLElement = document.getElementById("rec");
const recBred: HTMLElement = document.getElementById("recred");
const deleB: HTMLElement = document.getElementById("delete");
const deleBR: HTMLElement = document.getElementById("deletered");



let i: number = 0;
let x: number = 0;

//booleans
let boolRecord: boolean = false;
let boolPlayStop: boolean = false;
let boolDel: boolean = false;

//toggle this please
function toggleThis(ONEHTMLELEMENT: HTMLElement, TWOHTMLELEMENT: HTMLElement): void {
    ONEHTMLELEMENT.classList.add("isHidden"); //wird nicht angezeigt
    TWOHTMLELEMENT.classList.remove("isHidden"); //wird nach remove wieder angezeigt
    console.log("hide me");
}

//Funktion(Sounds abspielen)
function playSample(x: number): void {
    pads[x].play();
}

//Sounds werden zum Beat
let intervallArray: number [] = [2, 1, 0];


function interval(): void {
    setInterval(function (): void {
        pads[1].play();
        pads[2].play();
        pads[1].play();
        pads[2].play();
        pads[0].play();
    },          400 );
}

//play and stop
document.getElementById("play").addEventListener("click", function(): void {
    toggleThis(playB, stopB);
    boolPlayStop = true;
    triggerSound();
    console.log("play");
});

stopB.addEventListener("click", function(): void {
    toggleThis(stopB, playB);
    boolPlayStop = false;
    triggerSound();
    console.log("stop");
});

//Rec + RecRed farb wechsel
document.getElementById("rec").addEventListener("click", function(): void {
    toggleThis (recBred, recB);
    boolRecord = true; //ist schwarz

});
document.getElementById("recred").addEventListener("click", function(): void {
    toggleThis (recBred, recB);
    boolRecord = false; //wird rot
});

function recSound(x: number): void {
    if (boolRecord == true) {
        intervallArray.push(x);
    }
}


//Delete
deleB.addEventListener("click", function(): void {
    intervallArray = [];
    console.log("gelöscht");
});

//Sound play and stop Funktion, trigger
var intervallSound: number;

function triggerSound(): void {
    if (boolPlayStop == true) {
            intervallSound = setInterval(function(): void {
            if (i < intervallArray.length) {
                playSample(intervallArray[i]);
                i++;
            } else {
                i = 0;
            }
        },                               400); 
    } else  {
        clearInterval(intervallSound);
    }
}

//Tasten Belegung
// tslint:disable-next-line: typedef
document.addEventListener("keydown", function(click): void {
    switch (click.key) {
        case "1":
            playSample(0);
            recSound(0);
            break;
        case "2":
            playSample(1);
            recSound(1);
            break;
        case "3":
            playSample(2);
            recSound(2);
            break;
        case "4":
            playSample(3);
            recSound(3);
            break;
        case "5":
            playSample(4);
            recSound(4);
            break;
        case "6":
            playSample(5);
            recSound(5);
            break;
        case "7":
            playSample(6);
            recSound(6);
            break;
        case "8":
            playSample(7);
            recSound(7);
            break;   
        case "9":
            playSample(8);
            recSound(8);
            break;
        case " ":
            playstopKey();
            break;
        case "y":
            recKey();
            break;
        case "m":
            intervallArray = [];
            break;
    }

    function playstopKey(): void {
        if (boolPlayStop == false) {
            toggleThis(playB, stopB);
            boolPlayStop = true;
            triggerSound();
        }
        else if (boolPlayStop == true) {
            toggleThis(stopB, playB);
            boolPlayStop = false;
            triggerSound();
        }
    }
});
function recKey(): void {
    if (boolRecord == false) {
        toggleThis(recB, recBred);
        boolRecord = true;
    }
    else if (boolRecord == true) {
        toggleThis(recBred, recB);
        boolRecord = false;
    }
}
function delKey(): void {
    if (boolDel == false) {
        toggleThis(deleB, deleBR);
        boolRecord = true;
    }
    else if (boolDel == true) {
        toggleThis(deleBR, deleB);
        boolRecord = false;
    }
}