const ul = document.querySelector("ul");
var nomes = ["Diego", "Gabriel", "Lucas"];

function insert() {

 const lista = nomes.forEach((element) => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = element;
    })

}
insert()