import Box from "./box";
import { Mark } from "./types";

export function enemy(mark: Mark): Mark {
    return mark === Mark.O ? Mark.X : Mark.O;
}

export function getNext<T>(
    grid: Box[][],
    max: number,
    func: (arr: Box[]) => T | null
): T | null {
    let next: T | null;
    // coloumns
    for (let y: number = 0; y < max; y++) {
        next = func(grid[y]);
        if (next) return next;
    }
    // rows
    for (let x: number = 0; x < max; x++) {
        next = func(grid.map((col) => col[x]));
        if (next) return next;
    }
    // diagonals
    next = func(grid.map((col, i) => col[i]));
    if (next) return next;
    return func(grid.map((col, i) => col[max - 1 - i]));
}
