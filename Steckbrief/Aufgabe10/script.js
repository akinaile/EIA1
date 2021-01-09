var newArray = [
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
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var finishedDOMElement;
var notfinishedDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    notfinishedDOMElement = document.querySelector("#notfinished");
    finishedDOMElement = document.querySelector("#finished");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + newArray[index].checked + "'><i class='fas fa-check'></i></span>"
            + newArray[index].content +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < newArray.length; index++) {
        _loop_1(index);
    }
    updateCounter();
    taskfinished();
    tasknotfinished();
}
//counter
function updateCounter() {
    counterDOMElement.innerHTML = newArray.length + " in total";
}
//finished task
function taskfinished() {
    var finished = 0;
    for (var index = 0; index < newArray.length; index++) {
        if (newArray[index].checked == true)
            finished++;
    }
    finishedDOMElement.innerHTML = finished + " done";
}
//notfinished task
function tasknotfinished() {
    var notfinished = 0;
    for (var index = 0; index < newArray.length; index++) {
        if (newArray[index].checked == false)
            notfinished++;
    }
    notfinishedDOMElement.innerHTML = notfinished + " open";
}
//unshift statt push um es an den anfang zu setzen
function addTodo() {
    if (inputDOMElement.value != "") {
        newArray.unshift({
            content: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "",
            drawListToDOM();
    }
}
function toggleCheckState(index) {
    newArray[index].checked = !newArray[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    newArray.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map