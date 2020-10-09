let inputElement = document.querySelector(".input-element");
let btnElement = document.querySelector(".btn-element");
let ul = document.querySelector(".listagem");

btnElement.addEventListener("click", function (){
    if(inputElement.value == null || inputElement.value == 0){return alert("escreva algo")}

    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = inputElement.value;

    inputElement.value = "";
})
