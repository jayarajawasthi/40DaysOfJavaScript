console.log("Day three has officially begun...");
/*
    operator -> operators are symbol that perform operation in operand
            -> for example, -, + * ,/ etc
    Operand -> Operand are the term on which operator is used to get the value
            -> for example, in (x + y), x and y are operand and + is operator
    Expression -> An expression is the statement in that results in value
                -> an expression is combination of values, variables, operators, and fucntion calls that the programming language 
                evaluates to produce a single value

        --> Two types of expression: 
            1 --> Assignment Expression: In which assignment of values in variable happens
                --> example, let x = 2;
            2 --> Evaluation Expression: In which the expression is evaluated to get the output/value
                --> example, let x = 2  + 2;
 */

/*
    Types of Operators
    1-> Arithmetic Operator
        --> in the case of numeric values, arithmetic operators work as expected but if you use string, it concatenates and try to avoid concatenating . Instead use  template literal.
        --> for exponention: console.log( a ** b);
        --> Remainder Operator (%)

        --> Pre-Increment Operator:
            let count = 5;
            console.log(count++); //5
            console.log(++count) //7 ( because due to first post increment operator, its value has become 6 and when we apply pre-increment its value again gets incremented by 1 and hence 7)

    2-> Assignment Operator
    3-> Comparison Operator
        --> Various Comparison Operators
            (i)--> loosely equality operators
                --> it converges automatically to nearest possible type
                    -> for example: console.log(0 == false) it gives output as true.Here false is converted to 0 and ==0 is true.
                                    console.log( 3 == '3') . it again gives true, which is wrong. since first one is number 3 and second one is string 3.

                                    --> this is why strict equality operator came into existence.
            (ii)-->Strict Equality Operators
                --> If the operators are of different types, straigt away false. Ex. console.log(3 === '3') . output is false.
                --> If both the operators are null or undefined it returns true.
                    console.log( null === null);  output is true
                    console.log(undefined === undefined) output is truel
                --> If anyone operand is NaN, no matter what other operand it, it always gives false as output.

                -->(in case of Object )
                    let obj1 = {'name': 'tapascript'}
                    let obj2 = {'name': 'tapascript'}
                    console.log(obj1 === obj2); the output is false; ( since non-primitive data types are stored in heaps. since obj1 and obj2 have different memory location and while comparing the equality in case of object, it compares the memory location of the variables and since the memory location of the variables is different, it comes out to be false always.)
                    in case of object, (obj1 === obj2) means, to check whether both objects point at a single memory location/address or not.
            **Note**
            loosely not equal opereators and strictly not equal operators are defined as ( !=) and (!==)
    4-> Relational Operator
    5-> Logical Operator
        -> Different Logical Operators
            (i)->&& (logial AND Operator)
                --> logical AND works like this: (if the first operand can be made false, then it will return first operand and otherwise the second operand)
                        Ex. console.log(false && false) //output is false
                            console.log(true && false) //output is false
                            console.log(true && true)  //output is true
                            console.log(false && true) // output is false

                            TRY TO USE THIS INTUITION HERE
                            console.log("cow" && "Horse") // the output is "Horse"
                            (since both cow and horse are not boolean. and according to above rule, cow can't be made false and it returns the second operand)
            (ii)--> || (logical OR Operator)
                --> in (op1 || op2), if op1 can be made true, then op1 will be returned otherwise second.
                    examples:
                        console.log(false || false) output is false
                        console.log(true || false) output is true
                        console.log(true || true)   Output is true
                        console.log(false || true) output is true

                        console.log("cow" || "horse") output is cow
            (iii)--> ?? (Nullish Coalescing Operator)
                --> op1 ?? op2
                    -->Rule
                        : If the first expression can be converted to null or undefined, then return 2nd otherwise return the first.

                        Example:
                            let a1 = null ?? 1;  // output is 1
                            let a2 = undefined ?? 3;  //output is 3
                            let a3 = false ?? "tapascript" // output is false (since false is neither null nor undefined)
                            const a4 = 0 ?? "tapas"; // output is 0 (since 0 is neither null nor undefined)
            (iv)--> ! (Logical NOT)
                console.log(!false) output is true
    6-> Bitwise Operator
        --> Operators are treated as set of 32bits 0 and 1s
    7-> Conditional Operator
        --> working of conditional operator
            --> condition ? val1 : val2 (condition should return a boolean value and if the boolean values comes out to be true, it should output val1 otherwise it should output val2)
                --> Example:
                let age = 20;
                age >= 60 ?  "senior citizen" : "Non Senior Citizen"
    8-> Grouping
        -->It controls the precedence  of evaluation or the execution in a expression
            -->Example: 
            let a = 1
            let b = 2 
            let c = 3

            console.log(a + b +c ) //output is 6
            console.log(a + (b + c) )//output is 7
            console.log((a + b) * c)// output is 9

        i->  typeOf Operator
            --> typeof operator is operator which returns string that indicates or specifies the type of the operand
                Example: 
                typeof "tapas"//output is string
                typeof false //output is boolean
                
                let size = 100
                typeof size// number

                const numbers = [1,2,3,4]
                typeof numbers  //object


                typeof null; // output object

        ii -> instaceOf Operator
                --> instanceOf is operator that tells whether the given variable is of certain object or not

 */
