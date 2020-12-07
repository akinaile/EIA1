//Arrays
const pads = []
    pads[0] = new Audio ("hihat.mp3");
    pads[1] = new Audio ("kick.mp3");
    pads[2] = new Audio ("snare.mp3");
    pads[3] = new Audio ("A.mp3");
    pads[4] = new Audio ("C.mp3");
    pads[5] = new Audio ("F.mp3");
    pads[6] = new Audio ("G.mp3");
    pads[7] = new Audio ("laugh-1.mp3");
    pads[8] = new Audio ("laugh-2.mp3");


//Sounds abspielen
function playSample(x){
    pads[x].play;
}

//Sounds
document.querySelector(".pad0").addEventListener("click", function(){
    playSample(0);
});
document.querySelector(".pad1").addEventListener("click", function(){
    playSample(1);
});
document.querySelector(".pad2").addEventListener("click", function(){
    playSample(2);
});
document.querySelector(".pad3").addEventListener("click", function(){
    playSample(3);
});
document.querySelector(".pad4").addEventListener("click", function(){
    playSample(4);
});
document.querySelector(".pad5").addEventListener("click", function(){
    playSample(5);
});
document.querySelector(".pad6").addEventListener("click", function(){
    playSample(6);
});
document.querySelector(".pad7").addEventListener("click", function(){
    playSample(7);
});
document.querySelector(".pad8").addEventListener("click", function(){
    playSample(8);
});

//Button
document.querySelector(".button").addEventListener("click", function () {
    interval();
});

function interval() {
    setInterval(function () {
        pads[6].play();
        pads[5].play();
        pads[4].play();
    }, 400);
}

//# sourceMappingURL=script07.js.map