let password = document.querySelector("#password");
let strength = document.querySelector("#strength");
let button = document.querySelector("#button");
let number = document.querySelector("#number");

button.addEventListener("click", function () {
    let passValue = password.value;
    strength.textContent = "";
    number.textContent = "";

    // First check: Length
    if (passValue.length >= 8) {
        strength.append("Password fulfills the first criteria of minimum 8 letters");

        // Second check: Numbers (only runs if length is valid)
        let hasNumbers = /[0-9]/.test(passValue);

        if (hasNumbers) {
            number.append("Password fullfills the second criteria of 0-9");
        } else {
            number.append("Password doesn't include numbers");
        }

        // Future checks (like uppercase, symbols) will go here...

    } else {
        strength.append("Password doesn't have 8 letters");
        // Do not run other checks
    }
});
