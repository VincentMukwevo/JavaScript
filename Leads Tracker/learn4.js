
// function save(){
//     console.log("Button clicked");
// }

let inputBtn = document.getElementById("save-btn");
let history = document.getElementById("history-el");
let myLeads = [];

function start(){
    const stored = JSON.parse(localStorage.getItem("myLeads"));
    myLeads = Array.isArray(stored) ? stored : [];

    if (myLeads.length > 0){
        for (let i = 0; i < myLeads.length; i++){
            // creating the link element and setting its properties
            let leadLink = document.createElement("a");
            leadLink.textContent = myLeads[i];
            leadLink.href = myLeads[i]; // Set the href to the input value or a default value
            leadLink.target = "_blank"; // Open the link in a new tab
            
            // Appending the link to a new list item and then appending the list item to the history list
            let li = document.createElement("li");
            li.appendChild(leadLink);
            history.append(li);
        }
    }
}

 // we used the JSON.stringify() method to convert the myLeads array into a JSON string before saving it to local storage, and the JSON.parse() method to convert the JSON string back into an array when retrieving it from local storage.

inputBtn.addEventListener("click", function(){
    
    if (document.getElementById("input-el").value === "") {
        alert("Please enter a lead before saving."); // Alert the user if the input field is empty
        return; // Exit the function if the input field is empty
    }
    renderLeads();
})

function renderLeads(){
    const inputEl = document.getElementById("input-el");

    myLeads.push(inputEl.value);

    //     for (let i = 0; i < myLeads.length; i++){ history.innerHTML += "<li>" + myLeads[i] +"</li>";}
    //     inputEl.value = "";
    // The above is an unsafe way to update the DOM because it can lead to XSS attacks if the input is not sanitized. Instead, we should create a new list item element and append it to the history list.
    let leadLink = document.createElement("a");
    leadLink.textContent = inputEl.value;
    leadLink.href = inputEl.value; // Set the href to the input value or a default value
    leadLink.target = "_blank"; // Open the link in a new tab

    let li = document.createElement("li");
    li.appendChild(leadLink);
    history.append(li);
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Save the leads to local storage as a JSON string

   // alert(`Lead saved: ${inputEl.value}`);  we used a template string to display the saved lead in an alert box
    inputEl.value = ""; // Clear the input field after saving the lead
}

start();