//while é mais usado para um conteúdo indeterminado de repetições
//não significa que voce não pode usar para uma quantidade determinada de vezes
//o importante sobre as estruturas de repetição é saber qual se adequada melhor ao problema que está tentando ser solucionado

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

while (opcao != -1) /*expressão verdadeira */{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Ate a próxima!')