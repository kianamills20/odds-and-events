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

// possible createForm()? createButton()? --> 3 buttons, do i need ones for even and odds?
//then some event listeners after compentent functions

function createForm() {
    const $form = document.createElement("form");
    $form.innerHTML = `
    <label>
    Add a number to the bank <input name="addnumber" type="number"/>
    </label>
    <button>Add Number</button>
    <button id="sort-one">Sort 1</button>
    <button id="sort-all">Sort All</button>
    `;
    $form.addEventListener("submit", function(event){
        event.preventDefault();
        const formData = new FormData($form);
        const number = Number(formData.get("addnumber"));
        addNumber(number);
        $form.reset();
        //commit out and in to see changes
});
$form.querySelector("#sort-one").addEventListener("click", sortOne);
$form.querySelector("#sort-all").addEventListener("click", sortAll);
return $form;
}

function numbank(num){
const $bank = document.createElement("div");
$bank.innerHTML = `
<div>
<p class = "bank">
</p>
</div>
`;
$bank.classList.add("bank");
const $p = $bank.querySelector(".bank");
$p.textContent = numberBank.length ? numberBank.join(",") : "Add numbers";
return $bank;
}

function oddsbank(num){
const $bank = document.createElement("div");
$bank.innerHTML = `
<div>
<p class = "bank">
</p>
</div>
`;
const $p = $bank.querySelector(".bank");
$p.textContent = oddNumbers.length ? oddNumbers.join(",") : "Odd numbers";
return $bank;
}

function evensbank(num){    
const $bank = document.createElement("div");
$bank.innerHTML = `
<div>
<p class = "bank">
</p>
</div>
`;
const $p = $bank.querySelector(".bank");
$p.textContent = evenNumbers.length ? evenNumbers.join(",") : "Even numbers";
return $bank;
}

function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML =`
    <h1>Odds and Events</h1>
    <createForm></createForm>
    <main>
    <div class = "numbank"></div>
    <div class = "oddsbank"></div>
    <div class = "evensbank"></div>
    </main>
    `;
    $app.querySelector("createForm").replaceWith(createForm());
    $app.querySelector(".numbank").replaceWith(numbank());
    $app.querySelector(".oddsbank").replaceWith(oddsbank());
    $app.querySelector(".evensbank").replaceWith(evensbank());
}
render();