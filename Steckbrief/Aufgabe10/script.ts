//interface zum zusammenfügen der arrays
interface InterfaceList {
    content: string;
    checked: boolean;
}

let newArray: InterfaceList[] = [
    {
        content: "Lorem",
        checked: true
    },
    {
        content: "Ipsum",
        checked: false
    },
    {
        content: "Dolor",
        checked: false
    }
];

//Sprachsteuerung

declare const Artyom: any;

window.addEventListener("click", function (): void {
    const artyom: any = new Artyom();

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    startContinuousArtyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void { 
            newArray.unshift({
                content: wildcard,
                checked: false
            });

            drawListToDOM();
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            artyom.say("Deine Aufgabe" + wildcard + " wurde ergänzt");
        }
    });
    document.querySelector("#SprachBtn").addEventListener("click", function (): void {
        artyom.say("Spracheingabe ist aktiviert");
        startContinuousArtyom();
    });
    });



var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var finishedDOMElement: HTMLElement;
var notfinishedDOMElement: HTMLElement;


window.addEventListener("load", function(): void {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    notfinishedDOMElement = document.querySelector("#notfinished");
    finishedDOMElement = document.querySelector("#finished");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < newArray.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + newArray[index].checked + "'><i class='fas fa-check'></i></span>"
                            + newArray[index].content +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
    taskfinished();
    tasknotfinished();
}

//counter
function updateCounter(): void {
    counterDOMElement.innerHTML = newArray.length + " in total";
}

//finished task
function taskfinished(): void {
    var finished = 0;
    for (var index = 0; index < newArray.length; index++) {
        if (newArray[index].checked == true)
        finished++;
    }
    finishedDOMElement.innerHTML = finished + " done";
}

//notfinished task
function tasknotfinished(): void {
    var notfinished = 0;
    for (var index = 0; index < newArray.length; index++) {
        if (newArray[index].checked == false)
        notfinished++;
    }
    notfinishedDOMElement.innerHTML = notfinished + " open";
}

//unshift statt push um es an den anfang zu setzen
function addTodo(): void {

    if (inputDOMElement.value != "") {
    
        newArray.unshift(
            {
            content: inputDOMElement.value,
            checked: false
            }
        );
        inputDOMElement.value = "",
        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {
    newArray[index].checked = !newArray[index].checked;
    drawListToDOM();
}


function deleteTodo(index: number): void {
    newArray.splice(index, 1);
    drawListToDOM();
}