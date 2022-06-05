// defines 2 Arrays
const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

// slice Function
function sliceFunction(num, chunkSize) {
    // const res equals to empty array
    const output = [];
    // for loop with
    for (let i = 0; i < num.length; i += chunkSize) {
    
        // slice first value of "firstArray" and third value of "firstArray"
        const chunk = num.slice(i, i  + 1);

        // slice first value of "secondArray" and third value of "secondArray"
        const chunk2 = secondArray.slice(i , i + 1);

        // slice second value of "firstArray" and fourth value of "firstArray"
        const chunk3 = num.slice(i + 1 , i + 2)

        // slice second value of "secondArray" and fourth value of "secondArray"
        const chunk4 = secondArray.slice(i + 1 , i + 2)

        // add chunks to empty array
        output.push(chunk, chunk2,chunk3 ,chunk4);
    }
        // return array
    return output;
}

    // add data to  Resualt
const Resualt = sliceFunction(firstArray, 2)

    // print Resualt
document.getElementById('demo').innerHTML = Resualt.map(item => `${item}`).join(" , ")

