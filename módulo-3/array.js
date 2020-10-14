const task = document.querySelector("#task");
const btnElement = document.querySelector("#btn-element");

btnElement.addEventListener("click", addItem)

const list = JSON.parse(localStorage.getItem("list")) || [];


function drawList(){

    const ul = document.querySelector("#list");
    ul.innerText = "";

    list.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerText = item;
        const btn = document.createElement("button");
        btn.innerText = "Apagar";
        btn.addEventListener("click", function(){removeItem(index)})
        li.appendChild(btn);
        ul.appendChild(li);
    })
    task.value = "";
}
drawList();

function addItem(){
    const value = task.value;
    list.push(value);
    drawList()
    saveStorage() 
}

function removeItem(index){
    list.splice(index,  1)
    drawList()
    saveStorage() 
}

function saveStorage() {
    localStorage.setItem("list", JSON.stringify(list));
}

