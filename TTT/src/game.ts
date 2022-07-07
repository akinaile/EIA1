import _, { map, transform } from "lodash";
import App from "./app";
import Box from "./box";
import Computer from "./computer";
import Score from "./score";
import { Difficulty, Mark, Position } from "./types";
import { getNext } from "./utlis";

const count: Record<Difficulty, number> = {
    easy: 3,
    medium: 4,
    hard: 5
};

export default class Game {
    public element: HTMLDivElement;
    public score: Score;
    public grid: Box[][];
    private app: App;
    private difficulty: Difficulty;
    private locked: boolean = true;

    /**
     * Inititalize Game
     * create game div and initialize grid
     * @param difficulty Game Difficulty
     */
    constructor(app: App, difficulty: Difficulty) {
        this.app = app;
        this.difficulty = difficulty;
        this.score = new Score(count[this.difficulty]);
        // create game div
        this.element = document.createElement("div");
        this.element.className = "game " + difficulty;
        // init grid
        this.grid = [];
        for (let y: number = 0; y < count[difficulty]; y++) {
            this.grid.push([]);
            for (let x: number = 0; x < count[difficulty]; x++) {
                this.grid[y].push(new Box(this, { x, y }));
            }
        }
        // add grid to game
        this.element.append(
            ..._.flatten(this.grid.map((y) => y.map((x) => x.element)))
        );
        // add to app
        app.element.append(this.element);
        app.element.append(this.score.element);
        // start game loop
        this.nextTurn();
    }

    /**
     * player click
     * @param poistion Click Position
     */
    public click(poistion: Position): void {
        if (this.locked) return;
        // set mark
        this.setMark(Mark.O, poistion);
        // check for win
        if (this.checkForWin(Mark.O)) {
            this.win(Mark.O);
        }
        // check for draw
        else if (this.checkForDraw()) {
            this.nextRound();
        }
        // next turn
        else {
            this.nextTurn();
        }
    }

    /**
     * game loop
     */
    private async nextTurn(): Promise<void> {
        this.locked = true;
        // computer make turn
        const next: Position = Computer.getNextBestMove(
            Mark.X,
            this.grid,
            count[this.difficulty]
        );
        this.setMark(Mark.X, next);
        // check for win
        if (this.checkForWin(Mark.X)) {
            this.win(Mark.X);
        }
        // check for draw
        else if (this.checkForDraw()) {
            this.nextRound();
        } else {
            this.locked = false;
        }
    }

    private setMark(mark: Mark, position: Position): void {
        this.grid[position.y][position.x].value = mark;
    }

    /**
     * checks for win
     * @returns true if win
     */
    private checkForWin(mark: Mark): boolean {
        return (
            getNext(this.grid, count[this.difficulty], (arr) =>
                arr.every((box) => box.value === mark)
            ) || false
        );
    }

    /**
     * checks for draw
     * @returns true for draw
     */
    private checkForDraw(): boolean {
        return this.grid.every((col) => col.every((box) => box.value !== null));
    }

    /**
     * mark wins round
     */
    private win(mark: Mark): void {
        if (mark === Mark.X) {
            this.score.scoreX++;
        } else {
            this.score.scoreO++;
        }
        this.nextRound();
    }
    /**
     * remove game
     */
    private remove(): void {
        this.element.remove();
        this.score.element.remove();
    }
    /**
     * private next round
     */
    private nextRound(): void {
        if (this.score.round === count[this.difficulty]) {
            this.remove();
            // end
            if (this.score.scoreX > this.score.scoreO) {
                this.app.endGame(Mark.X);
            } else if (this.score.scoreO > this.score.scoreX) {
                this.app.endGame(Mark.O);
            } else {
                this.app.endGame(null);
            }
        } else {
            // clear grid
            this.score.round++;
            this.grid.forEach((col) =>
                col.forEach((box) => {
                    box.value = null;
                })
            );
            this.nextTurn();
        }
    }
}
