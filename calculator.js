operators = ["plus", "+", "minus", "-", "times", "*", "divided", "/"];

const input = process.argv.slice(2);

let numOne = Number(input[0]);
const operator = input[1];
const numTwo = Number(input[2]);

if (isNaN(numOne) || isNaN(numTwo) || !operators.includes(operator)) {
  console.error("Wrong Inputs!");
  return null;
}

function calculator(numberOne, operator, numberTwo) {
  let result = null;

  if (operator === "plus" || operator === "+") {
    result = numberOne + numberTwo;
  } else if (operator === "minus" || operator === "-") {
    result = numberOne - numberTwo;
  } else if (operator === "times" || operator === "*") {
    result = numberOne * numberTwo;
  } else if (operator === "divided" || operator === "/") {
    result = numberOne / numberTwo;
  }
  return result;
}

function smarterCalculatore(numberOne, operator){
if (operator === "plus" || operator === "+" ||operator === "minus" || operator === "-" || operator === "times" || operator === "*" || operator === "divided" || operator === "/"){
    result = numberOne + numberOne * numberOne / numberOne
}
return result
}

console.log("Your smarter result is:", smarterCalculatore(numOne, operator))

// console.log("Your result is:", calculator(numOne, operator, numTwo));

