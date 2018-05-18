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

}



angular
 .module("todoApp")
 .controller("todoController", todoController)