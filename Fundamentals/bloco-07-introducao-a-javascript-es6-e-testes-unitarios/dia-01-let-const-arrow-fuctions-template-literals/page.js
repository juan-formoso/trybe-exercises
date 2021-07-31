let clickCount = 0;
let textToDisplay = document.getElementById("text");
document.getElementById("button_test").addEventListener("click", () => textToDisplay.innerHTML = clickCount ++ 1);