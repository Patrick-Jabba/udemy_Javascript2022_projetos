// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

// function bhaskara(a, b, c){
//     delta = (b**2) -(4*a*c)
//     if(delta < 0){
//         return 'Delta é negativo'
//     } else if (delta = 0) {
//         return resultado1 = (-b + delta) / (2*a)
//     } else {
//         return resultado2 = (-b - delta) / (2*a)
        
//     }
// }

function delta(a, b, c){
    d = (b**2) - (4*a*c)
    if (d < 0 ) {
        return 'Delta é negativo'
    } 
    x = []
    x.push((-b + Math.sqrt(d)) / (2 * a))
    x.push((-b - Math.sqrt(d)) / (2 * a))
    return x
    

}
console.log(delta(1, 12, -13))

function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
