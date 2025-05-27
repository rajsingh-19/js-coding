//      --Basics Mathematics--

//      extraction of digits from number
function extractNum (num) {
    let output = "";
    while(num !== 0) {
        let lastdigit = num%10;
        console.log(lastdigit);
        output += lastdigit;
        num = (num-lastdigit)/10;
    }
    console.log(output);
}
// extractNum(5854);

//  Que: Problem Statement: Given an integer N, write a program to count the number of digits in N.

function countingDigit (inp) {
    let string ="";
    string += String(inp);
    let output = string.length;
    console.log(output);
}
// countingDigit(34524);

function countDigits (num) {
    let count = 0;
    while(num !== 0) {
        let lastdigit = num % 10;
        num = (num - lastdigit)/10;
        count++;
    }
    console.log(count);
}
// countDigits(28475);

//  checkpalindrome -- such as 121 == 121 after reversing number
function checkpalindrome (num) {
    let output = "";
    let n = num;
    while(n != 0) {
        let l = n%10;
        output += l;
        n = (n-l)/10;
    }
    // return output;
    if(num == output) {
        return `palindrome ${output}`;
    } else {
        return `not palindrome ${output}`;
    }
}
// console.log(checkpalindrome(12321));

// armstrong number : 153 = 1^3 + 5^3+ 3^3 = 153
function armstrong(num) {
    let count = 0;
    let n = num;
    while (n !== 0) {
        let l = n %10;
        let sql = l**3;
        count += sql;
        n = (n-l)/10;
    }
    // return count;
    if(num === count) {
        return `It is armstrong ${num} -- ${count}`;
    } else {
        return `It is not an armstrong ${num} -- ${count}`;
    }
}
// console.log(armstrong(153));

// Count all Digits of a Number
function countAllDigits(num) {
    if(num === 0) {
        return 1;
    };

    if(num < 0) {
        num = -num; 
    };

    let count = 0;
   
    while (num > 0) {
        lastDigit = num % 10;
        count++;
        num = (num - lastDigit) / 10;
    }
    return count;
    
};

// console.log("count : ", countAllDigits(-415));

// Reverse a number : 58  -- 85
function reverseDigits (num) {
    if(num <= 0 ) {
        return 0;
    };
    //          remember - negative interger are not reversible

    let output = "";

    while(num > 0) {
        let lastDigit = num % 10;
        output += lastDigit;

        num = (num - lastDigit)/ 10;
    };
    return output;
};

// console.log(reverseDigits(159));

//      palindrome number  - 121 = 121
function palindromeNum(num) {
    let isNegative = num < 0;

    if(isNegative) {
        return false;
    };

    let originalNum = num;
    let reverseNum = "";

    while(num > 0) {
        let lastDigit = num % 10;
        reverseNum += lastDigit;
        
        num = (num - lastDigit) / 10;
    };

    reverseNum = Number(reverseNum);

    if(originalNum === reverseNum) {
        return true;
    } else {
        return false;
    }

};
// console.log(palindromeNum(158));

//      greater common divisor 
function gcd(n1, n2) {
    let min;
    // first find the minimun of these two numbers
    if(n1 < n2) {
        min =  n1;
    } else {
        min = n2;
    };

    // let gcd be 1
    let gcd = 1;

    for(let i = 0; i < min; i++) {
        if(n1 % i === 0 && n2 % i === 0) {
            gcd = i;
        };
    };
    return gcd;
};
// console.log(`gcd of this 2 num is : `,gcd(8, 12));


// Check if a number is Armstrong Number or not - An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
function armStrongNum (num) {
    if(num === 1) {
        return true;
    };

    if(num < 0) {
        return false;
    };

    let originalNum = num;
    let isNumArmStrong = 0;

    let numPower = String(num).length;


    while(num > 0) {
        let lastDigit = num % 10;
        let sqDigit = lastDigit ** numPower;
        isNumArmStrong += sqDigit;

        num = (num - lastDigit) / 10;
    };

    if(isNumArmStrong === originalNum) {
        return true;
    } else {
        return false;
    };
};

// console.log(armStrongNum(153));


// Divisors of a Number -- A number which completely divides another number is called it's divisor.

function divisorsOfNum (num) {
    if(num === 1) {
        return 1;
    };

    let diviorsArray = [];

    for(let i = 0; i <= num; i++) {
        if(num % i === 0) {
            diviorsArray.push(i);
        };
    };
    return diviorsArray;
};

// console.log(divisorsOfNum(15));

// Check if a number is prime or not :  a number that is only divisible by 1 and itself and the total number of divisors is 2. --- 1, 3, 5, 7....

function checkPrime (num) {
    if(num <= 1 ) {
        return false;
    };

    let counter = 0;
    for(let i = 0; i <= num; i++) {
        if(num % i === 0) {
            counter++;
        };
    }

    if(counter === 2) {
        return true;
    } else {
        return false;
    };
};

// console.log(checkPrime(43));