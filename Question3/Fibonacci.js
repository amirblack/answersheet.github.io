// define simple variable
let i;

// define fibonacci variable with initial value 
let fibonacci = [0,1]

// for loop 
for (let i = 2; i <= 100; i++) {

  // fibonacci algorithm F(n - 1) + F(n - 2)
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]

  // print fibonacci algorithm with map!
  document.getElementById("demo").innerHTML = fibonacci.map(i => `<li>${i}</li>`).join('');
}
