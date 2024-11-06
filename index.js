let inputField = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

if (!inputField) {
    console.error("Input field not found");
}
inputField.value = "0";

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonText = event.target.textContent.trim();

       
        if (inputField.value === "0" && buttonText !== "=" && buttonText !== "C") {
            inputField.value = buttonText; 
        } else if (buttonText !== "=" && buttonText !== "C") {
            inputField.value += buttonText; 
        }
    });
});

equal.addEventListener("click", () => {
    if (inputField.value === '') {
        inputField.value = '0'; 
    } else {
        try {
            let result = eval(inputField.value); 
            if (isNaN(result)) {
                throw new Error("Invalid calculation result");
            }
            inputField.value = result;
        } catch (error) {
            inputField.value = 'Error'; 
            console.error("Error in calculation:", error);
        }
    }
});

clear.addEventListener("click", () => {
    inputField.value = "0"; 
});
