let [a] = [10]
console.log(a)

let [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//arrays podem ter outros elementos do tipo arrays ou vetores que seriam matrizes

const [, [, nota]] = [[, 8, 8], [9, 6, 8] ]
console.log(nota) //uso nada prático apenas para conhecimento

// ao desistruturar de um objeto vc usa {}
// quando de uma array vc usa []