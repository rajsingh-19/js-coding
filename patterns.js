//      ##---patterns---### -(Nested loops)
//  -4 rules for patterns-
/*
 (1) outer for loop, count the no of rows
 (2) inner for loop, count the no of columns and connect somehow to the rows
 (3) print then "*" inside the inner loop
 (4) observe symmetry (optional)
*/
//  1
function printP1(num) {
    if(num <= 0) {
        console.log("Invalid Input!");
    } else {
        for(let i=0; i<num; i++) {
            let string = "";
            for(let j=0; j<num; j++) {
                string += "* ";
            }
            console.log(string);
        }
    }
}
//  2
function printP2 (num) {
    if (num <= 0) {
        console.log("Invalid Input!");
    } else {
        let string = "";
        for(let i =0; i<num; i++) {
            string += "*";
            console.log(string);
        }
    }
}
//  3
function printP3 (num) {
    if(num <= 0) {
        console.log("Invalid Input!");
    } else {
        for(let i=1; i<=num; i++) {
            let string = "";
            for(let j=1; j<=i; j++) {
                string += `${j} `;
            }
            console.log(string);
        }
    }
}
//  4
function printP4 (num) {
    for(let i=1; i<=num; i++) {
        let output = "";
        for(let j=1; j<=i; j++) {
            output += i;
        }
        console.log(output);
    }
}
//  5
function printP5 (num) {
    for(let i=num; i>0 ; i--) {
        let sym = "";
        for(let j=i; j>0; j--) {
            sym += "*";
        }
        console.log(sym);
    }
}
//  6
function printP6 (num) {
    for(let i=num; i>0; i--) {
        let string = "";
        for(let j=1; j<=i; j++) {
            string += j;
        }
        console.log(string);
    }
}
//  7
function printP7 (num) {
    //  outer loop
    for(let i=0; i<num; i++) {
        let output = "";
        // space loop
        for(let j=0; j<num-i-1; j++) {
            output += " ";
        }
        // stars loop
        for(let j = 0; j<2*i+1; j++) {
            output += "*";
        } 
        // space loop
        for(let j=0; j<num-i-1; j++) {
            output += " ";
        }
        console.log(output);
    }
}
//  8
function printP8 (num) {
    for(let i=0; i<num; i++) {
        let output = "";
        for(let j =0; j<i; j++) {
            output += " ";
        }
        for (let j=0; j<2*num-(2*i+1); j++) {
            output += "*";
        }
        for(let j =0; j<i; j++) {
            output += " ";
        }
        console.log(output);
    }
}
//  9
function printP9(num) {
    for(let i=0; i<num; i++) {
        let output = "";
        for(let j=0; j<num-i-1; j++) {
            output += " ";
        }
        // stars loop
        for(let j = 0; j<2*i+1; j++) {
            output += "*";
        } 
        // space loop
        for(let j=0; j<num-i-1; j++) {
            output += " ";
        }
        console.log(output);
    }
    for(let i=0; i<num; i++) {
        let output = "";
        for(let j =0; j<i; j++) {
            output += " ";
        }
        for (let j=0; j<2*num-(2*i+1); j++) {
            output += "*";
        }
        for(let j =0; j<i; j++) {
            output += " ";
        }
        console.log(output);
    }
}
//  another way
function printP9(num) {
    printP7(num);
    printP8(num);
}
//  10
function printP10 (num) {
    for(let i=1; i<=num; i++) {
        let output = "";
        for(let j=0; j<i; j++) {
            output += "* ";
        }
        console.log(output);
    }
    for(let i=num-1; i>0; i--) {
        let output = "";
        for(let j=0; j<i; j++) {
            output += "* ";
        }
        console.log(output);
    }
}

//      11
function printP11 (num) {
    for(let i=0; i<num; i++) {
        let str = "";
        for(let j=0; j<=i; j++) {
            str += ((i + j) % 2 === 0) ? '1' : '0';
        }
        console.log(str);
    }
}
//  12
let printP12 = (num) => {
    for(let i=1; i<=num; i++) {
        let str = "";
        // numbers
        for(let j=1; j<=i; j++) {
            str += `${j}`;
        }
        //  spaces
        for(let s=1; s<=num*2-2*i;s++) {
            str += " ";
        }
        // numbers
        for(let j=i; j>=1; j--) {
            str += `${j}`;
        }
        console.log(str);
    }
}
//  13
let printP13 = (num) => {
    let count =1;
    for(let i=1; i<=num; i++) {
        let str = "";
        for(let j=1; j<=i; j++) {
            str += `${count} `;
            count++;
        }
        console.log(str);
        count = count;
    }
}
//  14
let printP14 = (num) => {
    // let char = 'A';
    for(let i=1; i<=num; i++) {
        let str = "";
        for(let j=0; j<i; j++) {
            str += String.fromCharCode(65 + j);
           }
        console.log(str);
    }
}
//  15
let printP15 = (num) => {
    for(let i=1; i<=num; i++) {
        let str = "";
        let add = 0;
        for(let j=num; j>=i; j--) {
            str += String.fromCharCode(65 + add);
            add++;
           }
        console.log(str);
    }
}
//  16
let printP16 = (num) => {
    for(let i=1; i<=num; i++) {
        let str = "";
        for(let j=0; j<i; j++) {
            str += String.fromCharCode(64 + i);
        }
        console.log(str);
    }
}
//  17
let printP17 = (num) => {
    for(let i =1; i<=num; i++) {
        let str = "";
        let addc = 0;
        // space
        for(let j=1; j<=num-i; j++) {
            str += " ";
        }
        // characters
        let breakpoint = (2*i-1)/2; 
        for(let c=1; c<=2*i-1; c++) {
            str += String.fromCharCode(65 + addc);
            if(c <= breakpoint) {
                addc++; 
            } else {
                addc--;
            }
            
        }
        // space
        for(let j=1; j<=num-i; j++) {
            str += " ";
        }
        console.log(str);
    }
}
function main(num) {
    // return printP1(num);
    // printP2(num);
    // printP3(num);
    // printP4(num);
    // printP5(num);
    // printP6(num);
    // printP7(num);
    // printP8(num);
    // printP9(num);
    // printP10(num);
    // printP11(num);
    // printP12(num);
    // printP13(num);
    // printP14(num);
    // printP15(num);
    // printP16(num);
    printP17(num);
}
main(5);



