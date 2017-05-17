export class TodoController 
{
    private tasks:task[] = [];

    static $inject = []; 

    constructor() 
    { 


    } 

    addTask(taskname:String)
    {
        this.tasks.push(new task(taskname, false));
    }

    deleteTask(taskToDelete:task)
    {
        this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);
    }

    /* Toggle edit mode*/
    editTask(taskToEdit:task)
    {
        taskToEdit.inEditMode = !taskToEdit.inEditMode;
    }
}  

class task {
    public inEditMode:boolean = false;
    constructor (public name, public done)
    {

    }
}
