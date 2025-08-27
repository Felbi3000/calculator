let num1 = 0;
let num2 = 0;
let sum = 0;
let operatePressed = false;
let operator = undefined;

const inputField = document.querySelector("#calcTxt");
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

function operate (op){
  switch (op){
    case "add":
      sum = num1 + num2;
      break;
    case "sub":
      sum = num1 - num2;
      break;
    case "mul":
      sum = num1 * num2;
      break;
    case "div":
      sum = num1 / num2;
      break;
  }
}



// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    switch (button.id){
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      inputField.value = button.id;
      if (operatePressed === true){num2 = parseFloat(button.id)} else { num1 = parseFloat(button.id);}
      break;
    case "operate":
      operate(operator)
      inputField.value = sum;
      operatePressed = false;
      break;
    default:
      operator = button.id;
      operatePressed = true
      break
  }
  });
});