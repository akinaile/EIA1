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
});
document.querySelector(".pad1").addEventListener("click", function (): void {
    playSample(1);
});
document.querySelector(".pad2").addEventListener("click", function (): void {
    playSample(2);
});
document.querySelector(".pad3").addEventListener("click", function (): void {
    playSample(3);
});
document.querySelector(".pad4").addEventListener("click", function (): void {
    playSample(4);
});
document.querySelector(".pad5").addEventListener("click", function (): void {
    playSample(5);
});
document.querySelector(".pad6").addEventListener("click", function (): void {
    playSample(6);
});
document.querySelector(".pad7").addEventListener("click", function (): void {
    playSample(7);
});
document.querySelector(".pad8").addEventListener("click", function (): void {
    playSample(8);
});


document.querySelector(".buttons").addEventListener("click", function (): void {
    interval();
});

//HTML Elemente (Buttons)
const playB: HTMLElement = document.getElementById("play");
const stopB: HTMLElement = document.getElementById("stop");
const recB: HTMLElement = document.getElementById("rec");
const recBred: HTMLElement = document.getElementById("recred");
const deleB: HTMLElement = document.getElementById("delete");
let nullArray: number [] = [4, 5, 6];

let i: number = 0;
let x: number = 0;

//booleans
let boolRecord: boolean;
let boolPlayStop: boolean;

//toggle this please
function toggleThis(ONEHTMLELEMENT: HTMLElement, TWOHTMLELEMENT: HTMLElement): void {
    ONEHTMLELEMENT.classList.add("isHidden"); //wird nicht angezeigt
    TWOHTMLELEMENT.classList.remove("isHidden"); //wird nach remove wieder angezeigt
}

//Funktion(Sounds abspielen)
function playSample(x: number): void {
    pads[x].play();
}

//Sounds werden zum Beat
let intervallArray: number [] = [];
intervallArray[0] = 0;
intervallArray[1] = 1;
intervallArray[2] = 2;

function interval(): void {
    setInterval(function (): void {
        pads[0].play();
        pads[1].play();
        pads[2].play();
    },          450 );
}

//play and stop
document.getElementById("play").addEventListener("click", function(): void {
    toggleThis(playB, stopB);
    triggerSound(true);
});

stopB.addEventListener("click", function(): void {
    toggleThis(stopB, playB);
    triggerSound (false);
});

//Rec + RecRed
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
    intervallArray.length = 0;
});

//Sound play and stop Funktion, trigger
var intervallSound: number;

function triggerSound (i: boolean): void {
    if (i == true) {
            intervallSound = setInterval(function(): void {
                playSample(intervallArray[x]);
                x++
                console.log(x);
                if (x >= nullArray.length) {
                    x = 0;
                }
                },                       200);
            }
    } else {
        window.location.reload(false);
    }
}
