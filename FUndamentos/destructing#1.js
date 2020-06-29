//cria um obj primmiero

const pessoa = {
    nome: 'Ana',
    idade: 10,
    endereco : {
        logradouro: 'Rua',
        numero: 100
    }
}
//agr a parte de desestruturar/extrair

const {nome, idade} = pessoa  // tire s variavel nome, idade do objeto pessoa.

console.log(nome,idade)

const {nome: n, idade: i} = pessoa // tire a variavel nome e mude para n e tire a variavel idade e mude para i, do objeto pessoa.
console.log(n,i)

//para desestruturar/extrair de dentro da variavel endereco:

const {endereco: {logradouro,numero}} = pessoa

console.log(logradouro,numero)