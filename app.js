// function greet(){
//    console.log('Hello');
// }
let greet = () => console.log('Hello');
greet(); //invoke

//function as parameters
let logGreeting = (fn) => fn();
logGreeting(() => {console.log('Hello');});

//function expression
// let greetMe = function () {
//     console.log('Hello from the function expression');
// }
let greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greet);
//function are first class, pass it as a parameter

/*let x = 12;
let cuadrado = (x) => x*x;
console.log(`El cuadrado de ${x} es igual a ${cuadrado(x)}`);*/