/*
-Switch statements execute a block of code depending on different casesd

-The switch statement is often used together with a break or a default keyword (orboth). they are both optional
--  -the break keyword breaks out of the switch block. This will stop the execution of more code or case testing inside the block. 
     if break is ommitted, the next code block in the switch statement is executed.
 -- -the default keyword specifies some code to run if there is no case match. there can only be one default keyword 
 in a switch. Althoght this is optional, it is recommened that you use it, as it ta
 takes care of unexpected cases.
 */

 let officeCharacter = "Kevin";

 switch (officeCharacter) {
     case "Michael":
         console.log ("My mind is goign a mile an hour");
         break;
        case "Dwight":
         console.log("Perfectenschlag");
         break;
    case "Kevin":
        console.log("A mistake plus keleven gets you home by seven");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`)
 }

/*
challenge
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/


    
let desertMenu ="cake"

switch(desertMenu){
    case "pie":
        console.log('pie, pie, me oh my!');
        break;
    case "cake":
        console.log('cake is great!');
        break;
    case "iceCream":
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`${desertMenu}, is Not on the menu`)
}