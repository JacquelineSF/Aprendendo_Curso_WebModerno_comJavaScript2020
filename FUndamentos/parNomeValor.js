const saudacao = 'Hello' //saudacao é o nome, hello é o valor. Esse é um tipo contexto léxico

function exe() {
    const saudacao = 'E ai'
    return saudacao
} // esse é outro tipo de contexto léxico, restrito, porem, se ele nao achar um valor para a variavel dentro de seu contexto, ele vai procurar do lado de fora se tem algum valor para a variavel saudacao(nesse caso). Se ele nao achar o valor para essas variaveis ele dirá que o valor não foi definido.

//Objetos são um conjunto de pares nome/valor ou chave/valor.

const cliente = {
    nome : 'João',
    idade: 22,
    peso: 80,
    rua: {
        logradouro: 'Apto',
        numero: 70
    } //aqui tbm sao contextos diferentes,portanto pode ter variaveis(no caso const) com o mesmo nome.

}

console.log(saudacao)

console.log(exe()) //por ser uma function coloca os parenteses

console.log(cliente)