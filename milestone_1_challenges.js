// challege : 1 Sum of two numbers
const addition = (num1, num2) => {
  return num1 + num2;
};
console.log(addition(2, 3));

//challege 2 : Convert Minutes into Seconds
const convert = (minutes) => minutes * 60;
console.log(convert(5));
//:challege 3:Perimeter of a Rectangle

const perimeter = (length, width) => {
  return 2 * (length + width);
};
console.log(perimeter(10, 5));
console.log(perimeter(20, 10));

//challege : 4 Check Negative
const isNegative = (number) => {
  if (number < 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isNegative(-1);
isNegative(9);

//  challege : 5 Can I Drive
function CanDrive(name, age) {
  if (age >= 18) {
    console.log(`${name}  is old enough to drive.`);
  } else {
    console.log(`${name} is not old enough to drive yet`);
  }
}
CanDrive("Tasha", 12);
CanDrive("Frank", 23);

// challege : 6 Largest Number
const findLargest = (a, b, c) => {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};
findLargest(10, 7, 5);
findLargest(5, 7, 2);
findLargest(2, 7, 15);
//challege : 7 BMI Calculator

function calculateBMI(weight, height) {
  let BMI = weight / (height * height);

  if (BMI < 18.5) {
    console.log(`Your BMI is ${BMI} - underweight`);
  } else if (BMI <= 24.9) {
    console.log(`Your BMI is ${BMI} -Normal weight`);
  } else if (BMI <= 29.9) {
    console.log(`Your BMI is ${BMI} -Overweight`);
  } else {
    console.log(`Your BMI is ${BMI} -Obese`);
  }
}
calculateBMI(20, 1.6);
calculateBMI(50, 1.6);
calculateBMI(75, 1.6);
calculateBMI(88, 1.6);
// challege : 8 Greeting Based On Time
const greetUser = (name, hour) => {
  if (hour >= 5 && hour <= 11) {
    console.log(`Good morning, ${name}`);
  } else if (hour >= 12 && hour <= 17) {
    console.log(`Good afternoon, ${name}`);
  } else if (hour >= 18 && hour <= 21) {
    console.log(`Good evening, ${name}`);
  } else {
    console.log(`Good night, ${name}`);
  }
};
greetUser("Alice", 2);
greetUser("Alice", 6);
greetUser("Alice", 14);
greetUser("Alice", 19);

//challege : 9 FizzBuzz

function fizzBuzzCheck(number) {
  if (number % 3 == 0) {
    if (number % 5 == 0) {
      console.log("FizzBuzz");
    } else if (number % 3 == 0) {
      console.log("Fizz");
    }
  } else if (number % 5 == 0) {
    console.log("BuZZ");
  } else {
    console.log(`${number}`);
  }
}

fizzBuzzCheck(9);
fizzBuzzCheck(10);
fizzBuzzCheck(15);
fizzBuzzCheck(27);
//challege : 10 perimeter 2
const Perimeter = (l, num) => {
  if (l == "s") {
    console.log(num * 4);
  } else if (l == "c") {
    console.log(6.28 * num);
  } else {
    console.log("Invalid selection");
  }
};
Perimeter("s", 7);
Perimeter("c", 4);
Perimeter("e", 4);
// challege : 11 Sum of Even Numbers
const sumEvenNumbers = (n) => {
  let sum = 0;

  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }

  console.log(sum);
};
sumEvenNumbers(10);
// challege :12 Multiply by Itself
const powerUp = (num, times) => {
  let result = 1;
  for (let i = 1; i <= times; i++) {
    result *= num;
  }
  console.log(result);
};
powerUp(5, 3);

// challage 13 Factorial Calculator

function factorial(n) {
  let multiply = 1;
  for (let i = 1; i <= n; i++) {
    multiply = multiply * i;
  }
  console.log(multiply);
}
factorial(6);
factorial(10);

// challange 14 Multiple Sum

const sumMultiples = (n, divisor) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }
  console.log(sum);
};
sumMultiples(10, 2);
sumMultiples(20, 2);
sumMultiples(7, 5);

// challage 15 Sum of Digits
const sumDigits = (num) => {
  sum = 0;
  for (let i = 0; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }

  console.log(sum);
};

sumDigits(11111);
sumDigits(22);
