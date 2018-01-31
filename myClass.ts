import {myQueue} from "./interface";

class myClass {

    tasks:Array<string> = [];

    addTask(task:string): number {

        let count: number = this.tasks.push(task);
        console.log("Item '" + task + "' inserted to the array");
        return count;
    
    }//end of addTask 
    
    listAllTasks():void {
    
        for (let item of this.tasks){
            console.log(item);
        }//end of for
    
        /*
        tasks.forEach(function(task)){
            console.log(task);
        }
        */
    
    }//end of listAllTasks 
    
    deleteTask(task: string): number{
    
        let indexOfTask: number = this.tasks.indexOf("task");
    
        if (indexOfTask > -1) {
        this.tasks.splice(indexOfTask,1);
        console.log("Item '" + task + "' removed from the array");
        } //end of if 
    
        return this.tasks.length;
    
    }//end of deleteTask 
}

