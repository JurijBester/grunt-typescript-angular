(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var GuessANumber_1 = require("./app/GuessANumber");
var FizzBuzz_1 = require("./app/FizzBuzz");
function fizzBuzz() {
    var cFizzBuzz = new FizzBuzz_1.FizzBuzz();
    var nUserInput = Number(prompt("Enter a number:"));
    document.body.innerHTML = cFizzBuzz.getFizzBuzz(nUserInput);
}
function guessANumber() {
    var cg = new GuessANumber_1.GuessANumber();
    var bFound = false;
    var nUserInput = Number(prompt("Guess a number from 1 to 100:"));
    while (!bFound) {
        var compareResult = cg.compareNumber(nUserInput);
        switch (compareResult) {
            case 0: {
                alert("Number found: " + cg.getNumber() + "\n Number of tries:" + cg.getNumberOfTries());
                bFound = true;
                break;
            }
            case -1: {
                nUserInput = Number(prompt("Number is bigger\n\nGuess again:"));
                break;
            }
            case 1: {
                nUserInput = Number(prompt("Number is smaller\n\nGuess again:"));
                break;
            }
        }
    }
}
var eAssignement;
(function (eAssignement) {
    eAssignement[eAssignement["fizzBuzz"] = 1] = "fizzBuzz";
    eAssignement[eAssignement["guessANumber"] = 2] = "guessANumber";
})(eAssignement || (eAssignement = {}));
do {
    var nAssignement = Number(prompt("Select assignement: \n " +
        "\t 1.) FizzBuzz \n" +
        "\t 2.) Guess a number"));
    switch (nAssignement) {
        case eAssignement.fizzBuzz:
            fizzBuzz();
            break;
        case eAssignement.guessANumber:
            guessANumber();
            break;
    }
} while (confirm('Do you want to try again?'));
document.body.innerHTML += "<h1>Thank you, come again!</h1> Apu Nahasapeemapetilon ©";

},{"./app/FizzBuzz":2,"./app/GuessANumber":3}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var FizzBuzz = (function () {
    function FizzBuzz() {
    }
    FizzBuzz.prototype.getFizzOrBuzz = function (nNumber) {
        var ret = "";
        if ((nNumber % 3) === 0) {
            ret += "Fizz";
        }
        if ((nNumber % 5) === 0) {
            ret += "Buzz";
        }
        if (ret === "")
            return nNumber;
        return ret;
    };
    FizzBuzz.prototype.getFizzBuzz = function (nCount) {
        var outPut = "";
        for (var i = 1; i <= nCount; i++) {
            outPut += this.getFizzOrBuzz(i) + "<br />";
        }
        return outPut;
    };
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var GuessANumber = (function () {
    function GuessANumber() {
        this.numberOfTries = 0;
        this.randomNumber = Math.round(Math.random() * 100);
    }
    GuessANumber.prototype.compareNumber = function (userNumber) {
        this.numberOfTries++;
        if (this.randomNumber === userNumber) {
            return 0;
        }
        else if (this.randomNumber < userNumber) {
            return 1;
        }
        else if (this.randomNumber > userNumber) {
            return -1;
        }
    };
    GuessANumber.prototype.getNumber = function () {
        return this.randomNumber;
    };
    GuessANumber.prototype.getNumberOfTries = function () {
        return this.numberOfTries;
    };
    return GuessANumber;
}());
exports.GuessANumber = GuessANumber;

},{}]},{},[1]);
