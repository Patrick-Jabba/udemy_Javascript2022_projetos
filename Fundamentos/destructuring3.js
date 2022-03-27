function rand({min = 0, max = 1000}) { //significa que eu vou passar um objeto pra essa função, e dentro da minha função randomica ao inves de acessar o objeto.min e o objeto.max eu quero que ele ja tire de dentro do objeto o atributo min e atributo max já prontos sem precisa acessar a notação'.' objeto.min ou max pra isso EXEMPLO do Operador destructuring

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max :50, min:40}

console.log(rand(obj)) //aqui estou usando um objeto
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand())


//console.log(rand({max: 50, min:40})) //aqui estou usando um objeto


