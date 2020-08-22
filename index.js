let brain = require("brain.js");

let neuralNetwork = new brain.NeuralNetwork();

let trainingData = [{
        input: {
            tea: 1,
            bread: 1,
            milk: 0,
            chapati: 0,
            veggies: 0,
            curd: 0,
            rice: 0
        },
        output: { 'morning': 1 }
    },
    {
        input: {
            tea: 0,
            bread: 0,
            milk: 0,
            chapati: 1,
            veggies: 1,
            curd: 1,
            rice: 1
        },
        output: { 'afternoon': 1 }
    },
    {
        input: {
            tea: 0,
            bread: 0,
            milk: 1,
            chapati: 1,
            veggies: 1,
            curd: 0,
            rice: 0
        },
        output: { 'night': 1 }
    },
    {
        input: {
            tea: 1,
            bread: 1,
            milk: 0,
            chapati: 0,
            veggies: 0,
            curd: 0,
            rice: 0
        },
        output: { 'evening': 1 }
    }
];

neuralNetwork.train(trainingData);

let prediction = neuralNetwork.run([{
    tea: 1,
    bread: 1,
    milk: 1,
    chapati: 0,
    veggies: 0,
    curd: 0,
    rice: 0
}]);

console.log(prediction)