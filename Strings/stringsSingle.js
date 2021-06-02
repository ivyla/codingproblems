let testStrings = []
const testAlgorithm = (string) => {
    let result
    // --------------------------------------
    let reference = new Array(128)
    for (let i = 0; i < string.length; i++) {
        if (string.length > 128) return false
        let currentChar = string[i]
        if (reference[currentChar]) return false
        reference[currentChar] = true
    }
    return true
    // --------------------------------------
}

for (let i = 2; i < process.argv.length; i++) {
    let currentString = process.argv[i]
    console.log(`Testing: ${currentString}`)
    let result = testAlgorithm(currentString)
    console.log(`Result: ${result}`)
    // console.log(`Result: ${result} \n ----`)
    console.log(`----`)
}
