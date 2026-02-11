function add(){
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    console.log(num1);
    console.log(parseInt(num1)+parseInt(num2))
    let sum = parseInt(num1) + parseInt(num2)
    document.getElementById("result-el").textContent = "Sum: " + sum
}

function subtract(){

     let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    let difference = parseInt(num1) - parseInt(num2)
    document.getElementById("result-el").textContent = "Difference: " + difference
}

function multiply(){
     let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    let product = parseInt(num1) * parseInt(num2)
    document.getElementById("result-el").textContent = "Product: " + product
}

function divide(){
     let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value  
    let quotient = parseInt(num1) / parseInt(num2)
    document.getElementById("result-el").textContent = "Quotient: " + quotient
}