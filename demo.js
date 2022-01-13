let inquirer = require("inquirer");
let { questions, questions2 } = require("./theQuestions");
const {feeder, water, rest, play} = require("./index");


const starter = async () => {
  let answers = await inquirer.prompt(questions)
  console.log(answers)
  whatToDo();
};

const whatToDo = async () => {
  let answers = await inquirer.prompt(questions2)
  console.log(answers)

  if (answers.choices == "Feed") {
    console.log(feeder)
    feeder++;
  } else if (answers.choices === "Water") {
    console.log(water);
    water++;
  } else if (answers.choices === "Rest") {
    console.log(rest);
    rest++;
  } else if (answers.choices === "Play") {
    console.log(play);
    play++;
  }

  whatToDo();
};

starter();