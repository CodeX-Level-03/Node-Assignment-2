"use strict";

import inquirer from "inquirer";

const Questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your name?",
  },

  {
    type: "input",
    name: "languages",
    message: "What is your favorite programming language?",
    choices: ["Python", "JavaScript", "Java", "Ruby", "C++", "Other"],
  },
  {
    type: "input",
    name: "preferredEditor",
    message: "Which editor do you prefer as a development tool?",
    choices: ["VS Code", "Sublime Text", "Vim", "Atom", "Other"],
  },
  {
    type: "input",
    name: "Opinion",
    message: "What is one feature you wish your editor had?",
  },
];

inquirer.prompt(Questions).then((answers) => {
    console.log(
        `Hello, ${answers.userName}! Your favorite programming language is ${answers.languages}. You prefer ${answers.preferredEditor} as a development tool. You wish your editor had ${answers.Opinion}.`
    );
    });