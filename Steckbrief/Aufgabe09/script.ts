namespace Aufgabe09 {

//eventlistener
    const inputField: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);
    const addBtn: HTMLElement = document.getElementById("addButton");
    let amount: number = 0;

//deleteall to do
    document.getElementById("deleteAllToDo").addEventListener("click", function (): void {
        deleteAllTasks();
    });

//keypress event
    inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            addTask();
            inputField.value = ""; 
        }
    });

//click event
    addBtn.addEventListener("click", function (): void {
        addTask();
        inputField.value = ""; 
    });

//Funktionen
//Remove Task
    function removeTask(container: HTMLDivElement): void {
        container.remove();

        amount--;
        updateAmount();
    }

//Counter
    function updateAmount(): void {
        document.getElementById("counter").innerText = amount + " ToDo's";
    }

//delete all Tasks
    function deleteAllTasks(): void {
        const list: HTMLElement = document.getElementById("toDoList"); 
        list.innerHTML =  "";
        amount = 0;
        updateAmount();
    }

//addTask Funkion
    function addTask(): void {  
        
        //Elemente erstellen
        let container: HTMLDivElement = document.createElement("div");
        container.className = "container"; //container der bei neuen todos kommt

        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkBox"; //checkbox für todos

        let label: HTMLLabelElement = document.createElement("label");
        label.innerHTML = inputField.value; 
        label.className = "taskText"; //label

        let trash: HTMLElement = document.createElement("i");
        trash.className = "fas fa-trash"; //trash icon
//container
        document.getElementById("toDoList").appendChild(container);
        container.appendChild(checkbox); 
        container.appendChild(label);
        container.appendChild(trash);
//trash
        trash.addEventListener("click", function (): void {
            removeTask(container); //container wird entfernt
        });
//checkbox
        checkbox.addEventListener("click", function (): void {
            if (checkbox.classList.contains("done")) {
                checkbox.classList.remove("done");
                label.classList.remove("crossedout"); //nicht durchgestrichen
            } else {
                checkbox.classList.add("done");
                label.classList.add("crossedout"); //durchstreichen
            }
        });

        amount++;
        updateAmount();
    }
}