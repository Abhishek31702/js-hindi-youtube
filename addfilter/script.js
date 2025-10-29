// Remove this line - you don't need React in vanilla JavaScript
// const { createElement } = require("react");

const addFilter = document.getElementById("addfilter");
const dropdown = document.getElementById("dropdown");
const options = document.querySelectorAll(".options-list li");

const newaddFilter = document.getElementById("newaddfilter");
const dropdowntwo = document.getElementById("dropdowntwo");
const optionstwo = document.querySelectorAll(".optionslisttwo li");

// Toggle dropdown on button click
addFilter.addEventListener("click", function(){
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// Add click event listeners to each option
options.forEach(function(option) {
    option.addEventListener("click", function(){
        const optionValue = this.textContent;
        console.log("Selected:", optionValue);
        
        newaddFilter.style.display = "block";
        newaddFilter.textContent = optionValue;
        dropdown.style.display = "none";
    });
});

// Add event listener to the new filter button (outside the forEach loop)
newaddFilter.addEventListener("click", function(){
    dropdowntwo.style.display = dropdowntwo.style.display === "block" ? "none" : "block";
});

// Add click event listeners to second dropdown options
optionstwo.forEach(function(option) {
    option.addEventListener("click", function(){
        const optionValue = this.textContent;
        console.log("Second dropdown selected:", optionValue);
        
        // Create an input element
        const input = document.createElement("input");
        input.type = "text";
        input.value = optionValue;
        input.placeholder = optionValue;
        
        // Append the input to some container (you'll need to specify where)
        document.body.appendChild(input); // or append to a specific container
        
        // Close the second dropdown
        dropdowntwo.style.display = "none";
    });
});