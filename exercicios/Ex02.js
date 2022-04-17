// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulosLados (l1, l2, l3){
    if (l1 == l2 == l3){
        console.log("Este é um triângulo equilátero")
    } else if (l1 == l2 || l2 == l3 || l1 == l3){
        console.log("Este é um triângulo isósceles")
    } else console.log ("Este é um triângulo Escaleno")
}

triangulosLados(3, 1, 1)