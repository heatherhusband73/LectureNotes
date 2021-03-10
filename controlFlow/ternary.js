//A ternary basically acts as a shortcut to writing if, if/else, and else/if statements

let num = 6;

//ternary
(num > 0)?console.log("yes"):console.log("no")
//?= if          : = else

//instead of
if(num > 0){
    console.log("yes");
} else {
    console.log("no");
}

//the above are both examples of ways to write them- if, ternary and  switch are interchangeable

/*
Write a ternary that does the same thing as the age challenge
​
Age Challenge (if else):
​
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 36;
(age >= 25)?console.log("You can rent a car!") : (age >= 21)?console.log("you can drink!") : 
(age >=18)?console.log("you can vote") :
console.log("sorry your too young to do anything fun");