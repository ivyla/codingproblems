let testStrings = []
const testAlgorithm = (string) => {
    let result
    console.log(`Before: ${string}`)
    // console.log(")
    result = "hi"
    console.log(`Result: ${result} \n ----`)
}

for (let i = 2; i < process.argv.length; i++) {
    // testStrings.push(process.argv[i])
    testAlgorithm(process.argv[i])
}
