import Game from "./game";
import { Difficulty, Mark } from "./types";

export default class App {
    public element: HTMLDivElement;
    private buttons: HTMLDivElement;
    private game: Game | null = null;

    constructor() {
        this.element = document.getElementById("app") as HTMLDivElement;
        this.buttons = this.element.appendChild(document.createElement("div"));
        this.buttons.className = "buttons";
        for (const difficulty of ["easy", "medium", "hard"]) {
            const button: HTMLButtonElement = this.buttons.appendChild(
                document.createElement("button")
            );
            button.innerText = difficulty;
            button.onclick = () => this.startGame(difficulty as Difficulty);
        }
    }

    public endGame(winner: Mark | null): void {
        alert(winner);
        this.buttons.style.display = "block";
    }

    private startGame(difficulty: Difficulty): void {
        this.buttons.style.display = "none";
        this.game = new Game(this, difficulty);
    }
}

const app: App = new App();