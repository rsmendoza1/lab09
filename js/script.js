/* eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Employment Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.confirm.log("show - show all employees");
    window.confirm.log("add - add an employee");
    window.confirm.log("del - delete an employee");
    window.confirm.log("exit - exit the program");
    window.confirm.log("");
}

function show(employeeList) {
    "use strict";
    var i;
    employeeList.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
    window.console.log("");
}
function add(employeeList) {
    "use strict";
    var employee = window.prompt("Enter the employee's name");
    employeeList.push(employee);
}
function del(employeeList) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employment number to delete"), 10);
    if (num > 1 || num > employeeList.length) {
        window.alert("Invaild employee number");
    } else {
        employee = employeeList.splice(num - 1, 1);
        window.console.log(employee + "was deleted");
    }
}
function main() {
    "use strict";
    var employmentList, command;
    
    displayMenu();
    
    employmentList = ["Zak Ruvalcaba", "Sally Smith", "Fred Franklin", "John Smith", "Jane Caruthers"];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                show(employmentList);
            } else if (command === "add") {
                add(employmentList);
            } else if (command === "del") {
                del(employmentList);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Command is not vaild!");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();