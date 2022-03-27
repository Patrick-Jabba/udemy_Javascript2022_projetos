console.log(typeof Object)
console.log(typeof new Object) // <=poderia colocar os parenteses nesse exemplo do new pois o que vc esta fazendo é instanciar a função transformando-a num objeto

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //detalhe de sintaxe 
console.log(typeof Produto)
console.log(typeof new Produto()) //<= mesmo exemplo comentando acima com a inclusão dos parenteses 


