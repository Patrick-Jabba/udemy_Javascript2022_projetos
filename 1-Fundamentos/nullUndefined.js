// Atribuição por referência
const a = {name: 'teste'}
const b = a
console.log(b)
b.name = 'Opa'
console.log(a)

// Atribuição por valor
let c = 3
let d = c
d++
console.log(d)
console.log(c)

let valor // variável não inicializada
console.log(valor) //declarado mas não inicializado "undefined"
//console.log(valor2) // nem declarado foi "not defined" 

valor = null // ausência de valor valor 'definido' mas vazio
console.log(valor)
//console.log(valor.toString()) // Acessar algo que vem antes que está nulo dá Erro

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)









