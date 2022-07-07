export default class Score {
    public element: HTMLDivElement;
    private max: number;
    private _round: number = 0;
    private _scoreX: number = 0;
    private _scoreO: number = 0;
    private roundElement: HTMLElement;
    private scoreXElement: HTMLElement;
    private scoreOElement: HTMLElement;

    constructor(max: number) {
        this.max = max;
        this.element = document.createElement("div");
        this.element.className = "score";
        this.roundElement = this.element.appendChild(
            document.createElement("div")
        );
        this.round = 1;
        this.roundElement.className = "round";
        this.scoreXElement = this.element.appendChild(
            document.createElement("div")
        );
        this.scoreX = 0;
        this.scoreXElement.className = "score-item";
        this.scoreOElement = this.element.appendChild(
            document.createElement("div")
        );
        this.scoreOElement.className = "score-item";
        this.scoreO = 0;
    }

    public get round(): number {
        return this._round;
    }
    public get scoreX(): number {
        return this._scoreX;
    }
    public get scoreO(): number {
        return this._scoreO;
    }

    public set round(val: number) {
        this._round = val;
        this.roundElement.innerText = `Round: ${val}/${this.max}`;
    }
    public set scoreX(val: number) {
        this._scoreX = val;
        this.scoreXElement.innerText = "X: " + val;
    }
    public set scoreO(val: number) {
        this._scoreO = val;
        this.scoreOElement.innerText = "O: " + val;
    }
}
