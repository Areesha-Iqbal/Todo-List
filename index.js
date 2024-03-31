#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("\n\tWelcome to 'Areesha Iqbal' - Todo List Application\n"));
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.yellow.italic("What do you want to add in your Todo?"),
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.blueBright.italic("Do you want to add more Todo?"),
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
