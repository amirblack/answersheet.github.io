// define variable with empty array
let len = []

// define simple variable
let lastNumber;

// define Resualt
let Result = 100

// iterativeFactorial algorithm
const iterativeFactorial = (num)=> {

    // while loop generate 4 Numbers
    while (len.length < num) {
        let r = Math.floor(Math.random() * 21)
        if (len.indexOf(r) === -1) len.push(r);
    }

    // last Number equals sum of 4 number - 100
    lastNumber = Result - len.reduce((a, b) => a + b, 0)

    // return data
    return num & lastNumber
}

    //call function with parameter
iterativeFactorial(4)

    //print data in div with "demo" id
document.getElementById('demo').innerHTML = len.map(item => `${item} + `).join("") + `${lastNumber} = ${Result}`
