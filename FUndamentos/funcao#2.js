//armazenando function em variavel ou const

const imprimirSoma = function(a,b){
console.log(a+b)

}

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variavel

const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3))
//retorno implicito

const subtraçao = (a,b) => a - b
console.log(subtraçao(2,3))