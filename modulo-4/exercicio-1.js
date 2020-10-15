function checaIdade(idade) {
    // Retornar uma promise
    return new Promise (function (resolve, reject) {
      if(idade > 18){ setTimeout(resolve, 2000) } 
      if(idade < 18) { setTimeout(reject, 2000) }
    })
   }
   checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });