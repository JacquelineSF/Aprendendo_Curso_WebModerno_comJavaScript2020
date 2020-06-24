const escola = "Cod3r"
console.log(escola.charAt(4)) //Índice, cada letra é um índice e o valor colocado como parametro vai ver qual letra esta no indice 4.
console.log(escola.charAt(5)) // isso seria um erro, pq n tem 5 letras, o JS deixa o valor como vazio quando mostra na tela

console.log(escola.charCodeAt(3)) //Pega o codigo dele no UniCode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('escola '.concat(escola).concat("!"))
/*ou*/ console.log('Escola ' + escola +"!") //chamasse concatenacao

console.log(escola.replace(3, 'e')) //troca o que esta no indice chamado pelo novo valor q é colocado
console.log('Ana,Joao,Maria' . split(',')) //Transformando em array
