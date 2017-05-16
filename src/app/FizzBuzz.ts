
interface IFizzBuzz
{
    getFizzBuzz(nCount: number): string;
} 

export class FizzBuzz implements IFizzBuzz
{
    constructor()
    {

    }

    private getFizzOrBuzz(nNumber)
    {
        let ret = "";
        if((nNumber % 3) === 0)
        {
            ret += "Fizz";
        }
        if ((nNumber % 5) === 0)
        {
            ret += "Buzz";
        }
        if(ret === "")
            return nNumber;
        return ret;
    }
    
    getFizzBuzz(nCount: number): string
    {
        let outPut:string = "";

        for(let i = 1; i <= nCount; i++)
        {
            outPut += this.getFizzOrBuzz(i)+"<br />";
        }

        return outPut;
    }
}
