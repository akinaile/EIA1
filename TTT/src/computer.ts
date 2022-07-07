import _ from "lodash";
import Box from "./box";
import { Mark, Position } from "./types";
import { enemy, getNext } from "./utlis";

export default class Computer {
    /**
     * only random guesses
     * @param grid grid;
     * @returns
     */
    public static getNextMove(grid: Box[][]): Position {
        var empty: Box[] = _.flatten(
            grid.map((y) => y.filter((x) => x.value === null))
        );
        var index: number = _.random(0, empty.length - 1, false);
        return empty[index].poistion;
    }

    /**
     * very good computer
     * @param mark mark of computer
     * @param grid grid
     * @param max max count
     * @returns next position
     */
    public static getNextBestMove(
        mark: Mark,
        grid: Box[][],
        max: number
    ): Position {
        // check for winind move
        var next: Box | null = getNext(grid, max, (arr) => {
            const count: _.Dictionary<number> = _.countBy(arr, (i) => i.value);
            if (count[mark] === max - 1) {
                return arr.find((i) => i.value === null) || null;
            } else {
                return null;
            }
        });
        if (next) return next.poistion;

        // check if loose
        next = getNext(grid, max, (arr) => {
            const count: _.Dictionary<number> = _.countBy(arr, (i) => i.value);
            if (count[enemy(mark)] === max - 1) {
                return arr.find((i) => i.value === null) || null;
            } else {
                return null;
            }
        });
        if (next) return next.poistion;

        return Computer.getNextMove(grid);
    }
}