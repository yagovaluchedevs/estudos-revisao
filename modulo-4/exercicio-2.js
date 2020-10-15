const user = document.querySelector("#user");
const btn = document.querySelector("#btn-get");
const main = document.querySelector("#main");
const ul = document.querySelector("#list");

const search = async () =>{
    if(!user.value) { return alert("ERROR")}
    
    try {
        const result = await axios.get("https://api.github.com/users/"+ user.value + "/repos");
        return initSearch(result);
    } catch (error) {
        console.log(error)
    }
}

const initSearch = async (result) => {
    result.data.forEach(item => {
        main.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li);

        li.innerHTML = `${ JSON.stringify(item.name)}`;
    })
}
btn.addEventListener("click", search)