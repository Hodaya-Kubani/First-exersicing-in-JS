const prompt = require('prompt-sync')();

/*exe 1*/
console.log(`-----Exercise 1:-----`)
let sum_digit = 0;
for(let num = 58423 ;num>0 ;num = Math.floor(num/10)){
        sum_digit+=num%10;
}
console.log(`The sum of the digits of 58423 is ${sum_digit}`)

/*exe 2*/
console.log(`-----Exercise 2:-----`)
const num = Math.floor(Math.random()*10)+1;
let row=""
console.log(`Num rows: ${num}`)
for(let i= 0;i<num;i++){
    row=""
    for(let j=0;j<=i;j++)
        row += `*`
    console.log(row)
}

/*exe 3*/
console.log(`-----Exercise 3:-----`)

const num1 = Number(prompt("Enter number:"))
const num2 = Number(prompt("Enter number:"))
const num3 = Number(prompt("Enter number:"))
const num4 = Number(prompt("Enter number:"))
const num5 = Number(prompt("Enter number:"))

const largest = Math.max(num1,num2,num3,num4,num5)
console.log(`The max number is ${largest}`)

/*exe 4*/
console.log(`-----Exercise 4:-----`)
const number = 10045
console.log(`Num of digits in the number ${number} : ${String(number).length}`)

/*exe 5*/
console.log(`-----Exercise 5:-----`)
const start =5;
const end = 8;
let i = start;
console.log(`The even numbers between ${start} to ${end} inclusive:`)
while(i<=end){
    if(i%2==0)
        console.log(i);
    i++;
}

/* exe 6*/
console.log(`-----Exercise 6:-----`)
let num7 = 1234;
let reverse_num = 0;
while(num7>0)
{
    reverse_num *= 10;
    reverse_num += num7%10;
    num7 = Math.floor(num7/10);
}
console.log(`The digits in reverse of the number 1234 is ${reverse_num}`)

/* exe 7*/
console.log(`-----Exercise 7:-----`)
let row_p =``
for(let i = 1; i<6 ;i++){
    for(let j = 1; j<=i ;j++)
        row_p += i;
    console.log(row_p)
    row_p = ``
}

/* exe 8*/
console.log(`-----Exercise 8:-----`)
const num8 = String(121)
const num9 = String(123)
num8[0] == num8[2] ?
console.log(`The number ${num8} is a palindrom` ) : console.log(`The number ${num8} is a not palindrom` )
num9[0] == num9[2] ?
console.log(`The number ${num9} is a palindrom` ) : console.log(`The number ${num9} is a not palindrom` )

// second option : I will use in the idea :  Math.floor(number / 100) == number % 10 

/* exe 9*/
console.log(`-----Exercise 9:-----`)

const num10 = Math.floor(Math.random()*12)+1
for(let i=1;i<=10;i++)
    console.log(num10 + `x` + i + `=` + (num10*i))

/* exe 10*/
console.log(`-----Exercise 10:-----`)
let num11 = 12
console.log(`The number is ${num11} , the steps until the number becomes 1:`)

while(num11!=1){
    if(num11%2==0)
        num11/=2
    else
        num11 = num11*3 + 1
    console.log(num11)
}
