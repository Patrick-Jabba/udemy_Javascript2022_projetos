// Faça um algoritmo que calcule o fatorial de um número.
        //20 x 3 = 60 x 2 = 120 x 1
//5! = 5 x 4 x 3 x 2 x 1


function fatorial(numero){
    
    if (numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
    
    
    
}

console.log(fatorial(5))

function fatorial2 (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial2(numero - 1)
    }
}

console.log(fatorial2(10))