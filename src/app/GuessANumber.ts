
interface IGuessANumber
{
    compareNumber(iNumber:number) : number;
    getNumberOfTries() : number;
    getNumber():number;
} 

export class GuessANumber implements IGuessANumber
{
    private numberOfTries: number = 0;
    private randomNumber: number;

    constructor()
    {
        this.randomNumber = Math.round(Math.random() * 100);   
    }

    compareNumber(userNumber: number): number
    {
        this.numberOfTries++;
        if (this.randomNumber === userNumber)
        {
            return 0;
        }
        else if (this.randomNumber < userNumber)
        {
            return 1;
        }
        else if (this.randomNumber > userNumber)
        {
            return -1;
        }
    }

    getNumber():number
    {
        return this.randomNumber;
    }

    getNumberOfTries():number
    {
        return this.numberOfTries;
    }
}
