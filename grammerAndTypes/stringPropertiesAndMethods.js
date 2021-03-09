/*
-Properties are qualities associated with a data type
-Strings only have one singular propert for us to access, tht beig the length property
*/

let myName = "Heather";
console.log(myName.length)

/*
-Methods are tools that can hlep us manipulate data
.property vs .method()
-Methods are fucntions associated with data types
*/


let myNameIs = "Heather";
console.log(myNameIs.toUpperCase());

let home = "My Home is South Bend0";
console.log(home.includes("South Bend")) 


//Challenge: use Google, find MDN documentatio for Strings, research and use the split method to get an 
//array back from the string below


/*The split() method divides a String into an ordered list of substrings, puts these substrings
 into an array, and returns the array.  
 The division is done by searching for a pattern; 
 where the pattern is provided as the first parameter in the method's call
 */

let sent = "This sentence will be split into individual parts"
console.log(sent.split("")) ;