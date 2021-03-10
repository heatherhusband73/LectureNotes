/*
-A falsy value is a value that is considered false when encountered in a boolean context
    -false
    -0
    -"", '', ``
    -null
    -undefined
    -NaN(not a number)
​
-This means that when JavaScript is expecting a boolean and it is given one of values above, it will always evaluate to "falsy".
*/
​
let isOn = true;
​
if (isOn) {
    console.log("The light is on");
}
​
isOn = false;
​
if (isOn) {
    console.log("The light is off");
}
​
let weather = 55;
​
if (weather < 70) {
    console.log("Wear a jacket!");
}
/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
/*
Use this string: let name = 'zAchARy';
​
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/




