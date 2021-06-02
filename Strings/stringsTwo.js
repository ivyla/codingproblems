let testStrings = []

// Runtime: ---
// Space: ---
const permutation = (a, b) => {
    let result
    if (a.length != b.length) return false
    let charCountA = new Array(128).fill(0)
    let charCountB = new Array(128).fill(0)
    for (let i = 0; i < a.length; i++) {
        // add count for a
        let currentCharA = a.charCodeAt(i)
        let currentCharB = b.charCodeAt(i)
        // console.log(charCountA[currentCharA])
        charCountA[currentCharA] = charCountA[currentCharA] + 1
        // // add count for b
        charCountB[currentCharB] = charCountB[currentCharB] + 1
    }
    for (let j = 0; j < 128; j++) {
        if (charCountB[j] !== charCountA[j]) return false
    }
    return true
}

const test = () => {
    let stringA = process.argv[2]
    let stringB = process.argv[3]
    console.log(`Testing: ${stringA} and ${stringB}`)
    // let result = unique(currentString)
    let result = permutation(stringA, stringB)

    console.log(`Result: ${result}`)
    // console.log(`Result: ${result} \n ----`)
    console.log(`----`)
}

test()
