let tasks: Array <string> = [];

function addTask(task:string): number {

    let count: number = tasks.push(task);
    console.log("Item " + task + " inserted to the array");
    return count;

}//end of addTask 

function listAllTasks():void {

    for (let item of tasks){
        console.log(item);
    }//end of for

    /*
    tasks.forEach(function(task)){
        console.log(task);
    }
    */

}//end of listAllTasks 

function deleteTask(task: string): number{

    let indexOfTask: number = tasks.indexOf("task");

    if (indexOfTask > -1) {
    tasks.splice(indexOfTask,1);
    } //end of if 

    return tasks.length;

}//end of deleteTask 

let x: number = addTask("Test");
console.log(x);

listAllTasks();