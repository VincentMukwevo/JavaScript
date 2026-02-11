
// let count = 0;
// console.log(count);

// use let to declare a variable that can change later on.

// let humaDogRatio = 7;
// let myAge = 21;
// let myDogAge = myAge * humaDogRatio;
// console.log(myDogAge);

// document.getElementById("count").innerText = myDogAge;

// let count = 5;
// count = count +1;

// let bonusPoints =50;
// bonusPoints = bonusPoints + 50;
// bonusPoints -= 25;
// bonusPoints += 70;

// console.log(bonusPoints);


// function countDown() {

//     for (let i = 10; i > 0; i--) {
//         console.log(i);
//     }
// }
// countDown();

// // scope is the area where a variable is accessible. Variables declared outside of a function block have global scope. Variables declared within a function block have local scope.
// let lap1 = 34;
//     let lap2 = 33;
//     let lap3 = 36;

// function logLaps(){

//     let totallaps = lap1 + lap2 + lap3;
//     console.log(lap1);
//     console.log(lap2);
//     console.log(lap3);
//     console.log(totallaps);
// }


// let lapsCompleted = 0;

// function logLapTime() {

//     lapsCompleted += 1;
// }

// for (let i = 0; i < 3; i++){
//     logLapTime();
// }

// console.log(lapsCompleted);



// initialize count
// listen for clicks on the increment button
//increment the count varable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {

    
    let countStr = document.getElementById("count").innerText;
    let countInt = parseInt(countStr) + 1;
    document.getElementById("count").innerText = countInt;   

 }

// The DOM is the document object model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can interact with the page. The DOM is not a programming language, but it is a convention for how to access and manipulate HTML and XML documents.

// Save Button and save Function.

function save() {

    let countEl = document.getElementById("count");
    console.log(countEl.innerText);
    document.getElementById("save-el").innerText += " - "+ countEl.innerText;
    countEl.innerText =0;
    

}