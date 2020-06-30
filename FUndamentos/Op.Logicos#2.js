function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 =  !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //ao invez de usar o q falado acima, usou-se assim, com diferença
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50,comprarTv32, manterSaudavel} //aqui ele ja cria um objeto sem precisar colocar explecidamente a chave e o valor, ele faz isso por voce
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,false))
//                      operadores unarios
let num1 = 1
let num2 = 2
console.log(++num1 === num2--)  //vai dar true, pois ++num1 é avaliado primeiro que o num2--