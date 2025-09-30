console.log("Trabalhando com variaveis");
console.log("Destinos possiveis:");
listaDeDestinos=new Array("Maringa","Sarandi","floresta");
const idadeDoComprador=30;
if(idadeDoComprador >= 18){
    console.log("Posso comprar e viajar");
    listaDeDestinos.shift()
}else{
    console.log("Não Pode viajar de forma alguma");

}
console.log(listaDeDestinos);