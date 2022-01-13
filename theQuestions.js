
let questions = [
    {
        type: "rawlist",
        name: "pet",
        message: "What kind of pet do you have?",
        choices: ["Lion", "Lynx", "Monkey", "Dog", "Cat"]
    },
    {
        type: "input",
        name: "name",
        message: "Whats your pets name?",
    },
    {
        type: "input",
        name: "age",
        message: "How old is your pet?"
    },
    {
        type: "list",
        name: "feed",
        message: "What would you like to give to your pet today?",
        choices: ["Chicken", "Meat", "Beef", "Salad", "Turkey"],
        loop: false
    }
];

let questions2 = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do with your pet?",
        choices: ["Play", "Feed", "Water", "Rest"],
    }
];

module.exports = {
    questions,
    questions2
};