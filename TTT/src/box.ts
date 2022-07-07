import Game from "./game";
import { Mark, Position } from "./types";

export default class Box {
    public element: HTMLDivElement;
    public poistion: Position;
    private game: Game;
    private _value: Mark | null = null;

    /**
     * Initialize grid box
     * @param poistion Position in grid
     */
    constructor(game: Game, poistion: Position) {
        this.game = game;
        this.poistion = poistion;
        // create grid div
        this.element = document.createElement("div");
        this.element.className = "box";
        this.element.onclick = () => this.game.click(this.poistion);
        this.value = null;
    }

    public get value(): Mark | null {
        return this._value;
    }

    public set value(mark: Mark | null) {
        this._value = mark;
        this.element.setAttribute("data-value", mark || "null");
        this.element.innerText = mark || "";
    }
}
