/*

Quando você deve usar o reduce:

Quando baseado no array original, você precisar "reduzir" o array à um valor.

[1, 2, 3] pós reduce querendo somar esses valores:

[6]

*/

const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)
console.log(numbers)

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

  const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
      if(phaseScore.name ==='Roger Melo'){
       return phaseScore.score + accumulator

      }
      
      return accumulator
  
  }, 0)

  console.log(rogerScore)