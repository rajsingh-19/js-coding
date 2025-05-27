function main() {
    let num = 10;
    doSomething(num);
    console.log(num);  // will be 10; cz it sends a copy of num to the dosomtheing fn
}