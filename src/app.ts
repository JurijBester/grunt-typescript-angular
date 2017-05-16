import {GuessANumber} from "./app/GuessANumber";
import {FizzBuzz} from "./app/FizzBuzz";

function fizzBuzz ()
{
    let cFizzBuzz = new FizzBuzz();
    let nUserInput:number = Number(prompt("Enter a number:"));
    document.body.innerHTML = cFizzBuzz.getFizzBuzz(nUserInput);
}

function guessANumber()
{
    let cg = new GuessANumber();
    let bFound:boolean = false;

    let nUserInput:number = Number(prompt("Guess a number from 1 to 100:"));
    while (!bFound)
    {   
        let compareResult = cg.compareNumber(nUserInput);

        switch(compareResult) {
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

enum eAssignement 
{
    fizzBuzz = 1,
    guessANumber = 2,
}

do  {
    let nAssignement = Number(prompt(
        "Select assignement: \n " +
                    "\t 1.) FizzBuzz \n" +
                    "\t 2.) Guess a number"));

    switch(nAssignement) {
        case eAssignement.fizzBuzz: 
            fizzBuzz();
            break;
        case eAssignement.guessANumber:
            guessANumber();
            break;
    }
} while (confirm('Do you want to try again?'));


document.body.innerHTML += "<h1>Thank you, come again!</h1> Apu Nahasapeemapetilon ©";