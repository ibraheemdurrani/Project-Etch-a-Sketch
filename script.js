let color = "black";

document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);
    let popupBtn = document.getElementById("popup");
    popupBtn.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);
    })

});


function createBoard(size) {
    let container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);

    }
}

function getSize() {
    let input = prompt("What will be that size of the Board?");
    let msg = document.getElementById("msg")
    if (input == "") {
        msg.innerText = "Please Provide us a number"
    }
    else if (input < 0 || input > 100) {
        msg.innerText = "Provide a Number Between 1 and 100";
    }
    else {
        msg.innerText16
            = "Messege Succesfull";
        return input;
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = "black"
    }
}

function setColor(colorChoice) {
     color = colorChoice;
}

function resetBoard (){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white"
    } )
}