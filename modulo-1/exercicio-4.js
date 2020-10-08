function experiencia(anos) {
    if (anos == null) { console.log("Valor Inválido") }
    if (anos === 0 || anos === 1) { console.log("Iniciante") }
    if (anos > 1 && anos <= 3) { console.log("Intermediário") }
    if (anos > 3 && anos <= 6) { console.log("Avançado") }
    if (anos >= 7) { console.log("Jedi Master") }
}
experiencia(3);