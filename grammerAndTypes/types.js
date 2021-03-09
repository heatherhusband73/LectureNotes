//******
//Types 
// ******


/*
Booleans

-Are ONLY True or False values
-Booleans are like light switches
*/

let on = true
console.log(on)

let off = false
console.log(off)

/*
NULL
-Null is like an empty bucket, it has the capacity to be be filled, but it currently is not.
*/

let emptyBucket = null
emptyBucket = 'water'
console.log(emptyBucket) ;
  

//null is like a note left to others in your code to let them know this was an intential empty value

/*
UNDEFINED
-Currently has no value assigned
-Acts as the means *(plastic/metal) to create the bucket
*/

let metal; //correct way to assign undefined variable

let metal = undefined; //wrong wAY- NO NEED  to initialize if its not being defined
//the initialization is its definintion

//NULL vs UNDEFINED
//**************
//Null is like an empty bucket, the bucket is there, but there's nothing in it

//Undefined is like the materials we will use to create the bucket

//we can also think of these two varialbes as pizza boxes
//Null is like the empty pizza box, just waiting for a pizza
//undefined is like the unassembled box


let emptyBox = null 
let unassembledBox;

/*
NUMBERS
-In Javascript numbers are literally just numbers
-You can add, subtract, multiply, and divide
-you can use decimals
*/

let degrees = 90 ;
console.log(degrees )


 //will console.log() as 999999999999999
let precise = 999999999999999
console.log(precise)

// will console.log () as 10000000000000000
let rounded = 99999999999999999
console.log(rounded)

//will console.log() as 0.30000000000000004
let notQuite = 0.2 + 0.1
console.log(notQuite)

//Fucntion to convert a a string to numbes IF that
//string is a number
let a = ('123')
console.log(a)

/*
STRING
-A string is any value in between a set of quotes or back ticks
-A can be denoted by '' , "" , 
-'string' === "string" ==='string'
*/

let stringOne = "double quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo)

//Numbers vs Strings
let addition = 1050 + 100
console.log(addition)

let concatenation = '1050' + '100'
console.log(concatenation)
//when we add a number and a string together javascript displays is at a string


console.log(typeof addition)
console.log(typeof concatenation)

/*
OBJECTS
-Can be denoted by {}
-Objects store 2 things, a key and a value
-We can access these value, by digging into  th object
    with dot notation - object.value
 */

    //Say we want to create an app like Spotify
    //We want to take in an artists name, amount of albums
    //they've produced, all members are still alive?

    let artist = {
        //key      //value
        name:    "queen" 
        albums:   '15'
        allMembersAlive: 'false'
    }

    console.log(artist)
    console.log(artist.allMemberAlive)
    console.log(typeof artist.name)

    //how to add to object
    artist.songName = 'I want it all'
    console.log(artist)

    //how to change an ojbect's value
    artist.songName = 'bohemian Rhapsody'
    console.log(artist)

    /*
    ARRAYS

    let list = [ 'item1'  ,  'item2' , 'item3'  ]
                   (0)         (1)       (3)
                
    - Denote by []
    - You can access a value by digging into the array with  array [0] 
    */
   
    let burritos = ['large' , 4, true]

    //console.log() as an object
    //BECAUSE, the numbers assoca
    console.log(typeof burritos)

    //ADDITION VS CONCATENATION
    //Addition is adding numbers together
    //Concatenation is adding strings together

    let add = '100', + '100'

    console.log(add)

    let concat = 'Heather' + 'Husband'
    console.log(concat)



    //*******CHALLENGE*********
    /*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable).
    street
    city
    state
    zipcode

    set each variable to its respective type
    console.log your whoel address (with a space between variable.
        
        if you get done early, try to chage the whole address to us'strin interpolation')
*/


//challenge

let firstName = 'Heather'
let lastName = 'Husband'
let houseNumber = 603
let aptNumber;
let street = "West 6th"
let city = 'Mishawaka'
let state = 'Indiana'
let zipcode = 46544

console.log(firstName, lastName, houseNumber, aptNumber, street, city, state, zipcode)

