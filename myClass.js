"use strict";
exports.__esModule = true;
var myClass = /** @class */ (function () {
    function myClass() {
        this.tasks = [];
    }
    myClass.prototype.addTask = function (task) {
        var count = this.tasks.push(task);
        console.log("Item '" + task + "' inserted to the array");
        return count;
    }; //end of addTask 
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        } //end of for
        /*
        tasks.forEach(function(task)){
            console.log(task);
        }
        */
    }; //end of listAllTasks 
    myClass.prototype.deleteTask = function (task) {
        var indexOfTask = this.tasks.indexOf("task");
        if (indexOfTask > -1) {
            this.tasks.splice(indexOfTask, 1);
            console.log("Item '" + task + "' removed from the array");
        } //end of if 
        return this.tasks.length;
    }; //end of deleteTask 
    return myClass;
}());
