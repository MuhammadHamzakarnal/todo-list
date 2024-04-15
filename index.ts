#!/usr/bin/env node
import inquirer from "inquirer"
let todos = [];
let condition = true;

while(condition){
let todosQus = await inquirer.prompt([
  {
    name: "firstQuestion",
    type: "input",
    message: "what would like to add in you todos?",
  },
  {
    name:"secondQuestion",
    type:"confirm", 
    message:"would you like to add more in your todos?",
    default:"true"
  }
]);
todos.push(todosQus.firstQuestion);
console.log(todos);
//The loop is running on the based of this variable condition
condition = todosQus.secondQuestion;
}    

//home work read , update, delete, add
