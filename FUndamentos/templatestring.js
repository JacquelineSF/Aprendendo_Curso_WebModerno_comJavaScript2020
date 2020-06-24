const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá

${nome} !`
 
console.log(concatenacao,template)

// expressoes;
console.log(`1 + 1 =  ${1+1}`)

const up = texto => texto.toUpperCase() //O Template String pode chamar uma função tambem. Ainda n sei sobre transformar algo em funcao dessa maneira
console.log(`Ei... ${up('cuidado')} !`)