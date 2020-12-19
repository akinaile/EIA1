var Aufgabe09;
(function (Aufgabe09) {
    var inputField = document.getElementById("inputText");
    var addBtn = document.getElementById("addButton");
    var amount = 0;
    document.getElementById("deleteAllToDo").addEventListener("click", function () {
        deleteAllTasks();
    });
    inputField.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            inputField.value = ""; //Value leeren
        }
    });
    addBtn.addEventListener("click", function () {
        addTask();
        inputField.value = ""; //Value leeren
    });
    function removeTask(container) {
        container.remove();
        amount--;
        updateAmount();
    }
    function updateAmount() {
        document.getElementById("counter").innerText = amount + " ToDo's";
    }
    function deleteAllTasks() {
        var list = document.getElementById("toDoList"); //
        list.innerHTML = "";
        amount = 0;
        updateAmount();
    }
    function addTask() {
        var container = document.createElement("div");
        container.className = "container";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        var label = document.createElement("label"); //Label ist der Text zur Checkbox => Eingabe soll als Label ausgegeben werden
        label.innerHTML = inputField.value; //Per InnerHTMl Value an Label übergeben
        label.className = "taskText";
        var trash = document.createElement("i");
        trash.className = "fas fa-trash-alt";
        document.getElementById("toDoList").appendChild(container);
        container.appendChild(checkbox); //Elemente an div übergeben
        container.appendChild(label);
        container.appendChild(trash);
        trash.addEventListener("click", function () {
            removeTask(container);
        });
        checkbox.addEventListener("click", function () {
            if (checkbox.classList.contains("done")) {
                checkbox.classList.remove("done");
                label.classList.remove("crossedout");
            }
            else {
                checkbox.classList.add("done");
                label.classList.add("crossedout");
            }
        });
        amount++;
        updateAmount();
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map