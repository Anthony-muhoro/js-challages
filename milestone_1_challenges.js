// Challenge 1: Sum of two numbers
const addition = (num1,num2)=>{
    return num1+num2;
    

}
console.log(addition(2,3));

//challenge 2 : Convert Minutes into Seconds
const convert = (minutes)=> minutes*60;
console.log(convert(5))
//:challege 3:Perimeter of a Rectangle

const perimeter = (length,width) =>{
    return 2*(length+width)
}
console.log(perimeter(10,5))
console.log(perimeter(20,10))

// Check Negative
const isNegative=(number)=>{
    if(number<0){
        console.log(true);
        

    }
    else{
        console.log(false)
    }
}
isNegative(-1)
isNegative(9)

//  Can I Drive
function CanDrive(name,age){
    if(age>=18){
        console.log(`${name}  is old enough to drive.`)
    }
    else{
        console.log(`${name} is not old enough to drive yet`)
    }

}
CanDrive("Tasha",12)
CanDrive("Frank",23)

//  Largest Number
const findLargest=(a, b, c)=>{
    if(a>b && a>c){
        console.log(a)
    }
    else if(b>a && b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }

}
findLargest(10,7,5)
findLargest(5,7,2)
findLargest(2,7,15)
// BMI Calculator

function calculateBMI(weight, height){
    let BMI = weight / (height * height)

    if (BMI<18.5){
        console.log(`Your BMI is ${BMI} - underweight`)
    }else if(BMI<=24.9){
        console.log(`Your BMI is ${BMI} -Normal weight`)
    }else if(BMI<=29.9){
        console.log( `Your BMI is ${BMI} -Overweight`)
    }else{
        console.log(`Your BMI is ${BMI} -Obese`)
    }
}
calculateBMI(20, 1.60)
calculateBMI(50, 1.60)
calculateBMI(75, 1.60)
calculateBMI(88, 1.60)
// Greeting Based On Time
const greetUser=(name, hour)=>{
    if(hour>= 5 &&hour <=11){
        console.log(`Good morning, ${name}`)
    }
    
    else if(hour>=12 &&hour<=17){
        console.log(`Good afternoon, ${name}`)
    }
    else if(hour>=18 &&hour<=21){
        console.log(`Good evening, ${name}`)
    }
    
    else {
        console.log(`Good night, ${name}`)
    }
    

}
greetUser("Alice", 2)
greetUser("Alice", 6)
greetUser("Alice", 14)
greetUser("Alice", 19)

// FizzBuzz

function fizzBuzzCheck(number){
    if(number % 3 == 0){
         if(number % 5 == 0 ){
        console.log("FizzBuzz")
    }
     else if(number % 3 == 0){
        console.log("Fizz")
    }
    }
    else if(number % 5 == 0){
        console.log("BuZZ")
     

    }
       
    
   else {
        console.log(`${number}`)
    }
}

fizzBuzzCheck(9)
fizzBuzzCheck(10)
fizzBuzzCheck(15)
fizzBuzzCheck(27)
// perimeter 2
const Perimeter =(l,num)=>{
    if(l=="s"){
        
       console.log(num*4);
       
    }
    else if(l=="c"){
       
        console.log( 6.28 *num)
    }
    else {
        console.log("Invalid selection")
    }

}
Perimeter("s",7)
Perimeter("c",4)
Perimeter("e",4)

