const valores = [23,12,8,9.2]
console.log(valores[2])
console.log(valores [5])
valores[5] = 10
console.log(valores.length)
valores.push({id:3} , false, null, 'texto') // push é pra adicionar valores em array. O array é heterogeneo, pode armazenar mtos tipos dentro dele. Porem use separadamente, cada tipo com o seu

console.log(valores)

console.log(valores.pop()) // retira o ultimo elemento
delete valores[0]
console.log(valores)