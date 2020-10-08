const tec = ["Java Script", "ReactJS", "React Native"];

const verificacao = tec.indexOf("Java Script");
// console.log(verificacao)


// utilizando o método FOR e o comparador === (triple-equals operator)

function temHabilidade() {
    for (let i = 0; i < skills.length; i++) {
        const verifica = (skills[i] == "Javascript") ? true : false;
        // console.log(verifica)
    }
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills)

// utilizando o método filter 


const filtro = skills.filter(element => {
    const filtra = (element === "Javascript") ? true : false;
    // console.log(filtra)
})