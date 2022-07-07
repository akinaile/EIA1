"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.game = null;
        this.element = document.getElementById("TTT");
        this.buttons = this.element.appendChild(document.createElement("div"));
        this.buttons.className = "buttons";
        var _loop_1 = function (difficulty) {
            var button = this_1.buttons.appendChild(document.createElement("button"));
            button.innerText = difficulty;
            button.onclick = function () { return _this.startGame(difficulty); };
        };
        var this_1 = this;
        for (var _i = 0, _a = ["easy", "medium", "hard"]; _i < _a.length; _i++) {
            var difficulty = _a[_i];
            _loop_1(difficulty);
        }
    }
    App.prototype.endGame = function (winner) {
        alert(winner);
        this.buttons.style.display = "block";
    };
    App.prototype.startGame = function (difficulty) {
        this.buttons.style.display = "none";
        this.game = new game_1.default(this, difficulty);
    };
    return App;
}());
exports.default = App;
var app = new App();
//# sourceMappingURL=TTT.js.map