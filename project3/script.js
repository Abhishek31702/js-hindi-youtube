let password = document.querySelector("#password");
let strength = document.querySelector("#strength");
let button = document.querySelector("#button");
let number = document.querySelector("#number");
let uppercase = document.querySelector("#uppercase");
let char = document.querySelector("#char");

button.addEventListener("click", function () {
    let passValue = password.value;
    strength.textContent = "";
    number.textContent = "";
    uppercase.textContent = "";
    char.textContent = "";

    
    if (passValue.length >= 8) {
        strength.append("Password fulfills the first criteria of minimum 8 letters");

        
        let hasNumbers = /[0-9]/.test(passValue);

        if (hasNumbers) {
            number.append("Password fullfills the second criteria of 0-9");

            let hasUpperCase = /[A-Z]/.test(passValue);
            if (hasUpperCase) {
                uppercase.append("Password fullfills the third criteria of uppercase");
                let hasChar = /[!@#$%^&*]/.test(passValue);

                if(hasChar) {
                    char.append("Password fullfills the criteria of character")
                } else {
                    char.append("Password doesnt contain an character")
                }
            } else {
                uppercase.append("Password does not contain an uppercase letter");
}
        } else {
            number.append("Password doesn't include numbers");
        }

        

    } else {
        strength.append("Password doesn't have 8 letters");
        
    }
});
