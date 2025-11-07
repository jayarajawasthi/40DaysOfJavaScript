/*Task 1: What will be the output of this code snippet and why?

let day = "Monday";
switch(day) {
case "Monday":
    console.log("It's the start of the week");
    break;
default:
    console.log("It's a normal day.")
}
*/

/*Solution:
The output here will be "It's a normal day." since, Monday and monday are two different things because of the case sensitive nature of javascript. And it doesnot matches the first condition(Monday === monday), it falls back to default statement */

/*Task 2: Build an ATM Cash Withdrawl System 
    Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print "withdrawl Successful" if valid: otherwise print "Invalid Amount."
*/

let amount = 50;
switch (amount) {
  case 100:
    console.log("Withdrawl Successful.");
    break;
  case 200:
    console.log("Withdrawl Successful.");
    break;
  case 300:
    console.log("Withdrawl Successful.");
    break;
  case 400:
    console.log("Withdrawl Successful.");
    break;
  case 500:
    console.log("Withdrawl Successful.");
    break;
  default:
    console.log("Enter a valid amount. Amount shouuld in multiples of 100.");
}

/*Task 3: Build a Calculator with switch-case 
    Write a simple calculator that makes an operator( -, + , /, %) as input and performs the operation on two numbers. Print the output on the console.
*/

let a, b;
let operator = "+";
a = 10;
b = 5;

switch (operator) {
  case "+":
    console.log(`Sum  of ${a} and ${b} is ${a + b}`);
    break;
  case "-":
    console.log(`Difference of ${a} and ${b} is ${a - b}`);
    break;
  case "*":
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
    break;
  case "/":
    console.log(`Division of ${a} and ${b} is ${a / b}`);
    break;
  default:
    console.log("Wrong Operator used");
}

/*Task 4: Pay for your movie ticket
    Imagine, the INOX charges ticket prices based on age:
    -> children(<18 years): $3
    -> Adults(18-60years) :$10
    ->Seniors( 60+ years) : $8
    write a program that prints the ticket price based on the person's age.
 */
let age = 4;
if (age < 18) {
  console.log("Ticket price is $3");
} else if (age >= 18 && age <= 60) {
  console.log("Ticket price is $10");
} else {
  console.log("Ticket price is $8");
}

/*Task 5: Horoscope Sign Checker
    Write a program that prints the zodaic sing(Aries, Taurus, Gemini etc) based on a  person's birth month. Make it month bases, not date based.
    like march and april bornes are Aries, april and may born are taurus and so on. Do not us if-else.
 */

let birth_month = "April";

switch (birth_month) {
  case "March":
  case "April":
    console.log("you are Aries");
    break;
  default:
    console.log("You are neither");
}
/*The syntax for writing multiple switch statement is shown above. it felt illogical to have a same person with different zodaic sign. This is because whichever repeated month value comes first, it will put that zodaic sign and break from there. */

/*Task 6: Which Traingle 
    A traingle has 3 sides. A traingle type is determinde by its sides:
    -> All sides equal is called, Equilateral Traingle.
    -> Two sides equal is called IsosCeles Triangle.
    -> All sides different is called Scalene Triangle.
    Take the sides of the triangle and write a program to determine he traingle type. 
    Changes the inputs everytime manuall to see if the output chages correctly.
*/
let side_a, side_b, side_c;
side_a = 2;
side_b = 2;
side_c = 2;

if ((side_a === side_b) === side_c) {
  console.log("It is Equilateral Triangle.");
} else if (side_a === side_b || side_a === side_c) {
  console.log("It is Isosceles Triangle.");
} else {
  console.log("It is Scalene Triangle.");
}
