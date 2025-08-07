let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let button = document.querySelector("button");
let results = document.querySelector("#results");

button.addEventListener("click", function() {
    let h = parseFloat(height.value);
    let w = parseFloat(weight.value);

    if (h > 0 && w > 0) {
        let bodyMassIndex = w / ((h / 100) ** 2);
        results.textContent = `Your BMI is: ${bodyMassIndex.toFixed(2)}`;
    } else {
        results.textContent = "Please enter valid height and weight.";
    }
});
