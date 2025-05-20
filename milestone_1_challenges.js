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