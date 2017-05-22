enum severity
{
    QUESTION = 1, 
    MINNOR = 2,
    CRITICAL = 3
}

export class SupportTicketController 
{
    private problemType = [
        {key: severity.QUESTION, name:'Question'}, 
        {key: severity.MINNOR, name: 'Minnor'}, 
        {key: severity.CRITICAL, name: 'Critical'}];

    private ticket: ticketModel = new ticketModel();

    static $inject = []; 

    constructor() 
    { 

    } 

    onSubmit(ticket: ticketModel)
    {

    }
}  

class ticketModel
{
    private personNameS:string;
    private emailS:string;
    private dateD:string;
    private severityE:severity;
    private descriptionS: string;
    private productVersion: number;
    private agreeB: boolean;    

    constructor() 
    { 
        this.dateD = Date();
        this.severityE = severity.QUESTION;
    } 
}