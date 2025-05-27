//      ----Time Complexity----
function sum (n) {
    let sum = 0; // 1 times
    for(let i =1; i <= n; i++) {
        sum += i; // n times
    }
    return sum; // 1 times
}
// console.log(sum(5)); 
// time complexity: O(n) - Linear

function summation (n) {
    return (n * (n+1))/2;   // 1 time only
}
// console.log(summation(5)); 
// time complexity: O(n) - Constant

//  for nested loop of 2 level depth -> 
//  it gives : 3n^2 + 5n +1 => n2 (bcz compare to n2 5*n and constant is very tiny amount)
//  time complexity: O(n^2) - Quadratic

// for nested loop of 3 
//  time complexity: O(n^3) - cubic

// input size reduces by half every iteration
//  time complexity: O(logn) - Logarithmic


//  -----Space Complexity----

//  Fibonacci Sequence

