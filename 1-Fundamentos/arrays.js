const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4], valores[1])

valores[4] = 10
console.log(valores)
console.log(valores.length)//numero total de "caixas" do vetor

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //retira o último valor  índex do vetor
delete valores[0] //deleta o valor do índex pedido
console.log(valores)

console.log(typeof valores)//em Js arrays são objetos