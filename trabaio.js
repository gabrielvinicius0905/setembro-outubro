    let carrinho = ["celular", "xbox","Ps5", "SuperNintendo", "Mega Drive"]
    carrinho.splice(2,1)
    console.log(carrinho)

    let planeta = ["Terra", "Marte", "Júpiter"]
    planeta.splice(2,1)
    console.log(planeta)

    let frutas = ["Banana", "Maçã", "Uva", "Pera"]
    frutas.pop("Pera") // Remove 'Pera'
    frutas.shift("Banana") // Remove 'Banana'
    frutas.splice(1,1,)  // Remove 'Uva'
    console.log(frutas)

    let jogos = ["Fifa", "Mortal Kombat", "GTA", "Call of Duty"]
    jogos.pop("Call of Duty") // Remove 'Call of Duty'
    jogos.shift("Fifa") // Remove 'Fifa'
    jogos.splice(1,1,)  // Remove 'GTA'
    console.log(jogos)

    let jogadores = ["Darlan", "Nishida", "Ishikawa", "Miyaura", "Nikolov"]
    jogadores.pop("Miyaura") // Remove 'Miyaura'
    jogadores.shift("Darlan") // Remove 'Nishida'
    jogadores.splice(2,1,)  // Remove 'Ishikawa'
    jogadores.splice(1,1,)  // Remove 'Nikolov'
    console.log(jogadores)