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
       {
      sum = num1 / num2;
      break;
      };
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
        if (operatePressed === false){
          num1 = parseInt (num1.toString().concat(button.id));
          inputField.value = num1;
        } else {
          num2 = parseInt(num2.toString().concat(button.id));
          inputField.value = num2;
        };
        break;
      case "operate":
        if (operator === "div" && num2 === 0) {
          inputField.value = "ERROR";
          break;
        } else {
          operate(operator)
          num1 = sum;
          inputField.value = num1;
          num2 = 0;
          // operatePressed = false;
          break;
        }
      case "clr":
        num1 = 0;
        num2 = 0;
        sum = 0;
        operatePressed = false;
        inputField.value = "0";
        break;
      default:
        operator = button.id;
        operatePressed = true
        break;
  }
  });
});