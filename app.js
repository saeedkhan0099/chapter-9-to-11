// 1. City name
const cityName = prompt("Enter your city name:");

if (cityName.toLowerCase() === "karachi") {
  alert("Welcome to city of lights!");
} else {
  alert("Welcome to " + cityName + "!");
}

// 2. Gender
const gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir!");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am!");
} else {
  alert("Please enter a valid gender (male/female).");
}

// 3. Traffic signal
const signalColor = prompt("Enter the color of the traffic signal (red/yellow/green):");

switch (signalColor.toLowerCase()) {
  case "red":
    alert("Must Stop");
    break;
  case "yellow":
    alert("Ready to move");
    break;
  case "green":
    alert("Move now");
    break;
  default:
    alert("Please enter a valid color (red/yellow/green).");
}

// 4. Fuel level
const fuelLevel = parseFloat(prompt("Enter the remaining fuel level in liters:"));

if (fuelLevel < 0.25) {
  alert("Please refill the fuel in your car!");
} else {
  alert("You have enough fuel!");
}

//5.Here's a breakdown of the JavaScript code snippets and the expected outputs, along with explanations:

//a. var a = 4;

//if (++a === 5) { ... }

//++a is a pre-increment operator. It adds 1 to a before the comparison.
//=== is a strict equality check (data type and value must match).
//Output: "given condition for variable a is true" will be alerted because a becomes 5 after the pre-increment, satisfying the condition.

//b. var b = 82;

//if (b++ === 83) { ... }

//b++ is a post-increment operator. It adds 1 to b after the comparison.
//=== is a strict equality check (data type and value must match).
//Output: No alert. The condition is false because b is 82 before the increment, so it doesn't equal 83.

//c. var c = 12;

//if (c++ === 13) { ... }

//c++ is a post-increment operator. It adds 1 to c after the comparison.
//=== is a strict equality check (data type and value must match).
//Output: "condition 1 is true" will be alerted because c is 12 before the increment, making the condition true.

//if (c === 13) { ... }
//if (c++ === 13) { ... }

//c++ is a post-increment operator. It adds 1 to c after the comparison.
//=== is a strict equality check (data type and value must match).
//Output: "condition 1 is true" will be alerted because c is 12 before the increment, making the condition true.

//if (c === 13) { ... }

//=== is a strict equality check (data type and value must match).
//Output: "condition 2 is true" will be alerted because c was incremented to 13 in the previous condition.

//if (++c < 14) { ... }

//++c is a pre-increment operator. It adds 1 to c before the comparison.
//< is a less than comparison.
//Output: "condition 3 is true" will be alerted. c is 14 after the pre-increment, and 14 is less than 14.

//if (c === 14) { ... }

//=== is a strict equality check (data type and value must match).
//Output: "condition 4 is true" will be alerted because c was incremented to 14 in the previous condition.

//d. var materialCost = 20000;

//var laborCost = 2000;

//var totalCost = materialCost + laborCost;

//if (totalCost === laborCost + materialCost) { ... }

//=== is a strict equality check (data type and value must match).
//Output: "The cost equals" will be alerted because the total cost is indeed calculated as the sum of 
//materialCost and laborCost.

//e. if (true) { ... }`

//Output: "True" will be alerted because the condition is always true.

//if (false) { ... }

//Output: No alert because the condition is always false.

///f. if ("car" < "cat") { ... }`

//Output: "car is smaller than cat" will be alerted because in string comparison, "car" comes before "cat" in alphabetical order.
//Let me know if you have any other JavaScript snippets you'd like explained!

// 6.Get the total marks from the user
totalMarks = prompt("Enter total marks:");
console.log("Total marks is :" +totalMarks)

// Get the marks obtained from the user
marksObtained = prompt("Enter marks obtained:");
console.log("Marks obtained is :"+marksObtained)

// Calculate the percentage
percentage = (marksObtained / totalMarks) * 100;
console.log("The percentage is:" +percentage)

// Calculate the grade based on the percentage
//let grade;
//let remarks;

if (percentage >= 80) {
  console.log("Your grade is A-one");
  console.log("Your performance is Excellent") ;
} else if (percentage >= 70) {
  console.log("Your grade is A");
  console.log("Your performance is Good") ;
} else if (percentage >= 60) {
  console.log ("Your grade is B");
  console.log("You need to improve");
} else {
  console.log("You are Fail");
  console.log("Sorry");
}

// 7. Guess game:
function guessGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let guess = parseInt(prompt("Guess a number between 1 and 10:"));
  
    while (guess !== secretNumber) {
      if (guess === secretNumber + 1) {
        alert("Close enough to the correct answer.");
      } else {
        alert("Try again.");
      }
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
    }
  
    alert("Bingo! Correct answer.");
  }
  
  // 8. Divisible by 3:
  function divisibleBy3() {
    const number = parseInt(prompt("Enter a number:"));
  
    if (number % 3 === 0) {
      alert("The number is divisible by 3.");
    } else {
      alert("The number is not divisible by 3.");
    }
  }
  
  // 9. Even or Odd:
  function evenOrOdd() {
    const number = parseInt(prompt("Enter a number:"));
  
    if (number % 2 === 0) {
      alert("The number is even.");
    } else {
      alert("The number is odd.");
    }
  }
  
  // 10. Temperature Message:
  function temperatureMessage() {
    const temperature = parseFloat(prompt("Enter the temperature:"));
  
    if (temperature > 40) {
      alert("It is too hot outside.");
    } else if (temperature > 30) {
      alert("The weather today is Normal.");
    } else if (temperature > 20) {
      alert("Today's weather is cool.");
    } else if (temperature > 10) {
      alert("OMG! Today's weather is so cool.");
    } else {
      alert("It's cold outside.");
    }
  }
  
  // 11. Calculator:
  function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter the operation (+, -, *, /, %):");
  
    let result;
  
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          alert("Cannot divide by zero.");
          return;
        }
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        alert("Invalid operation.");
        return;
    }
  
    alert("The result is:" +result);
  }
  
  // Call the functions to test them
  guessGame();
  divisibleBy3();
  evenOrOdd();
  temperatureMessage();
  calculator();