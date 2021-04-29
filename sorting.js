// import testCases from "./testCases"
const testCases = require("./testCases")

// List of arugments for reference
const algorithms = [{insertion: 1}]
if (process.argv.length < 3) {
    console.log(
        "Please specify the index of the algorithm you want to run like so: node sorting.js <number>"
    )
    console.log("Table of Contents: ")
    algorithms.forEach((item) => console.log(item))
}

let test = testCases
const insertion = (input) => {
    console.log(input)
}
// Switch statement that checks for the arg and returns the corresponding items with the input
switch (parseInt(process.argv[2])) {
    case 1:
        insertion(test)
}
