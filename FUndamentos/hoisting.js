/*Curiosidade da linguagem: Efeito hoisting.
É a leitura de pegar a variavel que foi declada depois de sua chamada
e jogá-la para cima, porem a primeira ficará com undefined e apenas a segunda receberá o valor. Isso ñ é necessario ser feito, é apenas uma curiosidade. Com let isso nao acontece */

console.log('a =', a)

var a = 2

console.log('a =',a)