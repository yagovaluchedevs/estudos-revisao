const div = document.querySelector(".quadrado");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "black";

let quadrado = div.addEventListener("click", function gerar() {

    const body = document.querySelector("body");
    
    let divTwo = document.createElement("div");
    
        divTwo.style.width = "100px";
        divTwo.style.height = "100px";
        divTwo.style.backgroundColor = colorRandom();
        body.appendChild(divTwo)

    return divTwo++;
})

function colorRandom() {
    let caracteres = "0123456789ABCDEF";
    let color = "#";
    
    for(let i = 0; i < 6; i++){
          color += Math.floor(Math.random() * 10 );
    }
    return color;

}
