//                                          ````````````RECURSION`````````````     

// ---RECURSION: It is a phenomenon when a function calls itself indefinitely until a specified condition is fulfilled---

//        Stack Overflow : When a recursive function calls itself, each call is stored in a special memory area called the call stack. If there's no base case (or it’s never reached), the function keeps calling itself forever, filling up the stack. Once the stack runs out of space, it causes a Stack Overflow — and the program crashes.

//        Base condition : It is the condition that is written in a recursive function in order for it to get completed and not to run infinitely. 


let counter = 0;

function printNum () {
    // console.log("PrintNum fn called");

    if(counter === 10) return;
    
    counter++;
    console.log(counter);
    
    printNum();
};

function main () {
    console.log("Main fn called");
    printNum();
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

main();