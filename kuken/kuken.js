
"Use Strict"

function growPenis() {

    let penis = document.getElementById('penis');

    let penisText = penis.innerText;

    let penisLength = penisText.length - 2;

    let newPenisLength = penisLength + 1;

    let newPenis = "8" + "=" + "D";

    let shaft = "=";

    while (shaft.length < newPenisLength) {

        shaft += "=";

    }

    newPenis = "8" + shaft + "D";

    penis.innerHTML = newPenis;

}

function shrinkPenis() {

    let penis = document.getElementById('penis');

    let penisText = penis.innerText;

    let penisLenght = penisText.length - 2;

    let newPenisLength = penisLenght - 1;

    let newPenis = "8" + "=" + "D";

    let shaft = "=";

    while (shaft.length < newPenisLength) {

        shaft += "="; 

    }

    newPenis = "8" + shaft + "D";

    penis.innerHTML = newPenis;


}


let growPenisButton = document.getElementById("growPenis");

growPenisButton.addEventListener('click', growPenis);

let shrinkPenisButton = document.getElementById("shrinkPenis");

shrinkPenisButton.addEventListener('click', shrinkPenis);