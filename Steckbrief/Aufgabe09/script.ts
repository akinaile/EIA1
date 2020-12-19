namespace Aufgabe09 {

    const inputField: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);
    const addBtn: HTMLElement = document.getElementById("addButton");
    let amount: number = 0;

    document.getElementById("deleteAllToDo").addEventListener("click", function (): void {
        deleteAllTasks();
    });

    inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            addTask();
            inputField.value = ""; //Value leeren
        }
    });

    addBtn.addEventListener("click", function (): void {
        addTask();
        inputField.value = ""; //Value leeren
    });

    function removeTask(container: HTMLDivElement): void {
        container.remove();

        amount--;
        updateAmount();
    }

    function updateAmount(): void {
        document.getElementById("counter").innerText = amount + " ToDo's";
    }

    function deleteAllTasks(): void {
        const list: HTMLElement = document.getElementById("toDoList"); //
        list.innerHTML =  "";
        amount = 0;
        updateAmount();
    }

    function addTask(): void { //Task hinzufügen

        let container: HTMLDivElement = document.createElement("div");
        container.className = "container";

        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";

        let label: HTMLLabelElement = document.createElement("label"); //Label ist der Text zur Checkbox => Eingabe soll als Label ausgegeben werden
        label.innerHTML = inputField.value; //Per InnerHTMl Value an Label übergeben
        label.className = "taskText";

        let trash: HTMLElement = document.createElement("i");
        trash.className = "fas fa-trash-alt";

        document.getElementById("toDoList").appendChild(container);
        container.appendChild(checkbox); //Elemente an div übergeben
        container.appendChild(label);
        container.appendChild(trash);

        trash.addEventListener("click", function (): void {
            removeTask(container);
        });

        checkbox.addEventListener("click", function (): void {
            if (checkbox.classList.contains("done")) {
                checkbox.classList.remove("done");
                label.classList.remove("crossedout");
            } else {
                checkbox.classList.add("done");
                label.classList.add("crossedout");
            }
        });

        amount++;
        updateAmount();
    }
}