// Criação de uma lista com 3 elementos
let listaCompra = ["Laranja", "Uva", "Maçã"];
console.log("Lista inicial:", listaCompra);

// Encontrando a posição de um elemento da lista (ex: "Uva") usando indexOf
let posicao = listaCompra.indexOf("Uva");
console.log("Posição do elemento 'Uva':", posicao);

// Adicionando um elemento no final da lista (push)
listaCompra.push("Pera");
console.log("Após adicionar no final:", listaCompra);

// Removendo o último elemento da lista (pop)
listaCompra.pop();
console.log("Após remover o último:", listaCompra);

// Adicionando um elemento no início da lista (unshift)
listaCompra.unshift("Banana");
console.log("Após adicionar no início:", listaCompra);

// Removendo o 1º elemento da lista (shift)
listaCompra.shift();
console.log("Após remover o 1º elemento:", listaCompra);

// Acessando o 2º elemento da lista (posição 1)
console.log("Elemento na posição 1:", listaCompra[1]);

// Alterando um elemento em uma posição específica
listaCompra[1] = "Abacaxi";
console.log("Após alterar o elemento da posição 1:", listaCompra);