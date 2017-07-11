"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array = require("lodash/array");
var GameEngine = (function () {
    function GameEngine() {
    }
    GameEngine.prototype.tick = function () {
        this.observers.forEach(function (obj, index) { return obj.update(); });
    };
    GameEngine.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    GameEngine.prototype.unregister = function (obj) {
        array.pull(this.observers, obj);
    };
    return GameEngine;
}());
exports.GameEngine = GameEngine;
//# sourceMappingURL=GameEngine.js.map