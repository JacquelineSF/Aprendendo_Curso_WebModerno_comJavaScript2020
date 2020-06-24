let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //para tranformar um numero em true ou false vc usa o simbolo de negaçao. ! para false, !! para verdadeiro
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!' ')
//agr para falso

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('pra finalizar...')
console.log(('' || null || 0 ||'epa'))  // vai mostrar o unico valor verdadeiro, se tiver o ! ou !!, vai mostrar true ou false.