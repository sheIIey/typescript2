var tasks = [];
function addTask(task) {
    var count = tasks.push(task);
    console.log("Item " + task + " inserted to the array");
    return count;
} //end of addTask 
var x = addTask("Test");
console.log(x);
function listAllTasks() {
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var item = tasks_1[_i];
        console.log(item);
    } //end of for
    /*
    tasks.forEach(function(task)){
        console.log(task);
    }
    */
} //end of listAllTasks 
listAllTasks();
function deleteTask(task) {
    var indexOfTask = tasks.indexOf("task");
    if (indexOfTask > -1) {
        tasks.splice(indexOfTask, 1);
    } //end of if 
    return tasks.length;
} //end of deleteTask 
