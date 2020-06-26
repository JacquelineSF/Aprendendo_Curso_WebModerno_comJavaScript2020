function imprimirSOma(a, b){
    console.log(a+b)

}
imprimirSOma(2,3)


//function com retorno.
function soma(a,b = 0){
    return a+b

}
console.log(soma(2,3))