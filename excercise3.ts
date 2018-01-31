export interface myQueue {

    myArray:Array<string>;

    addTask(task:string): number;
    listAllTasks():void;
    deleteTask(task: string): number;
}

function addTask(task:string){

    let count: number = this.myArray.push(task);
    console.log("Item '" + task + "' inserted to the array");
    return count;

}

function listAllTasks():void {

    for (let item of this.myArray){
        console.log(item);
    }


}

function deleteTask(task: string): number{

    let indexOfTask: number = this.myArray.indexOf("task");

    if (indexOfTask > -1) {
    this.myArray.splice(indexOfTask,1);
    console.log("Item '" + task + "' removed from the array");
    } //end of if 

    return this.myArray.length;

}