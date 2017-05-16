"use strict";
exports.__esModule = true;
var greeter_1 = require("./app/greeter");
var greeter = new greeter_1.Greeter("world");
document.body.innerHTML = greeter.getGreeting();
