 console.log(Math.ceil(6.1))

 const obj1 ={}
 obj1.nome = 'Bola'
 //obj1['nome'] = 'BOla2'  vai subscrever o que estava dentro de nome, no caso Bola. É melhor usar so o de cima.
 console.log(obj1.nome)

 //por causa do this, vc consegue chamar a function e mudar o que esta dentro dela, sem subscreve-la, apenas copiando e usando ela de novo.
 
 function obj(nome){
     this.nome = nome
 }
 const obj2 = new obj('Cadeira')
 const obrj3 = new obj('Mesa')

 console.log(obj2.nome)
 console.log(obrj3.nome)