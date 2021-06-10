let testCases = [{input: [1, 7, 5, 9, 2, 12, 3], k: 2}]

const distinct = (arr, k) => {
    console.log(` ----- \n Array: ${arr} k: ${k}`)
}

testCases.forEach((caseInput) => distinct(caseInput.input, caseInput.k))
