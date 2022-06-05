// defines variables with initial data
let inputArray = [40, 10, 70, 80]

// create function fpr reverse sortings
const reverseInsertionSort = (num) => {

  // define const equal parameter length
  const len = num.length
  // define loop for Reverse InsertionSort algorithm
  for (let i = len - 2; i >= 0; i--) {
  //  
    let value = num[i];
    let secondValue;
  // InsertionSort algorithm
    for (secondValue = i;((secondValue < len) && (num[secondValue + 1] > value)); secondValue++) {

      num[secondValue] = num[secondValue + 1]

    }
    num[secondValue] = value
  }
  // return data
  return num

}

  // print data in div with "demo" id
document.getElementById('demo').innerHTML = reverseInsertionSort(inputArray).join("")