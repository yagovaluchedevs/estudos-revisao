let usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

const percorrer = usuarios.map(element => {
    return `O ${element.nome} possui as habilidades: ${element.habilidades}`
})

console.log(percorrer)

//    retorno esperado
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir