console.log("task for day 3 has begun...");

/*Task 1. Odd or Even?
    --> Take a number and find if the number is an odd or even number.
    --> Print the number and result in console.
 */

let a = 2;

let x = a % 2 === 0 ? "even" : "odd";
console.log(x);
console.log(`The given number is ${a} and is ${x} `);

/*Task 2: Do you hava a Driving License?
    Let's check if you are eligible to get driving license. The eligibility to get a driving license is 18 years.
    --> Manage age as a variable.
    --> Check if the age is eligible or a driving license and print it on the console accordingly.
 */

let age = 17;
let is_Eligible = age >= 18 ? "Eligible" : "Not Eligible";

console.log(is_Eligible);
console.log(` age ${age} for getting driving license is  ${is_Eligible}`);

/*Task 3: Calculate CTC with a bonus 
    Let's calculate how much you earn from your office.
    --> You get 12300 rupees as your monthly salary.
    --> You get a 20% bonus on your annual salary.
    --> How much money do you make per annum as CTC?
*/
let salary = 12300;
let bonus = 20;
let annual_salary = salary * 12;
let annualCTC = annual_salary + annual_salary * 0.2;
console.log(
  `Annual ctc for salary ${salary} with bonus ${bonus}% is ${annualCTC}.`
);

/*Task 4: Write a program for the traffic light simulation 
Red light...Green light...let's play
    --> Create a color variable.
    --> Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and green color is for GO.
*/

let color = "green";
console.log(color === "red" ? "STOP" : "GO");

/*Task 5: Create an Electricity Bill Calculator 
Let's calculate how much you pay for electricity bils per month and annually.
    --> Create a units variable. Based on this value you will calculate the total elelctricity bill for a months.
    --> if each day you consume the units and each unit costs 150 rupess, how much will you be charged per month.
    --> if there is a 20% discount on the annnual payment, how much will you be charged for an annual payment?
*/
let units = 1;
let units_per_month = 30;
let charge_per_unit = 150;
let charge_per_month = units_per_month * charge_per_unit;
let charge_per_annum = charge_per_month * 12 - charge_per_month * 12 * 0.2;

console.log(`Charge per month is ${charge_per_month} rupees.`);
console.log(`Annual Charge after 20% discount is ${charge_per_annum} rupees.`);

/*Task 6: Leap Year Checker
    Is 2025 a Leap Year?
    --> Take year as input.
    --> Use the arithmetic opereator and ternary operator to print if the year is a leap year or not.
 */

let year;

/* Task  7 : Max of Three Numbers
Find the max number from the lot.
    --> Take three numbers and assign them to variables p,q and r.
    --> Now find the maximum of these three numbers using the comparison operators.
*/

let p, q, r;
p = 10;
q = 5;
r = 6;
console.log(p > q && p > r ? p : q > r ? q : r);

/*Task 8: Bitwise Doubling 
A tricky one for you
    --> Crate a variable count and assign a value, say 5.
    --> Now use the Bitwise shift operator to make the number double.
    -->Print it on the console.
*/
