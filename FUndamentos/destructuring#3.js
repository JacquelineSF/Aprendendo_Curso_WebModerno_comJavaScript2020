function rand({min = 0, max = 1000}){//passa um objeto para a funcao e da um destruturing

    //para um valor randomico

const valor = Math.random() *  (min - max) + min
return Math.floor(valor)

}
const obj = {max : 50, min: 40}
console.log(rand(obj))