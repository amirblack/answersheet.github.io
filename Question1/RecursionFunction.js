    //input list
const ArrayValues = [30, 50, 22, 53];
    //defines variables
let [WhileResualt, ForResualt, whileval , RecursionResualt] = [0, 0, 0 , 0]

    // Recursion Function with(parameter)
const sumFunction = (num) => {

    //get length of parameter
    let len = num.length

    //for loop
    for (let i = 0; i < len; i++) {
    
    //reduce parameter data with +=  to ForResualt variable
        ForResualt += ArrayValues[i];

    }

    // while loop
    while (whileval < len) {

    //reduce parameter data with +=  to WhileResualt variable
        WhileResualt += ArrayValues[whileval], whileval++;
    }

    // Recursion function
    if (len < 1) {
        sumFunction(num)
    } else {
        return num
    }
}
    //reduce data with sumFunction and add to RecursionResualt variable 
RecursionResualt = sumFunction(ArrayValues).reduce((a, b) => a + b)

    //print data in div with "answer" id 
document.getElementById('answer').innerHTML = `List : ${ArrayValues} <br /> while loop => ${WhileResualt} <br /> for loop => ${ForResualt} <br />  Recursion : ${RecursionResualt}`