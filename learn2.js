
// function nameFxn() {

//     // create two variables that store the first name and the last name
//     let firstname = "Vincent";
//     let lastname = "Mukwevo";

//     // create a variable that concatenates the first name and the last name to create a full name
//     let fullname = firstname + " " + lastname;

//     // print the full name variable to the console
//     console.log(fullname);  

// }

// let firstname = "Vincent";
// let greeting = "Hi there, "

// function greet() {

//     let greetingMessage = greeting + firstname + "!" ;
//     console.log(greetingMessage);
// }

// greet();


let myPoints = 3;

// create two fxn, add3Points() and remove1Point() and have them add/remove points to myPoints

function add3Points(){

    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}


// call the functions to that the points change myPoints to 10 and print out the value of myPoints to the console
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

// Note console.log("My points: " + 4 + 2) will print "My points: 42" because the + operator is used for both addition and string concatenation. When it encounters a string, it treats the numbers as strings and concatenates them instead of adding them. To get the correct result, you can use parentheses to ensure the addition happens before concatenation: console.log("My points: " + (4 + 2)) will print "My points: 6".