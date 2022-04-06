console.log(soma(3, 4)) //o Js carrega todos as funções declaradas ou function declaration antes de começar a ler o código então na linha zero já posso chamar a função declarada

// function declaration
function soma(x, y){
    return x + y 
}

// function expression
const sub = function (x, y){
    return x - y
}
console.log(sub(3, 4)) //as outras funções precisam ser chamadas somente após suas expressões dentro do código.

// named function expression
const mult = function mult(x, y){
    return x * y
}