"use strict";
exports.__esModule = true;
var Greeter = (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.getGreeting = function () {
        return "Hello " + this.name + "!";
    };
    return Greeter;
}());
exports.Greeter = Greeter;
