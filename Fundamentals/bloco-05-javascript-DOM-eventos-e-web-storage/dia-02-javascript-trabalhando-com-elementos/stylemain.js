let h1 = document.createElement("h1");
document.body.appendChild("h1");
h1.innerHTML = "Exercício 5.2 - JavaScript DOM";

let mainContent = document.createElement("div");
mainContent.classList.add("main-content");
document.body.appendChild(mainContent);

let centerContent = document.createElement("div");
centerContent.classList.add("center-content");
document.mainContent.appendChild(centerContent);

let p = document.createElement("p");
p.innerText = "Any value";
centerContent.appendChild(p);

let leftContent = document.createElement("div");
leftContent.classList.add("left-content");
document.mainContent.appendChild(leftContent);

let rightContent = document.createElement("div");
rightContent.classList.add("right-content");
document.mainContent.appendChild(rightContent);

let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.classList.add("small-image");
leftContent.appendChild(img);

let ul = document.createElement("ul");
let numbers = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
for (let index = 0; index < numbers.length; numbers += 1) {
    let li = document.createElement("li");
    li.innerText = numbers[index];
    ul.appendChild(li);
}
rightContent.appendChild(ul);

for (let index = 0; index < 3; index += 1) {
    let h3 = document.createElement("h3");
    h3.innerText = index;
    mainContent.appendChild(h3)
}

const title = document.querySelector("h1");
title.className = "title";

const elementsH3 = document.getElementsByTagName("h3");
for (let index = 0; index < 3; index += 1) {
    elementsH3[index].className = "description";
}

const divLeftContent = document.querySelector(".left-content");
elementDivMain.removeChild(divLeftContent);

const divRightContent = document.querySelector(".right-content");
divRightContent.getElementsByClassName.marginRight="auto";

const divCenterContent = document.querySelector(".center-content");
divCenterContent.parentNode.style.backgroundColor = "green";

ul.lastChild.remove();
ul.lastChild.remove();