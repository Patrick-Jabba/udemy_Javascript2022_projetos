// função é um verbo, um trecho de código que você pode chamar para executar determinada ação // agrupa uma sentença de códigos ou bloco de códigos nomeado para pode ser chamado quantas vezes quiser // 

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN not a number

imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b

}

console.log(soma(2, 3)) // aqui somou 2 e 3 pq defini o parametro
console.log(soma(2))// aqui somou 2 e 1 pq usou o parametro definido na função

console.log(soma()) //undefined com 1 da NaN