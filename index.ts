#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(
chalk.blueBright.italic("\n**********Welcome to 'Areesha Iqbal' - Todo List Application**********\n")
);

let todos: string[] = [];
let condition = true;

while (condition) {
  let ans = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: chalk.gray.bold("Select an operation"),
      choices:["Add", "Update", "View", "Delete", "Exit"],
    },
  ]);
  if (ans.select === "Add") {
    let addTodo = await inquirer.prompt([
      {
        name: "todo",
        type: "input",
        message: chalk.magenta.italic("Add items in the list"),
        validate: function (input) {
          if (input.trim() == "") {
            return chalk.red("Please write something here.\n(Use the arrow buttons)");
          }
          return true;
        },
      },
    ]);
    if (addTodo.todo.trim() !== "") {
      todos.push(addTodo.todo);
      todos.forEach((todo) => console.log(todo));
    }
  }

  if (ans.select === "Update") {
    let updateTodo = await inquirer.prompt([
      {
        name: "todo",
        type: "list",
        message: chalk.magenta.italic("Update item in the item"),
        choices: todos.map((item) => item),
      },
    ]);
    let addTodo = await inquirer.prompt([
      {
        name: "todo",
        type: "input",
        message: chalk.gray.bold("Add items in the list"),
      },
    ]);
    let nweTodo = todos.filter((val) => val !== updateTodo.todo);
    todos = [...nweTodo, addTodo.todo];
    todos.forEach((todo) => console.log(todo));
  }
  if (ans.select === "View") {
    console.log(chalk.blueBright.italic("|||****** TO-DO LIST ******|||"));
    todos.forEach((todo) => console.log(todo));
  }
  if (ans.select === "Delete") {
    let deleteTodo = await inquirer.prompt([
      {
        name: "todo",
        type: "list",
        message: chalk.gray.bold("Select item to delete"),
        choices: todos.map((item) => item),
      },
    ]);
    let nweTodo = todos.filter((val) => val !== deleteTodo.todo);
    todos = [...nweTodo];
    todos.forEach((todo) => console.log(todo));
  }
  if (ans.select === "Exit") {
    console.log(chalk.red.bold("Exiting program"));
    condition = false;
  }
}

