"use strict";

function todoController() {
    const vm = this;
    vm.items = [

        {
            task: "Call Mom.",
            completed: true
        },
        {
            task: "Respond to Emails.",
            completed: false
        },
        {
            task: "Get groceries.",
            completed: false
        },
        {
            task: "do laundry.",
            completed: false
        }   
    
    ];

    vm.addTask = (task, completed) => {
        console.log("add button is working");
        vm.items.push({
          task: task,
          completed: false
        });

      }; 

    vm.removeTask = (index, thing) => {
        console.log("remove task is working");
        vm.items.splice(index, 1);  
    } 

    vm.completeTask = (index) => {
        vm.items[index].completed = true;
    }



}



angular
 .module("todoApp")
 .controller("todoController", todoController)