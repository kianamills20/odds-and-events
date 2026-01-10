/* 1. need three state arrays Bank, Odds, and Evens
2. state change functions like add number, sort 1, and sort all
3. write some component functions the create DOM elements
4. add some event listeners that call state-changes
5. render!!
 */ 

let numberBank = [];

let oddNumbers = [];

let evenNumbers = [];

function addNumber(num) {
   numberBank.push(num);
    render()
}

function isEven(num) {
    return num % 2 === 0;
}
function isOdd(num) {
    return num % 2 !== 0;
}
// added isEven and isOdd for later to help sort in my state functions

function sortOne() {
    if(numberBank.length === 0) {
        return;
    }
    const firstNum = numberBank.shift();
    if(isEven(firstNum)) {
        evenNumbers.push(firstNum);
    }else {
        oddNumbers.push(firstNum);
    }
    render()
} 
//takes the first number of numberBank array and is now pushing it to 
//the correct even or odds array

function sortAll() {
    for(let i = 0; i < numberBank.length; i++) {
        const num = numberBank[i];
        if(isEven(num)) {
            evenNumbers.push(num);
        }else {
            oddNumbers.push(num);
        }
    }
    numberBank = [];
    render()
}
//created a loop so that it loops through all of the numberBank
//and ends up in even or odds
