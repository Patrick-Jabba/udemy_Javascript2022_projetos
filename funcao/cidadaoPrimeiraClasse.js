// função em JS é first class citizen
// higher-order function

//criar uma função de forma literal
function function1(){

}

// Armazenar a função em uma variável
const function2 = function() {

}

// Armazenar a função dentro de uma array

const array = [function(a, b) {return a + b}, function1, function2 ]

console.log(array[0] (2, 3))

//Armazenar a função em um atributo de objeto
const obj = {}
obj.falar = function() {
    return 'Opa'
} 
console.log(obj.falar())

//Passar uma função como parametro para outra função
function run(fun){
    fun()
}

run(function (){console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma (a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3) (4)
const cincoMais = soma(2, 3)
cincoMais(4)